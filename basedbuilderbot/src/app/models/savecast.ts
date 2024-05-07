import mongoose from "mongoose";

const saveCastSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    castUrl: {
      type: String,
      required: true,
    },
    embed: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true, // Optional: Adds createdAt and updatedAt fields
  }
);

const SaveCast =
  mongoose.models.SaveCast || mongoose.model("SaveCast", saveCastSchema);

export default SaveCast;
