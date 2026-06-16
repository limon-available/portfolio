import { useState } from "react";

/**
 * Accessible star rating widget (radiogroup).
 * - Tab to focus the group, Arrow keys / Enter / Space to set a value.
 * - `value` is the current selection, `onChange(n)` fires on selection.
 * - `readOnly` renders a non-interactive display (e.g. average).
 */
export default function StarRating({
  value = 0,
  onChange,
  readOnly = false,
  label = "Rate this project",
  size = "text-2xl",
}) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  if (readOnly) {
    return (
      <div className={`flex ${size}`} role="img" aria-label={`Rated ${value} out of 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= Math.round(value) ? "text-amber-400" : "text-surface-300 dark:text-surface-600"}>
            ★
          </span>
        ))}
      </div>
    );
  }

  const handleKey = (e, star) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      onChange?.(Math.min(5, (value || 0) + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      onChange?.(Math.max(1, (value || 1) - 1));
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange?.(star);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={`flex items-center gap-1 ${size}`}
      onMouseLeave={() => setHover(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          tabIndex={value === star || (!value && star === 1) ? 0 : -1}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => setHover(star)}
          onKeyDown={(e) => handleKey(e, star)}
          className={`rounded transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-brand-500 ${
            star <= shown ? "text-amber-400" : "text-surface-300 hover:text-amber-300 dark:text-surface-600"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
