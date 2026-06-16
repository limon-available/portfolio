import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { createApp } from "./app.js";

async function start() {
  try {
    await connectDB();
    const app = createApp();
    app.listen(env.port, () => {
      console.log(`✓ API listening on http://localhost:${env.port}`);
      if (!env.email.enabled) {
        console.log("ℹ Email notifications disabled (SMTP not configured) — contacts saved to DB only.");
      }
    });
  } catch (err) {
    console.error("✗ Failed to start server:", err.message);
    process.exit(1);
  }
}

start();
