import mongoose from "mongoose";
import { PROJECT_SLUGS } from "../utils/projects.js";

const ratingSchema = new mongoose.Schema(
  {
    projectSlug: { type: String, required: true, enum: PROJECT_SLUGS, index: true },
    value: { type: Number, required: true, min: 1, max: 5, validate: Number.isInteger },
    // Hash of the voter's IP — enforces one effective vote per visitor per project.
    voterKey: { type: String, required: true },
  },
  { timestamps: true },
);

// One rating per voter per project; re-rating upserts instead of duplicating.
ratingSchema.index({ projectSlug: 1, voterKey: 1 }, { unique: true });

export const Rating = mongoose.model("Rating", ratingSchema);
