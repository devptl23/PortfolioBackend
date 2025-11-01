import mongoose from "mongoose";

// Contact schema reflects the Assignment 2 contact form fields.

const ContactSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Contact", ContactSchema);
