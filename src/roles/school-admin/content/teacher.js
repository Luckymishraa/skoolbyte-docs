export const teacherContent = {
  title: "Teachers",
  slug: "teacher",
  category: "People",

  overview:
    "The Teacher Module is your complete staff management hub — it stores every teacher's personal and professional profile, lets you manage their subjects & classes, track attendance, and access payroll, all from one place.",

  purpose:
    "This is the counterpart to the Students module for teaching staff: a single source of truth for who's on staff, what they teach, and their employment details, which other modules (Attendance, Academics) reference.",

  steps: [
    {
      title: "Open the Teachers page",
      description:
        'From the sidebar, click Teachers under People. The page lists every teacher in a table with Name, Department, Designation, Status, and Contact columns, plus a search bar, a "How it Works" guide, and an "Add Teacher" button.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_teacher.png",
        alt: "Teachers page with search bar, How it Works, and Add Teacher button",
        caption:
          "Two teachers shown here — Mehek Arora (Mathematics, Senior Teacher) and Kamalpreet Sharma (English, Assistant Teacher).",
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open a walkthrough covering Module Overview, Search & Navigation, Adding Teachers, Teacher Profile, Teacher Status, Edit & Delete, Payroll & Salary, Attendance, and Pro Tips.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_teacher_howitworks.png",
        alt: "Teacher Module How it Works guide showing Module Overview page",
        caption:
          "A quick tip from this guide: the teacher list auto-refreshes after every add, edit, or delete — no manual page reload needed.",
      },
    },
    {
      title: "Add a new teacher",
      description:
        'Click "Add Teacher" to open the "Add New Teacher" form — a 4-step wizard (Info → Subjects → Salary → Leaves). Step 1 (Info) collects First Name*, Last Name*, Date of Birth, Gender, Qualification, Email, Phone, Department, and Designation, then "Next Step" continues to Subjects.',
      screenshot: {
        src: "/screenshots/school-admin/addteacher.png",
        alt: "Add New Teacher form, step 1 of 4, Info tab",
        caption:
          "Steps 2–4 (Subjects, Salary, Leaves) collect teaching assignments, compensation, and leave allowances before the teacher is created.",
      },
    },
    {
      title: "View a teacher's full profile",
      description:
        'Click the eye icon on a teacher\'s row to open their profile. It has five tabs: Overview (Subjects, Classes, and Salary Status summary cards; Personal Information — full name, DOB, experience, employee ID; and Contact Info — email, phone, address), Schedule & Classes, Payroll & Salary, Leaves & Attendance, and Documents. A "Reset Password" button is available in the top-right.',
      screenshot: {
        src: "/screenshots/school-admin/viewteacherinfo.png",
        alt: "Teacher profile page Overview tab with Subjects, Classes, and Salary Status cards",
        caption:
          'Subjects and Classes read "None" / "None assigned" until they\'re set — usually during the Subjects step of Add Teacher, or later via Schedule & Classes.',
      },
    },
    {
      title: "Edit a teacher's information",
      description:
        'Click the pencil icon on a teacher\'s row to open "Edit Teacher," pre-filled with First Name, Last Name, Email, Phone, Department, Designation, and Status. Update and click "Save Changes."',
      screenshot: {
        src: "/screenshots/school-admin/teacheredit.png",
        alt: "Edit Teacher modal pre-filled with existing teacher details",
        caption:
          "This form is intentionally shorter than Add Teacher — subjects, salary, and leaves are edited from the teacher's own profile tabs instead.",
      },
    },
    {
      title: "Delete a teacher",
      description:
        'Click the trash icon on a teacher\'s row to open "Delete Teacher?" Confirm by clicking "Delete." Unlike deleting a student, this removes the teacher immediately — there is no Super Admin approval step.',
      screenshot: {
        src: "/screenshots/school-admin/teacher_delete.png",
        alt: "Delete Teacher confirmation dialog with warning that the action cannot be undone",
        caption:
          "There is no undo and no approval queue for teacher deletion — double-check before confirming.",
      },
    },
  ],

  bestPractices: [
    'Assign Subjects and Classes during the Add Teacher wizard (or promptly afterward via the profile) — a teacher with "None assigned" won\'t correctly appear in class/subject-linked views like Academics or Attendance.',
    'Keep Designation and Department consistent in phrasing (e.g. always "Senior Teacher" not sometimes "Sr. Teacher") since these values likely feed staff directory filters and reports.',
    "Use Reset Password (on a teacher's profile page) for credential resets rather than trying to set a password through Edit Teacher.",
  ],

  commonErrors: [
    {
      issue: "Accidentally deleted a teacher and want it undone",
      fix: "This isn't recoverable — teacher deletion is immediate and permanent, unlike student deletion which requires Super Admin approval. Double-check the name in the confirmation dialog before clicking Delete.",
    },
    {
      issue: 'A teacher\'s profile shows "None" for Subjects or Classes',
      fix: "This is expected if assignments weren't completed during the Subjects step of Add Teacher — assign them from the teacher's Schedule & Classes tab.",
    },
  ],

  faqs: [
    {
      question:
        "Does deleting a teacher require approval, like deleting a student does?",
      answer:
        "No — teacher deletion happens immediately upon confirmation. Student deletion is the one that routes through a Super Admin approval request; teacher deletion does not.",
    },
    {
      question: "Where do I manage a teacher's salary or payroll?",
      answer:
        "Set it initially during the Salary step of Add Teacher, and manage it afterward from the Payroll & Salary tab on the teacher's own profile page.",
    },
    {
      question: "Can I see a teacher's attendance history?",
      answer:
        "Yes — open their profile (eye icon) and go to the Leaves & Attendance tab.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Attendance", slug: "attendance" },
    { title: "Academics", slug: "academics" },
  ],
};
