import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  summary: { type: String },
  systemPrompt: { type: String },
  tokensUsed: { type: Number, default: 0 },
  lastActive: { type: Date, default: Date.now, index: true },
}, { timestamps: true });

sessionSchema.index({ lastActive: 1 }, { expireAfterSeconds: 604800 }); // auto-delete after 7 days

export default mongoose.model("Session", sessionSchema);
