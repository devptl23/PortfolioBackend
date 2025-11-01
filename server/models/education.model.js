import mongoose from "mongoose";

// Qualification schema mirrors the education checklist from the assignment brief.

const EducationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    completion: { type: Date, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Education", EducationSchema);
