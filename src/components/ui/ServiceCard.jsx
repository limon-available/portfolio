import Card from "./Card.jsx";

/** Service offering tile with an icon, title, and description. */
export default function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-surface-800 dark:text-brand-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-surface-900 dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-300">{desc}</p>
    </Card>
  );
}
