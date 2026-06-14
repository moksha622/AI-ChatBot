const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const mammoth = require("mammoth");
const { PDFParse } = require("pdf-parse");
const Tesseract = require("tesseract.js");

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },


  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("pdf"),
  async (req, res) => {
    try {
      const filePath = path.resolve(req.file.path);

      const ext = path
        .extname(req.file.originalname)
        .toLowerCase();

      let extractedText = "";

      // PDF
      if (ext === ".pdf") {
        const dataBuffer =
          fs.readFileSync(filePath);

        const parser =
          new PDFParse({
            data: dataBuffer,
          });

        const pdfData =
          await parser.getText();

        extractedText =
          pdfData.text;
      }

      // DOCX
      else if (ext === ".docx") {
        const result =
          await mammoth.extractRawText({
            path: filePath,
          });

        extractedText = result.value;
      }

      // TXT
      else if (ext === ".txt") {
        extractedText =
          fs.readFileSync(
            filePath,
            "utf8"
          );
      }

      // PPTX
      else if (ext === ".pptx") {
        extractedText =
          "PPTX support coming next.";
      }
      // JPG JPEG PNG
else if (
  ext === ".jpg" ||
  ext === ".jpeg" ||
  ext === ".png"
) {

  const result =
    await Tesseract.recognize(
      filePath,
      "eng"
    );

  extractedText =
    result.data.text;
}

      else {
        extractedText =
          "Unsupported file type.";
      }

      console.log(
        "===== DOCUMENT TEXT START ====="
      );

      console.log(extractedText);

      console.log(
        "===== DOCUMENT TEXT END ====="
      );

      res.json({
        text: extractedText,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        error:
          "Document Processing Failed",
      });
    }
  }
);

module.exports = router;
