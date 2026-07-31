import { useActiveHeading } from "../../hooks/useActiveHeading.js";

export default function TableOfContents({ headings }) {
  const headingIds = headings.map((h) => h.id);
  const activeId = useActiveHeading(headingIds);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!headings.length) return null;

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto px-6 py-10 xl:block">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
        On this page
      </p>
      <ul className="space-y-2 border-l border-gray-200 dark:border-gray-800">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.depth === 3 ? "2rem" : "1rem" }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`-ml-px border-l-2 pl-3 text-left text-sm transition-colors ${
                activeId === heading.id
                  ? "border-blue-600 font-medium text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
