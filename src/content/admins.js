export const adminsContent = {
  title: "Admins",
  slug: "admins",
  category: "Platform Administration",

  overview:
    "The Admins page lists every School Admin account across the platform in one place, showing which school each admin belongs to and letting Super Admins suspend or edit an admin's account.",

  purpose:
    "While the first School Admin for a school is created together with the school itself (via the Schools page's Admin Account section), this page is the ongoing management view — a single list of all admins platform-wide, for account maintenance rather than creation.",

  steps: [
    {
      title: "Open the Admins page",
      description:
        "From the sidebar, click Admins under Platform Administration. The page shows a table of every School Admin, with columns for Admin (name), Email, School, Status, and Actions. A note at the top reminds you that new admins are created via the Schools page, not here.",
      screenshot: {
        src: "/screenshots/admin.png",
        alt: "School Admins list with Admin, Email, School, Status, and Actions columns",
        caption:
          "The Admins page is read/manage only — creation happens on the Schools page.",
      },
    },
    {
      title: "Suspend or reactivate an admin",
      description:
        'Click "Suspend" in the Actions column to disable that admin\'s account (they won\'t be able to log in). Once suspended, the same action becomes "Activate" to restore access.',
    },
    {
      title: "Edit an admin's name or password",
      description:
        'Click the pencil ✏️ icon in the Actions column to open the "Edit Admin" modal. Update the Name field, and optionally set a New Password — leaving the password field blank keeps their current password unchanged. Click "Save Changes" to apply.',
      screenshot: {
        src: "/screenshots/admin edit.png",
        alt: "Edit Admin modal with Name and New Password fields",
        caption:
          'Leaving "New Password" blank preserves the admin\'s existing password.',
      },
    },
  ],

  bestPractices: [
    "Prefer Suspend over deleting a school (from the Schools module) when you just need to temporarily block an admin's access — it's reversible and doesn't touch the school's underlying data.",
    "When resetting a forgotten password, communicate the new password to the admin through a secure channel — the password field here doesn't display or email it automatically.",
  ],

  commonErrors: [
    {
      issue: "Can't find a way to create a new admin from this page",
      fix: 'This is expected — new School Admin accounts are created together with a new school, from the "Create School" form\'s Admin Account section on the Schools page.',
    },
    {
      issue: "Suspended the wrong admin by mistake",
      fix: 'Click "Activate" on that same admin\'s row to immediately restore their access — suspension is not destructive and can be reversed anytime.',
    },
  ],

  faqs: [
    {
      question: "Can a school have more than one admin?",
      answer:
        "This page lists one admin per school as shown, tied to the account created during school setup. Check with your platform's current admin-management flow if you need to add additional admins to a single school.",
    },
    {
      question: "What happens to a school if its admin is suspended?",
      answer:
        "The admin account itself is blocked from logging in — the school's data (students, teachers, fees, etc.) remains intact and untouched.",
    },
  ],

  relatedModules: [
    { title: "Schools", slug: "schools" },
    { title: "Approvals", slug: "approvals" },
  ],
};
