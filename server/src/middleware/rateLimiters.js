import rateLimit from "express-rate-limit";

const json429 = (req, res) =>
  res.status(429).json({
    data: null,
    error: { message: "Too many requests. Please wait a moment and try again." },
  });

const make = (max) =>
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: json429,
  });

export const contactLimiter = make(3);
export const commentLimiter = make(5);
export const ratingLimiter = make(20);
