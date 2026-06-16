import { request } from "./client.js";

export function getRating(slug, signal) {
  return request(`/projects/${slug}/rating`, { signal });
}

export function setRating(slug, value, signal) {
  return request(`/projects/${slug}/rating`, { method: "PUT", body: { value }, signal });
}
