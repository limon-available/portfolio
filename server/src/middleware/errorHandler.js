/** 404 for unmatched routes. */
export function notFound(req, res) {
  res.status(404).json({ data: null, error: { message: "Not found" } });
}

/** Central error handler — normalizes everything to the { data, error } shape. */
// eslint-disable-next-line no-unused-vars -- Express requires the 4-arg signature.
export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  if (status >= 500) console.error(err);
  res.status(status).json({
    data: null,
    error: { message: err.expose ? err.message : "Something went wrong" },
  });
}
