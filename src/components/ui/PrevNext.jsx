import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PrevNext({ prev, next }) {
  return (
    <div className="my-8 flex items-stretch justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
      {prev ? (
        <Link
          to={`/${prev.slug}`}
          className="flex flex-1 flex-col rounded-lg border border-gray-200 p-4 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
        >
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <ArrowLeft size={13} /> Previous
          </span>
          <span className="mt-1 text-sm font-medium">{prev.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          to={`/${next.slug}`}
          className="flex flex-1 flex-col items-end rounded-lg border border-gray-200 p-4 text-right hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
        >
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            Next <ArrowRight size={13} />
          </span>
          <span className="mt-1 text-sm font-medium">{next.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
