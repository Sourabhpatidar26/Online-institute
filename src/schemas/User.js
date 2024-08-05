import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "superAdmin"],
    default: "student",
    required: true,
  },
  profilePicture: { type: String },
  phoneNumber: { type: String },
  savedContent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
