/**
 * Honeypot anti-spam. Forms include a hidden field ("website") that real users
 * never fill. If it arrives non-empty, the request is almost certainly a bot:
 * we return a fake success and silently drop it.
 */
export function honeypot(req, res, next) {
  if (req.body && typeof req.body.website === "string" && req.body.website.trim() !== "") {
    return res.status(200).json({ data: { ok: true }, error: null });
  }
  next();
}
