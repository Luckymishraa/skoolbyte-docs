import { Navigate } from "react-router-dom";
import DocsLayout from "../components/layout/DocsLayout.jsx";
import DocumentationPage from "../pages/DocumentationPage.jsx";
import { roles } from "../roles/registry.js";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/super-admin" replace />,
  },
  ...roles.map((role) => ({
    path: role.basePath,
    element: <DocsLayout roleKey={role.key} />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to={`${role.basePath}/${role.pages[0]?.slug ?? ""}`}
            replace
          />
        ),
      },
      ...role.pages.map((page) => ({
        path: page.slug,
        element: <DocumentationPage content={page.content} />,
      })),
    ],
  })),
];
