import mongoose from "mongoose";

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String },
  videoUrl: { type: String, required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  topic: { type: String },
  level: { type: String, enum: ["basic", "graduate", "guide", "senior guide"] },
  isDownloadable: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Video = mongoose.models.video || mongoose.model("video", videoSchema);

export default Video;
