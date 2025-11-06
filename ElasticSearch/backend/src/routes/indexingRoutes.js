import express from "express";
import { indexProduct } from "../services/indexingService.js";

const router = express.Router();

// POST /api/index
router.post("/index", async (req, res) => {
  try {
    const { name, brand, category, price } = req.body;

    if (!name || !brand || !category || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const response = await indexProduct({ name, brand, category, price });
    res.status(201).json({ message: "Product indexed successfully", response });
  } catch (error) {
    console.error("Indexing error:", error);
    res.status(500).json({ error: "Failed to index product" });
  }
});

export default router;
docker-compose down