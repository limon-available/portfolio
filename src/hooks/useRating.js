import { useCallback, useEffect, useState } from "react";
import { getRating, setRating as apiSetRating } from "../api/ratings.js";

/**
 * Loads and manages the rating for a project, with optimistic update.
 * Returns { average, count, yourRating, loading, submit }.
 */
export function useRating(slug) {
  const [state, setState] = useState({ average: 0, count: 0, yourRating: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    getRating(slug, controller.signal)
      .then((data) => setState(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          /* leave defaults; rating is non-critical */
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [slug]);

  const submit = useCallback(
    async (value) => {
      const prev = state;
      // Optimistic: assume this is the user's first/changed vote.
      setState((s) => {
        const hadVote = s.yourRating != null;
        const count = hadVote ? s.count : s.count + 1;
        const total = s.average * s.count - (hadVote ? s.yourRating : 0) + value;
        return { average: count ? total / count : value, count, yourRating: value };
      });
      try {
        const data = await apiSetRating(slug, value);
        setState(data);
        return { ok: true };
      } catch (err) {
        setState(prev); // roll back
        return { ok: false, error: err };
      }
    },
    [slug, state],
  );

  return { ...state, loading, submit };
}
