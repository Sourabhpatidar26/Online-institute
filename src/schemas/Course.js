import mongoose from "mongoose";

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Course = mongoose.models.course || mongoose.model("course", courseSchema);

export default Course;
