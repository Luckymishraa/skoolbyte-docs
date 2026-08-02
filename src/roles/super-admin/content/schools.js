export const schoolsContent = {
  title: "Schools",
  slug: "schools",
  category: "Platform Administration",

  overview:
    "The Schools module is where Super Admins manage every school registered on the Skoolbyte platform — creating new schools, viewing their status, and tracking core stats like enrolled students, teachers, and platform users.",

  purpose:
    "Each school on Skoolbyte operates as its own isolated workspace (its own classes, fees, students, and staff). The Schools page is the control center for provisioning and overseeing all of these workspaces from a single super-admin view.",

  //   steps: [
  //     {
  //       title: "Open the Schools page",
  //       description:
  //         "From the sidebar, click Schools under the Platform Administration section.",
  //     },
  //     {
  //       title: "Search for an existing school (optional)",
  //       description:
  //         "Use the search bar at the top of the page to filter schools by name.",
  //     },
  //     {
  //       title: "Create a new school",
  //       description:
  //         'Click the "Create School" button in the top-right corner. This opens the school creation form, where you\'ll set the school name, URL slug, academic session, and location.',
  //     },
  //     {
  //       title: "Review a school's stats",
  //       description:
  //         "Each school card shows its status (Active/Inactive), URL slug, academic session, city, and live counts of students, teachers, and platform users.",
  //     },
  //     {
  //       title: "Manage an existing school",
  //       description:
  //         "Use the three action icons on a school card: the settings icon opens school-level configuration, the eye icon opens a read-only view, and the trash icon deletes the school (irreversible).",
  //     },
  //   ],
  steps: [
    {
      title: "Before you begin: set up Classes & Subjects",
      description:
        'Create your master Classes (e.g. Pre-Nursery, LKG, UKG, Class 1, Class 2...) under Classes & Fees, and your master Subjects list under Subjects, before creating a school. The school creation form itself doesn\'t collect classes or subjects — new schools are seeded from this shared platform-level structure, which is why a freshly created school already shows classes like "Class 1" and "LKG" with 0 students under its Classes tab.',
    },
    {
      title: "Open the Schools page",
      description:
        'From the sidebar, click Schools under the Platform Administration section. This lists every school on the platform as a card, with a search bar above and a "➕ Create School" button in the top-right.',
      screenshot: {
        src: "/screenshots/super-admin/school.png",
        alt: "Schools list page with search bar and school cards",
        caption:
          "The Schools page — one card per school, with quick stats and action icons.",
      },
    },
    {
      title: "Create a new school",
      description:
        'Click "Create School" to open the form. It has two sections: School Information (School Name*, School Code — leave blank to auto-generate, City, Pincode, Address, Phone, School Email, Website) and Admin Account (Admin Name, Admin Email*, Admin Password*). Submitting creates the school and its first School Admin login together.',
      screenshot: {
        src: "/screenshots/super-admin/create_school.png",
        alt: "Create New School form with School Information and Admin Account sections",
        caption:
          "Required fields are marked * — School Name, Admin Email, and Admin Password.",
      },
    },
    {
      title: "Edit a school's Feature Access",
      description:
        'Click the ⚙️ settings icon on a school card to open the "Feature Access" modal. Toggle CCTV Access and Zoom Class Access on or off for that specific school, then click "Save Access". This is the on/off switch for whether the school can use a feature at all — the CCTV tab inside the detail dashboard (a later step) is where the connection details get configured once access is granted here.',
      screenshot: {
        src: "/screenshots/super-admin/feature_cccess.png",
        alt: "Feature Access modal with CCTV Access and Zoom Class Access toggles",
        caption: "Both toggles are off by default for a new school.",
      },
    },
    {
      title: "Open a school's detail dashboard: Overview",
      description:
        "Click the eye 👁️ (view) icon on a school card, or click the school's name/card directly, to open its detail dashboard. The Overview tab shows key stat cards (Students, Teachers, Classes, Sections, Subjects, Exams), fee collected vs. pending, and today's attendance summary.",
      screenshot: {
        src: "/screenshots/super-admin/overview.png",
        alt: "School detail dashboard Overview tab with stat cards",
        caption:
          "All counts read 0 immediately after creation — that's expected, not an error.",
      },
    },
    {
      title: "Overview tab: class-wise breakdown and contact info",
      description:
        "Scrolling down the Overview tab shows a Class-wise Students table (students, sections, subjects, and capacity per class), followed by Contact Information (address, phone, email) and School Admin details (name, email, and the date the account was created).",
      screenshot: {
        src: "/screenshots/super-admin/classwise_overiview.png",
        alt: "Class-wise Students table and Contact Information section",
        caption:
          "Classes shown here come from the platform-level Classes setup, not this school specifically.",
      },
    },
    {
      title: "Students tab",
      description:
        "Lists every student enrolled at this school, with a search bar and columns for Roll No, Class, Gender, Guardian, Status, Fee Status, CCTV, and Joined date. Shows an empty state until the School Admin enrolls students.",
      screenshot: {
        src: "/screenshots/super-admin/students.png",
        alt: "Students tab showing search bar and empty student table",
        caption:
          '"No students found" is the expected state for a brand-new school.',
      },
    },
    {
      title: "Teachers tab",
      description:
        "Lists every teacher at this school, with a search bar and columns for Email, Department, Designation, Qualification, Salary, Status, and Joined date.",
      screenshot: {
        src: "/screenshots/super-admin/teacher.png",
        alt: "Teachers tab showing search bar and empty teacher table",
        caption:
          "Same empty-state pattern as Students — populates as staff are added.",
      },
    },
    {
      title: "Fees tab: Fee Setup",
      description:
        "The Fee Setup sub-tab lists fee heads configured by the school, with Amount, Frequency, and Category columns. Empty until the school defines its own fee structure.",
      screenshot: {
        src: "/screenshots/super-admin/classes_fees.png",
        alt: "Fee Setup sub-tab with Fee Head, Amount, Frequency, and Category columns",
        caption:
          '"No fee structures configured by the school" until fees are set up.',
      },
    },
    {
      title: "Fees tab: Fee Collection",
      description:
        "The Fee Collection sub-tab shows Total, Paid, and Due amounts at the top, with All / Completed / Pending / Partial filter tabs and a per-student records table below.",
      screenshot: {
        src: "/screenshots/detail-fees-collection.png",
        alt: "Fee Collection sub-tab with total/paid/due amount cards and status filters",
        caption: "Totals update automatically as fee payments are recorded.",
      },
    },
    {
      title: "Attendance tab",
      description:
        "Shows a date picker (defaults to today) and a per-student attendance table (Student, Class, Status) for the selected date.",
      screenshot: {
        src: "/screenshots/super-admin/detail-attendance-tab.png",
        alt: "Attendance tab with date picker and empty attendance table",
        caption: "Change the date to review attendance for a previous day.",
      },
    },
    {
      title: "Classes tab",
      description:
        "Lists every class at the school as a card, each showing student count, section count, subject count, and capacity.",
      screenshot: {
        src: "/screenshots/super-admin/classes.png",
        alt: "Classes tab showing class cards with student, section, and subject counts",
        caption:
          "These classes come from the platform-level Classes & Fees setup (see the prerequisite step above).",
      },
    },
    {
      title: "CCTV tab",
      description:
        'Once CCTV Access is enabled via Feature Access, this tab lets you configure the integration: an Enable CCTV toggle, Camera Platform Base URL, API Key, and School Code, saved via "Save CCTV Settings".',
      screenshot: {
        src: "/screenshots/super-admin/cctv.png",
        alt: "CCTV Settings tab with Enable CCTV toggle and configuration fields",
        caption:
          "API Key and School Code come from your camera platform provider.",
      },
    },
    {
      title: "Delete a school",
      description:
        'Click the trash  🗑️ icon on a school card, then confirm in the "Delete School?" dialog by clicking "Delete Permanently". This permanently deletes the school and all its data — students, teachers, fees, attendance — and cannot be undone.',
      screenshot: {
        src: "/screenshots/super-admin/delete-school-confirm.png",
        alt: "Delete School confirmation dialog with warning message",
        caption:
          "There is no undo — double-check the school name before confirming.",
      },
    },
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
