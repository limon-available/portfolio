import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Card from "./ui/Card.jsx";
import Button from "./ui/Button.jsx";
import Field from "./ui/Field.jsx";
import SkillBadge from "./ui/SkillBadge.jsx";
import StarRating from "./ui/StarRating.jsx";
import { useComments } from "../hooks/useComments.js";
import { useRating } from "../hooks/useRating.js";

/** Full interactive project card: details, live link, ratings, comments. */
export default function ProjectCard({ project }) {
  const { slug, title, desc, tech, link, accent } = project;
  const rating = useRating(slug);
  const { comments, loading, submitting, addComment } = useComments(slug);

  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!author.trim() || !body.trim()) {
      setError("Please add your name and a comment.");
      return;
    }
    const res = await addComment({ author: author.trim(), body: body.trim() });
    if (res.ok) {
      setBody("");
    } else {
      setError(res.error?.fields?.body || res.error?.message || "Could not post comment.");
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden">
      {/* Header / details */}
      <div className={`bg-gradient-to-br ${accent} p-6`}>
        <h3 className="text-2xl font-bold text-surface-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-surface-700 dark:text-surface-200">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <SkillBadge key={t}>{t}</SkillBadge>
          ))}
        </div>
        <Button href={link} target="_blank" rel="noopener noreferrer" size="sm" className="mt-5">
          Live Demo <FaExternalLinkAlt size={12} aria-hidden="true" />
        </Button>
      </div>

      {/* Rating */}
      <div className="border-t border-surface-200 p-6 dark:border-surface-800">
        <h4 className="mb-2 font-semibold text-surface-900 dark:text-white">Rate this project</h4>
        <div className="flex flex-wrap items-center gap-3">
          <StarRating value={rating.yourRating || 0} onChange={(v) => rating.submit(v)} />
          <span className="text-sm text-surface-600 dark:text-surface-400">
            {rating.count > 0
              ? `${rating.average} / 5 · ${rating.count} vote${rating.count > 1 ? "s" : ""}`
              : "No ratings yet"}
          </span>
        </div>
      </div>

      {/* Comments */}
      <div className="border-t border-surface-200 p-6 dark:border-surface-800">
        <h4 className="mb-3 font-semibold text-surface-900 dark:text-white">
          Comments {comments.length > 0 && <span className="text-surface-400">({comments.length})</span>}
        </h4>

        <div className="mb-4 max-h-40 space-y-2 overflow-y-auto">
          {loading ? (
            <>
              <div className="h-9 animate-pulse rounded-lg bg-surface-100 dark:bg-surface-800" />
              <div className="h-9 w-3/4 animate-pulse rounded-lg bg-surface-100 dark:bg-surface-800" />
            </>
          ) : comments.length === 0 ? (
            <p className="text-sm text-surface-500">No comments yet — be the first!</p>
          ) : (
            comments.map((c) => (
              <div key={c._id} className="rounded-lg bg-surface-100 px-3 py-2 text-sm dark:bg-surface-800">
                <span className="font-semibold text-surface-800 dark:text-surface-100">{c.author}</span>
                <p className="text-surface-700 dark:text-surface-300">{c.body}</p>
              </div>
            ))
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Honeypot — hidden from users, catches bots. */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <Field
            label="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Jane Doe"
            maxLength={60}
          />
          <Field
            label="Comment"
            as="textarea"
            rows={2}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your thoughts…"
            maxLength={500}
            error={error}
          />
          <Button type="submit" size="sm" loading={submitting}>
            Post Comment
          </Button>
        </form>
      </div>
    </Card>
  );
}
