import { Router } from "express";
import { body } from "express-validator";
import { createContact } from "../controllers/contact.controller.js";
import { validate } from "../middleware/validate.js";
import { honeypot } from "../middleware/honeypot.js";
import { contactLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.post(
  "/",
  contactLimiter,
  honeypot,
  [
    body("name").trim().isLength({ min: 2, max: 80 }).withMessage("Name must be 2–80 characters."),
    body("email").trim().isEmail().withMessage("Enter a valid email.").normalizeEmail(),
    body("message")
      .trim()
      .isLength({ min: 10, max: 2000 })
      .withMessage("Message must be 10–2000 characters."),
  ],
  validate,
  createContact,
);

export default router;
