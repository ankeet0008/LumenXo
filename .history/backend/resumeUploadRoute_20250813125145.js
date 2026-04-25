import express from "express";
import multer from "multer";
import cloudinary from ".";

const router = express.Router();

// Store file in memory (buffer) instead of disk
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload-resume", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "job-applications/resumes",
          resource_type: "auto" // pdf, docx, etc.
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    res.json({
      message: "Resume uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id
    });

  } catch (err) {
    console.error("Cloudinary upload error:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

export default router;
