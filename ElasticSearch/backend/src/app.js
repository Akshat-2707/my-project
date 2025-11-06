import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" })); // ✅ allow React frontend
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use("/api/search", searchRoutes);

export default app;
