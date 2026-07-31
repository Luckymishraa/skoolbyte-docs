export const schoolsContent = {
  title: "Schools",
  slug: "schools",
  category: "Platform Administration",

  overview:
    "The Schools module is where Super Admins manage every school registered on the Skoolbyte platform — creating new schools, viewing their status, and tracking core stats like enrolled students, teachers, and platform users.",

  purpose:
    "Each school on Skoolbyte operates as its own isolated workspace (its own classes, fees, students, and staff). The Schools page is the control center for provisioning and overseeing all of these workspaces from a single super-admin view.",

  navigationPath: "Super Admin Panel → Sidebar → Schools",

  permissions: [
    {
      role: "Super Admin",
      access: true,
      label: "Full access (create, view, edit, delete)",
    },
    {
      role: "School Admin",
      access: false,
      label: "No access — scoped to their own school only",
    },
    { role: "Teacher", access: false },
    { role: "Student", access: false },
  ],

  steps: [
    {
      title: "Open the Schools page",
      description:
        "From the sidebar, click Schools under the Platform Administration section.",
    },
    {
      title: "Search for an existing school (optional)",
      description:
        "Use the search bar at the top of the page to filter schools by name.",
    },
    {
      title: "Create a new school",
      description:
        'Click the "Create School" button in the top-right corner. This opens the school creation form, where you\'ll set the school name, URL slug, academic session, and location.',
    },
    {
      title: "Review a school's stats",
      description:
        "Each school card shows its status (Active/Inactive), URL slug, academic session, city, and live counts of students, teachers, and platform users.",
    },
    {
      title: "Manage an existing school",
      description:
        "Use the three action icons on a school card: the settings icon opens school-level configuration, the eye icon opens a read-only view, and the trash icon deletes the school (irreversible).",
    },
  ],

  screenshots: [
    {
      src: "/screenshots/school.png",
      alt: "Schools list page showing search bar and school cards",
      caption:
        "The Schools page — search, Create School button, and a list of school cards.",
    },
  ],

  bestPractices: [
    "Double-check the academic session (e.g. 2026-27) before creating a school — it determines which class/fee structures apply by default.",
    "Use a clear, consistent URL slug (e.g. school-name) since it becomes part of that school's admin login URL.",
  ],

  commonErrors: [
    {
      issue: "Deleted a school by mistake",
      fix: 'Deletion is currently irreversible — always confirm the school name in the confirmation dialog before deleting, and consider marking a school "Inactive" instead if you might need it again.',
    },
    {
      issue: "New school shows 0 students/teachers/users",
      fix: "This is expected immediately after creation — counts populate as a School Admin logs in and starts enrolling students and adding staff.",
    },
  ],

  faqs: [
    {
      question: "Can a School Admin create additional schools?",
      answer:
        "No — only Super Admins can create or delete schools. School Admins manage their own school's day-to-day data only.",
    },
    {
      question: 'What does the "Active" badge mean?',
      answer:
        'It indicates the school is live and its admins/staff can log in. An "Inactive" school is hidden from login but its data is preserved.',
    },
    {
      question: "Can I change a school's academic session later?",
      answer:
        "Yes, from the settings icon on the school's card — but changing it mid-year can affect existing class and fee records, so do this only at the start of a new session.",
    },
  ],

  relatedModules: [
    { title: "Classes & Fees", slug: "classes-fees" },
    { title: "Admins", slug: "admins" },
    { title: "Registrations", slug: "registrations" },
  ],
};
