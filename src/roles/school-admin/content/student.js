export const studentsContent = {
  title: "Students",
  slug: "students",
  category: "People",

  overview:
    "The Students module is the central hub for managing every student in your school — a complete digital record from admission to graduation, including personal details, class assignment, fee status, and contact information.",

  purpose:
    "This is where School Admins maintain the student database that every other module (Attendance, Fees, Academics) draws from. Keeping records here accurate and current is what keeps the rest of the platform reliable.",

  steps: [
    {
      title: "Open the Students page",
      description:
        'From the sidebar, click Students under People. The page lists every enrolled student in a table with Name, Class, Status, Fees & Status, Services, and Contact columns, plus a search bar, a "How it Works" guide button, a "Deletion Requests" panel, and an "Add Student" button.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_student.png",
        alt: "Students page with search bar, How it Works, Deletion Requests, and Add Student buttons",
        caption:
          "Two students shown here — Aniket Mehra (Class 1-A) and Aman Sharma (Class 2-A), both active and fees paid.",
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open an in-app walkthrough covering Module Overview, Search & Filter, Adding Students, Student Profile, Fee Status, Edit & Delete, Deletion Requests, CCTV & Transport, and Pro Tips — step through it with Next/Previous.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_howitworks.png",
        alt: "Student Module How it Works guide showing Module Overview page",
        caption:
          "A quick tip from this guide: the student list auto-refreshes after every add, edit, or delete — no manual refresh needed.",
      },
    },
    {
      title: "Add a new student",
      description:
        'Click "Add Student" to open the "Add New Student" form — a 3-step wizard (Personal → Academic → Guardian). Step 1 (Personal) collects First Name*, Last Name*, Date of Birth, Gender, Category, Phone, Email*, and Address, then click "Next" to continue.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_addstudent.png",
        alt: "Add New Student form, step 1 of 3, Personal information",
        caption:
          "Required fields (marked *) must be filled before Next becomes usable — shown here is a validation prompt on Last Name.",
      },
    },
    {
      title: "View a student's full profile",
      description:
        'Click the eye icon on a student\'s row to open their profile page. It has four tabs: Overview (Personal Information — full name, DOB, gender, category, guardian, nationality, joined date; and Contact Details — email, phone, guardian phone, address), Leaves & Attendance, Fees & Expenses, and Documents. A "Reset Password" button is available in the top-right.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_studentinfo.png",
        alt: "Student profile page Overview tab with Personal Information and Contact Details cards",
        caption:
          "The profile URL includes the student's unique ID — useful for direct linking or support requests.",
      },
    },
    {
      title: "Edit a student's information",
      description:
        "Click the pencil icon on a student's row to open \"Edit Student\" — the same 3-step Personal → Academic → Guardian wizard used for adding, pre-filled with the student's current details. Update any field and step through to save.",
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_editstudent.png",
        alt: "Edit Student form pre-filled with existing student details",
        caption:
          'The same form structure as Add Student, just pre-populated and titled "Edit Student."',
      },
    },
    {
      title: "Request a student deletion",
      description:
        'Click the trash icon on a student\'s row to open "Delete Student." Unlike deleting a school (Super Admin), deleting a student does not happen immediately — clicking "Request Deletion" sends the request to the Super Admin for approval before any data is removed.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_deletion.png",
        alt: "Delete Student modal explaining the request requires super admin approval",
        caption:
          "No data is removed at this step — this only creates a pending request.",
      },
    },
    {
      title: "Track a deletion request's status",
      description:
        'Click "Deletion Requests" on the Students page to see all pending, approved, and rejected requests. Each entry shows the student name, who requested it, current status (e.g. "Pending Super Admin Approval"), the date requested, and a Request ID for reference.',
      // screenshot: {
      //   src: "/screenshots/school/deletion-request-status.png",
      //   alt: "Deletion Request Status modal showing Pending Super Admin Approval",
      //   caption:
      //     "Status updates once the Super Admin reviews the request in their Approvals module.",
      // },
    },
  ],

  bestPractices: [
    "Fill in Guardian details during the Academic/Guardian steps when adding a student — they're required for emergency contact and appear on the student's profile Contact Details.",
    "Use Reset Password (on a student's profile page) rather than trying to edit login credentials through the Edit Student form — they're handled separately.",
    "Check Deletion Requests periodically if you've submitted one — approval timing depends on the Super Admin's review, not on any action on your end.",
  ],

  commonErrors: [
    {
      issue:
        "Clicked the trash icon expecting the student to be deleted immediately",
      fix: 'This is expected behavior, not a bug — student deletion always requires Super Admin approval. Track progress via "Deletion Requests."',
    },
    {
      issue:
        '"Next" button in Add/Edit Student doesn\'t proceed to the next step',
      fix: 'Check for a validation tooltip like "Please fill in this field" on a required field (marked *) — all required fields on the current step must be completed first.',
    },
  ],

  faqs: [
    {
      question: "Can I delete a student's record immediately without approval?",
      answer:
        "No — every deletion request is routed to the Super Admin for review before any data is actually removed. This protects against accidental or unauthorized data loss.",
    },
    {
      question: "What does the Services column on the student list show?",
      answer:
        'It reflects additional services tied to that student, such as CCTV or transport enrollment — covered in the "CCTV & Transport" section of the built-in How it Works guide.',
    },
    {
      question: "Where do I see a student's fee payment history in detail?",
      answer:
        "Open the student's profile (eye icon) and go to the Fees & Expenses tab — the list view's Fees & Status column only shows a summary badge like \"paid.\"",
    },
  ],

  relatedModules: [
    { title: "Teachers", slug: "teacher" },
    { title: "Attendance", slug: "attendance" },
    { title: "Fees", slug: "fees" },
  ],
};
