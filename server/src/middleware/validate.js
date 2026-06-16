import { validationResult } from "express-validator";

/**
 * Runs after a list of express-validator chains. Collects any errors and
 * responds 422 with field-level messages; otherwise calls next().
 */
export function validate(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();

  const fields = {};
  for (const err of result.array()) {
    if (!fields[err.path]) fields[err.path] = err.msg;
  }
  return res.status(422).json({ data: null, error: { message: "Validation failed", fields } });
}
