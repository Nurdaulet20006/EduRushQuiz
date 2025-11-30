import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  technology: String,
  correct: Number,
  wrong: Number,
  totalQuestions: Number,
  timeSpent: String
}, { timestamps: true });

export default mongoose.models.Result || mongoose.model("Result", resultSchema);