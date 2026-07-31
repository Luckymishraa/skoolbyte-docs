import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function RelatedModules({ modules }) {
  if (!modules?.length) return null;

  return (
    <div className="my-6">
      <p className="mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
        Related modules
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {modules.map((module) => (
          <Link
            key={module.slug}
            to={`/${module.slug}`}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
          >
            {module.title}
            <ArrowUpRight size={15} className="text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
