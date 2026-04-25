import express from "express";
import multer from "multer";
import JobApplication from "../models/JobApplication.js";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();


const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } 
});

router.post("/job-application", upload.single("resume"), async (req, res) => {
  try {
    const {
      role,
      full_name,
      qualification,
      location,
      email,
      mobile,
      experience
    } = req.body;

    if (!role || !full_name || !email) {
      return res.status(400).json({ error: "role, full_name, and email are required." });
    }

    let resumeUrl = null;
    let resumePublicId = null;

    if (req.file) {
  
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "job-applications/resumes",
            resource_type: "auto" 
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      resumeUrl = uploadResult.secure_url;
      resumePublicId = uploadResult.public_id;
    }

    const doc = await JobApplication.create({
      role,
      full_name,
      qualification,
      location,
      email,
      mobile,
      experience,
      resumeUrl,
      resumePublicId
    });

    return res.status(201).json({ message: "Application submitted successfully", id: doc._id });
  } catch (err) {
    console.error("Error saving application:", err);
    return res.status(500).json({ error: "Failed to submit application" });
  }
});


router.get("/job-applications", async (_req, res) => {
  try {
    const list = await JobApplication.find().sort({ createdAt: -1 }).lean();
    return res.json(list);
  } catch (err) {
    console.error("Error fetching applications:", err);
    return res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;
