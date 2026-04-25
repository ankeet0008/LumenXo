import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    full_name: { type: String, required: true, trim: true },
    qualification: { type: String, trim: true },
    location: { type: String, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    mobile: { type: String, trim: true },
    experience: { type: String, trim: true },
    resumeUrl: { type: String },     // Cloudinary URL
    resumePublicId: { type: String } // Cloudinary public_id (for deletes if needed)
  },
  { timestamps: true }
);

export default mongoose.model("JobApplication", JobApplicationSchema);
