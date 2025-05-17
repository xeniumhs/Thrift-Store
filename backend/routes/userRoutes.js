import express from "express";
import multer from "multer";
import path from "path";
import {
  registerUser,
  loginUser,
  uploadFile, deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure 'uploads/' folder exists and is accessible
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1 MB
});

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/upload", upload.single("file"), uploadFile);
router.delete("/:id", deleteUser);

export default router;
