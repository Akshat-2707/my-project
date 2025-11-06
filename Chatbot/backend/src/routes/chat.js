// src/routes/chat.js
import express from "express";
const router = express.Router();

// SSE streaming endpoint (echo user message)
router.get("/stream", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const message = req.query.message || "";

  // Split message into words to simulate streaming
  const words = message.split(" ");
  let botMsg = "";

  for (const word of words) {
    botMsg += word + " ";
    res.write(`data: ${botMsg}\n\n`); // send cumulative message
    await new Promise((r) => setTimeout(r, 200));
  }

  // End of stream
  res.write(`event: done\ndata: \n\n`);
  res.end();
});

export default router;
