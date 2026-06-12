const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const chatRoutes = require("./routes/chatRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
const documentRoutes = require("./routes/documentRoutes");

app.use("/api/chat", chatRoutes);
app.use("/api/pdf", pdfRoutes);
app.use("/api/document", documentRoutes);

app.get("/", (req, res) => {
  res.send("Backend Working 🚀");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    console.log("MongoDB Connected")
  )
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});