import { Router } from "express";
import { body, param } from "express-validator";
import { listComments, createComment } from "../controllers/comment.controller.js";
import { getRating, setRating } from "../controllers/rating.controller.js";
import { validate } from "../middleware/validate.js";
import { honeypot } from "../middleware/honeypot.js";
import { commentLimiter, ratingLimiter } from "../middleware/rateLimiters.js";
import { isKnownSlug } from "../utils/projects.js";

const router = Router();

const slugParam = param("slug")
  .custom(isKnownSlug)
  .withMessage("Unknown project.");

// ── Comments ──────────────────────────────────────────
router.get("/:slug/comments", [slugParam], validate, listComments);

router.post(
  "/:slug/comments",
  commentLimiter,
  honeypot,
  [
    slugParam,
    body("author").trim().isLength({ min: 1, max: 60 }).withMessage("Name must be 1–60 characters."),
    body("body").trim().isLength({ min: 1, max: 500 }).withMessage("Comment must be 1–500 characters."),
  ],
  validate,
  createComment,
);

// ── Ratings ───────────────────────────────────────────
router.get("/:slug/rating", [slugParam], validate, getRating);

router.put(
  "/:slug/rating",
  ratingLimiter,
  [slugParam, body("value").isInt({ min: 1, max: 5 }).withMessage("Rating must be 1–5.").toInt()],
  validate,
  setRating,
);

export default router;
