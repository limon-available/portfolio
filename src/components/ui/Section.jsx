/**
 * Consistent vertical rhythm + centered max-width container.
 * Pass an `id` so the navbar / CTAs can anchor to it.
 */
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

/** Standard section heading with optional eyebrow + subtitle. */
export function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-12 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-surface-600 dark:text-surface-300">{subtitle}</p>
      )}
    </div>
  );
}
