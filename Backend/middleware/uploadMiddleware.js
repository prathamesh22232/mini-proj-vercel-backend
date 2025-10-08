import multer from "multer";
import path from "path";

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to 'uploads/' folder
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// File filter (Only PDFs allowed)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDFs are allowed"), false);
  }
};

// Initialize upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Max size 10MB
});

export default upload;
