import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Search, ChevronRight } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext.jsx";

export default function Header({ role, onMenuClick, isMobileDrawerOpen }) {
  // const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const breadcrumbSegments = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" "),
    );

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-4 px-4 lg:px-8">
        <button
          onClick={onMenuClick}
          className="lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMobileDrawerOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link
          to={role.basePath}
          className="flex items-center gap-2 font-semibold"
        >
          <span className="rounded bg-blue-600 px-1.5 py-0.5 text-sm text-white">
            {role.badge}
          </span>
          {role.label}
        </Link>

        <nav className="hidden items-center gap-1.5 text-sm text-gray-500 md:flex dark:text-gray-400">
          {breadcrumbSegments.map((segment, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight size={14} />}
              {segment}
            </span>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-500 hover:border-gray-300 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-700"
            aria-label="Open search"
          >
            <Search size={15} />
            <span className="hidden sm:inline">Search docs...</span>
            <kbd className="hidden rounded border border-gray-300 px-1.5 text-xs sm:inline dark:border-gray-700">
              ⌘K
            </kbd>
          </button>

          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}
        </div>
      </div>
    </header>
  );
}
