export const safetyCheck = (req, res, next) => {
  const text = req.body.message || "";
  const blocked = ["hack", "bomb", "terror"]; // basic keyword filter
  if (blocked.some(w => text.toLowerCase().includes(w)))
    return res.status(400).json({ error: "Unsafe input detected" });
  next();
};
