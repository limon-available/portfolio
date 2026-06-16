import mongoose from "mongoose";
import { PROJECT_SLUGS } from "../utils/projects.js";

const commentSchema = new mongoose.Schema(
  {
    projectSlug: { type: String, required: true, enum: PROJECT_SLUGS, index: true },
    author: { type: String, required: true, trim: true, minlength: 1, maxlength: 60 },
    body: { type: String, required: true, trim: true, minlength: 1, maxlength: 500 },
    meta: {
      ip: String,
    },
  },
  { timestamps: true },
);

// Fast per-project listing, newest first.
commentSchema.index({ projectSlug: 1, createdAt: -1 });

export const Comment = mongoose.model("Comment", commentSchema);
