import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    display_name: {
      type: String,
    },
    pfp_url: {
      type: String,
    },
    raw_designation: {
      type: String,
    },
    designation: {
      type: String,
    },
    raw_tags: {
      type: String,
    },
    tags: {
      type: [String],
    },
    FID: {
      type: String,
      required: true,
    },
    profile_url: {
      type: String,
    },
  },
  {
    timestamps: true, // Optional: Adds createdAt and updatedAt fields
  }
);

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
