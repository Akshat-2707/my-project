import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  quotaUsed: { type: Number, default: 0 },
  tier: { type: String, default: "free" },
});

export default mongoose.model("User", userSchema);
