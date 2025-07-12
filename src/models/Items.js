import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    images: [{ type: String, required: true }],
    category: { type: String, required: true },
    type: { type: String },
    size: { type: String },
    condition: { type: String },
    tags: [String],
    status: {
      type: String,
      enum: ["available", "swapped", "pending"],
      default: "available",
    },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Item || mongoose.model("Item", itemSchema);
