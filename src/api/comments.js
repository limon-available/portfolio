import { request } from "./client.js";

export function getComments(slug, signal) {
  return request(`/projects/${slug}/comments`, { signal });
}

export function addComment(slug, payload, signal) {
  return request(`/projects/${slug}/comments`, { method: "POST", body: payload, signal });
}
