/** Small pill used for skills and project tech tags. */
export default function SkillBadge({ children }) {
  return (
    <span className="inline-block rounded-full border border-surface-200 bg-surface-100 px-3 py-1 text-sm font-medium text-surface-700 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-200">
      {children}
    </span>
  );
}
