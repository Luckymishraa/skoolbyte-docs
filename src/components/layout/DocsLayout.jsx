import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import TableOfContents from "./TableOfContents.jsx";

export default function DocsLayout() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [headings, setHeadings] = useState([]); // NEW

  const closeMobileDrawer = () => setIsMobileDrawerOpen(false);
  const toggleMobileDrawer = () => setIsMobileDrawerOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header
        onMenuClick={toggleMobileDrawer}
        isMobileDrawerOpen={isMobileDrawerOpen}
      />
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar
          isMobileDrawerOpen={isMobileDrawerOpen}
          onCloseMobileDrawer={closeMobileDrawer}
        />
        <main className="min-w-0 flex-1 px-6 py-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <Outlet context={{ setHeadings }} />{" "}
            {/* NEW: lets DocumentationPage register its headings */}
          </div>
        </main>
        <TableOfContents headings={headings} /> {/* NEW */}
      </div>
    </div>
  );
}
