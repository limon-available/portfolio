/** Surface card shell used across the site. */
export default function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-card border border-surface-200 bg-white shadow-card dark:border-surface-800 dark:bg-surface-900 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
