import { Navigate } from "react-router-dom";
import DocsLayout from "../components/layout/DocsLayout.jsx";
import DocumentationPage from "../pages/DocumentationPage.jsx";
import { schoolsContent } from "../content/schools.js";
import { classesFeesContent } from "../content/classes-fees.js";
import { subjectsContent } from "../content/subjects.js";
import { adminsContent } from "../content/admins.js";

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
      {
        path: "classes-fees",
        element: <DocumentationPage content={classesFeesContent} />,
      },
      {
        path: "subjects",
        element: <DocumentationPage content={subjectsContent} />,
      },
      {
        path: "admins",
        element: <DocumentationPage content={adminsContent} />,
      },
    ],
  },
];
