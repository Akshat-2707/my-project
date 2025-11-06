import express from "express";
import { searchProducts } from "../services/searchService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { q = "", page = 1 } = req.query;
  try {
    const data = await searchProducts(q, {}, page);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
