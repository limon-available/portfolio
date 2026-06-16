import dotenv from "dotenv";

dotenv.config();
 

console.log("Current directory:", process.cwd());
console.log("MONGODB_URI =", process.env.MONGODB_URI);
console.log("VOTER_SALT =", process.env.VOTER_SALT);
/**
 * Centralized, validated environment configuration.
 * Required vars cause a fast crash on boot so misconfiguration is obvious.
 */
const required = (name) => {
  const value = process.env[name];
  if (!value) {
    console.error(`✗ Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
};

const smtpConfigured = Boolean(
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
);

export const env = {
  port: Number(process.env.PORT) || 5000,
  mongoUri: required("MONGODB_URI"),
  voterSalt: required("VOTER_SALT"),
  // Allowlist of frontend origins for CORS.
  clientOrigins: (process.env.CLIENT_ORIGIN || "http://localhost:5173")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),
  email: {
    enabled: smtpConfigured,
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    to: process.env.CONTACT_TO,
    from: process.env.CONTACT_FROM || process.env.SMTP_USER,
  },
};
