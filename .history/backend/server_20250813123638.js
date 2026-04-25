import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import { configCloudinary } from "./utils/cloudinary.js";
import applicationsRouter from "./routes/applications.js";

dotenv.config();

const app = express();

// Basic security + JSON limits
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS: allow your React domain + localhost during dev
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: allowedOrigin,
    credentials: false
  })
);

// Health check
app.get("/health", (_req, res) => res.json({ ok: true }));

// Init DB + Cloudinary
await connectDB(process.env.MONGO_URI);
configCloudinary();

// Routes
app.use("/api", applicationsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`CORS allowed origin: ${allowedOrigin}`);
});
