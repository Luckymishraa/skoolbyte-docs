import { Info, AlertTriangle, Lightbulb, StickyNote } from "lucide-react";

const VARIANTS = {
  info: {
    icon: Info,
    classes:
      "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-500/10 dark:text-blue-200",
  },
  warning: {
    icon: AlertTriangle,
    classes:
      "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-500/10 dark:text-amber-200",
  },
  tip: {
    icon: Lightbulb,
    classes:
      "border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-500/10 dark:text-green-200",
  },
  note: {
    icon: StickyNote,
    classes:
      "border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-800/40 dark:text-gray-200",
  },
};

export default function Callout({ type = "info", title, children }) {
  const { icon: Icon, classes } = VARIANTS[type] ?? VARIANTS.info;

  return (
    <div className={`my-4 flex gap-3 rounded-lg border p-4 ${classes}`}>
      <Icon size={18} className="mt-0.5 shrink-0" />
      <div className="text-sm leading-relaxed">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        {children}
      </div>
    </div>
  );
}
