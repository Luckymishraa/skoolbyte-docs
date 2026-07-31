import { Navigate } from "react-router-dom";
import DocsLayout from "../components/layout/DocsLayout.jsx";
import DocumentationPage from "../pages/DocumentationPage.jsx";
import { schoolsContent } from "../content/schools.js";

export const routes = [
  {
    path: "/",
    element: <DocsLayout />,
    children: [
      { index: true, element: <Navigate to="/schools" replace /> },
      {
        path: "schools",
        element: <DocumentationPage content={schoolsContent} />,
      },
    ],
  },
];
