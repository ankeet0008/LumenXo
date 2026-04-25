import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/job_portal", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Define schema
const JobApplicationSchema = new mongoose.Schema({
  role: String,
  full_name: String,
  qualification: String,
  location: String,
  email: String,
  mobile: String,
  experience: String,
  resume: String
});

const JobApplication = mongoose.model("JobApplication", JobApplicationSchema);

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// API Route
app.post("/api/job-application", upload.single("resume"), async (req, res) => {
  try {
    const newApplication = new JobApplication({
      role: req.body.role,
      full_name: req.body.full_name,
      qualification: req.body.qualification,
      location: req.body.location,
      email: req.body.email,
      mobile: req.body.mobile,
      experience: req.body.experience,
      resume: req.file ? req.file.filename : null
    });

    await newApplication.save();
    res.status(200).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
