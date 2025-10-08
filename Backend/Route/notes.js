const express = require("express");
const multer = require("multer");
const Note = require("../models/Note");
const router = express.Router();
const path = require("path");

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Upload route
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title, year } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newNote = new Note({
      title,
      year,
      filename: req.file.filename,
    });

    await newNote.save();
    res.status(201).json({ message: "Note uploaded successfully" });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server error while uploading" });
  }
});

module.exports = router; // ✅ Don't forget this!
