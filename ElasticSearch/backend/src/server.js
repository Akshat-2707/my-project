import express from "express";
import cors from "cors";
import indexingRoutes from "./routes/indexingRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api", indexingRoutes);
app.use("/api", searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
