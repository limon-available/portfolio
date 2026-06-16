import { useCallback, useEffect, useState } from "react";
import { getComments, addComment as apiAddComment } from "../api/comments.js";

/**
 * Loads and manages comments for a project, with optimistic insert.
 * Returns { comments, loading, error, submitting, addComment }.
 */
export function useComments(slug) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    getComments(slug, controller.signal)
      .then((data) => setComments(data?.comments || []))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [slug]);

  const addComment = useCallback(
    async ({ author, body }) => {
      const tempId = `temp-${Date.now()}`;
      const optimistic = { _id: tempId, author, body, createdAt: new Date().toISOString() };
      setComments((prev) => [optimistic, ...prev]);
      setSubmitting(true);
      try {
        const data = await apiAddComment(slug, { author, body });
        // Reconcile the temp entry with the server's saved comment.
        setComments((prev) => prev.map((c) => (c._id === tempId ? data.comment : c)));
        return { ok: true };
      } catch (err) {
        // Roll back the optimistic insert.
        setComments((prev) => prev.filter((c) => c._id !== tempId));
        return { ok: false, error: err };
      } finally {
        setSubmitting(false);
      }
    },
    [slug],
  );

  return { comments, loading, error, submitting, addComment };
}
