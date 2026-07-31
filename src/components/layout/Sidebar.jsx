import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { navigation } from "../../content/navigation.js";

export default function Sidebar({ isMobileDrawerOpen, onCloseMobileDrawer }) {
  const [expandedIds, setExpandedIds] = useState({});

  const toggleExpanded = (slug) => {
    setExpandedIds((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
      isActive
        ? "bg-blue-50 font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
    }`;

  const navContent = (
    <nav className="space-y-6 overflow-y-auto px-4 py-6">
      {navigation.map((group) => (
        <div key={group.id}>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            {group.section}
          </p>
          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.slug}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleExpanded(item.slug)}
                      className="flex w-full items-center justify-between gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                    >
                      <span className="flex items-center gap-2.5">
                        <item.icon size={16} />
                        {item.title}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${expandedIds[item.slug] ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedIds[item.slug] && (
                      <ul className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-3 dark:border-gray-800">
                        {item.children.map((child) => (
                          <li key={child.slug}>
                            <NavLink
                              to={`/${child.slug}`}
                              onClick={onCloseMobileDrawer}
                              className={linkClasses}
                            >
                              {child.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={`/${item.slug}`}
                    onClick={onCloseMobileDrawer}
                    className={linkClasses}
                  >
                    <item.icon size={16} />
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 lg:block dark:border-gray-800">
        {navContent}
      </aside>

      {/* Mobile drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onCloseMobileDrawer}
            aria-hidden="true"
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl dark:bg-gray-950">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-800">
              <span className="text-sm font-semibold">Navigation</span>
              <button onClick={onCloseMobileDrawer} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
