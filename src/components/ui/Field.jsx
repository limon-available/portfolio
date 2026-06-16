import { useId } from "react";

/**
 * Labeled input/textarea with an associated error slot.
 * Wires htmlFor/id, aria-invalid and aria-describedby for accessibility.
 */
export default function Field({
  label,
  as = "input",
  error,
  className = "",
  ...props
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const Tag = as;

  const controlClasses = `w-full rounded-lg border bg-white px-4 py-2.5 text-surface-900 placeholder-surface-400 outline-none transition focus:ring-2 focus:ring-brand-500 dark:bg-surface-950 dark:text-surface-100 ${
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-surface-300 dark:border-surface-700"
  }`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block font-medium text-surface-700 dark:text-surface-200">
        {label}
      </label>
      <Tag
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${controlClasses} ${as === "textarea" ? "resize-none" : ""}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
