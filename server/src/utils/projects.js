/**
 * Canonical list of project slugs the API recognizes.
 * Mirrors src/data/projects.js on the frontend. Used to reject comments/ratings
 * for unknown projects (prevents arbitrary-key spam).
 */
export const PROJECT_SLUGS = [
  "mern-ecommerce",
  "realtime-chat",
  "multivendor-dashboard",
  "multivendor-frontend",
];

export const isKnownSlug = (slug) => PROJECT_SLUGS.includes(slug);
