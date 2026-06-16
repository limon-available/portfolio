import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

export function createApp() {
  const app = express();

  // Behind Render/Vercel proxies — required so req.ip and rate limiting see the
  // real client IP rather than the proxy's.
  app.set("trust proxy", 1);

  app.use(express.json({ limit: "16kb" }));

  app.use(
    cors({
      origin(origin, cb) {
        // Allow same-origin / curl (no Origin header) and any allowlisted origin.
        if (!origin || env.clientOrigins.includes(origin)) return cb(null, true);
        cb(new Error("Not allowed by CORS"));
      },
      methods: ["GET", "POST", "PUT"],
    }),
  );

  app.get("/api/health", (req, res) => res.json({ data: { status: "ok" }, error: null }));
  app.use("/api/contact", contactRoutes);
  app.use("/api/projects", projectRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
