import crypto from "node:crypto";
import { env } from "../config/env.js";

/**
 * Derive a stable, non-reversible voter key from the request IP.
 * Stored instead of the raw IP so we enforce one-vote-per-visitor without
 * persisting PII. Combined with a server-side salt.
 */
export function voterKeyFromReq(req) {
  const ip = req.ip || req.socket?.remoteAddress || "unknown";
  return crypto
    .createHash("sha256")
    .update(`${ip}:${env.voterSalt}`)
    .digest("hex");
}
