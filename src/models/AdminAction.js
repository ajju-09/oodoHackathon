import mongoose from "mongoose";

const adminActionSchema = new mongoose.Schema(
  {
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    action: String, 
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.AdminAction ||
  mongoose.model("AdminAction", adminActionSchema);
