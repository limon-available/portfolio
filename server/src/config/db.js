import mongoose from "mongoose";
import { env } from "./env.js";

/** Connect to MongoDB. Throws (caught by the caller) on failure. */
export async function connectDB() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(env.mongoUri);
  console.log("✓ MongoDB connected");
}
