import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 2000 },
    meta: {
      ip: String,
      userAgent: String,
    },
  },
  { timestamps: true },
);

export const Contact = mongoose.model("Contact", contactSchema);
