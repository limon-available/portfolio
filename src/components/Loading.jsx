const Loading = () => {
  return (
    <div className="flex h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-surface-200 border-t-brand-600 dark:border-surface-700 dark:border-t-brand-400" />
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default Loading;
