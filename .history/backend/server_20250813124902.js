import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import resumeUploadRouter from "./resumeUploadRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Resume upload route
app.use("/api", resumeUploadRouter);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
