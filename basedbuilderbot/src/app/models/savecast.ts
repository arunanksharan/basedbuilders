import mongoose from "mongoose";

const saveCastSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    display_name: {
      type: String,
      required: true,
    },
    pfp_url: {
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
    embed: {
      type: String,
      required: true,
    },
    genTitle: {
      type: String,
    },
    genTags: {
      type: [String],
    },
  },
  {
    timestamps: true, // Optional: Adds createdAt and updatedAt fields
  }
);

const SaveCast =
  mongoose.models.SaveCast || mongoose.model("SaveCast", saveCastSchema);

export default SaveCast;
