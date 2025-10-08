import Note from "../models/Note.js";
import { v2 as cloudinary } from "cloudinary";

// Upload a new note
export const uploadNote = async (req, res) => {
  try {
    const { title, subject, year, examType } = req.body;
    const fileUrl = req.file.path; // Assuming multer saves the file

    // Save the note in the database
    const note = new Note({ title, subject, year, examType, fileUrl, uploadedBy: req.user.id });
    await note.save();

    res.status(201).json({ message: "Note uploaded successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Fetch all notes
export const getNotes = async (req, res) => {
  try {
    const { year, examType } = req.query; // Get filter parameters
    const notes = await Note.find({ year, examType });

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
