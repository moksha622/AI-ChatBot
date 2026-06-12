const express = require("express");
const router = express.Router();
const multer = require("multer");
const { PDFParse } = require("pdf-parse");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
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
      const dataBuffer = fs.readFileSync(req.file.path);

      const parser = new PDFParse({
        data: dataBuffer,
      });

      const pdfData = await parser.getText();

      console.log("===== PDF TEXT START =====");
      console.log(pdfData.text);
      console.log("===== PDF TEXT END =====");

      res.json({
        text: pdfData.text,
      });

    } catch (error) {
      console.log("PDF ERROR:");
      console.log(error);

      res.status(500).json({
        error: "PDF Processing Failed",
      });
    }
  }
);

module.exports = router;