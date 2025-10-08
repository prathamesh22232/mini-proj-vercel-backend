const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: String,
  filename: String,
  year: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
