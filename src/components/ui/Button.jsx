import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-950";

const variants = {
  primary:
    "bg-brand-600 text-white shadow-card hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "bg-surface-200 text-surface-900 hover:bg-surface-300 dark:bg-surface-800 dark:text-surface-100 dark:hover:bg-surface-700",
  outline:
    "border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white dark:text-brand-300 dark:border-brand-400",
  ghost:
    "text-surface-700 hover:text-brand-600 dark:text-surface-200 dark:hover:text-brand-300",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

/**
 * Polymorphic button. Renders a <button>, a router <Link> (pass `to`), or an
 * <a> (pass `href`). Supports variant/size and a loading state.
 */
export default function Button({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  const Tag = as || "button";
  return (
    <Tag className={classes} disabled={loading || props.disabled} {...props}>
      {content}
    </Tag>
  );
}
