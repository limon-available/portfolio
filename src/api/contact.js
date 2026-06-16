import { request } from "./client.js";

/** Submit the contact form. `payload` includes the honeypot `website` field. */
export function submitContact(payload, signal) {
  return request("/contact", { method: "POST", body: payload, signal });
}
