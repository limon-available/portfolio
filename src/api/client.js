const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/** Normalized API error carrying the HTTP status and any field-level messages. */
export class ApiError extends Error {
  constructor(message, { status, fields } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fields = fields || null;
  }
}

/**
 * Thin fetch wrapper. Returns the `data` payload on success, throws ApiError
 * (with `.status` and `.fields`) otherwise. Supports an AbortSignal.
 */
export async function request(path, { method = "GET", body, signal } = {}) {
  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal,
    });
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new ApiError("Network error. Please check your connection and try again.", {
      status: 0,
    });
  }

  let json = null;
  try {
    json = await res.json();
  } catch {
    /* empty / non-JSON body */
  }

  if (!res.ok) {
    throw new ApiError(json?.error?.message || `Request failed (${res.status})`, {
      status: res.status,
      fields: json?.error?.fields,
    });
  }

  return json?.data;
}
