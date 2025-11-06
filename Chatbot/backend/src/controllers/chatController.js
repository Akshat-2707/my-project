export const testChat = (req, res) => {
  res.json({ message: "Chat route is working ✅" });
};

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    // Placeholder for AI provider logic
    const reply = `You said: ${message}`;
    res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
