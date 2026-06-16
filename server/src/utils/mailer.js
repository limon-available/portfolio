import nodemailer from "nodemailer";
import { env } from "../config/env.js";

let transporter = null;
if (env.email.enabled) {
  transporter = nodemailer.createTransport({
    host: env.email.host,
    port: env.email.port,
    secure: env.email.port === 465,
    auth: { user: env.email.user, pass: env.email.pass },
  });
}

/**
 * Fire-and-forget notification about a new contact submission.
 * Never throws to the caller — email must not break the request flow. If SMTP
 * isn't configured, this is a no-op (the submission is still saved to the DB).
 */
export async function sendContactNotification({ name, email, message }) {
  if (!transporter) return;
  try {
    await transporter.sendMail({
      from: env.email.from,
      to: env.email.to,
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${String(message)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("✗ Failed to send contact email:", err.message);
  }
}
