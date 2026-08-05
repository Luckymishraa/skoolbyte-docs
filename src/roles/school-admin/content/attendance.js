export const attendanceContent = {
  title: "Attendance",
  slug: "attendance",
  category: "HR & Attendance",

  overview:
    "The Attendance Module is a unified system for tracking the daily presence of both Students and Teachers. It handles manual attendance, geo-fenced mobile clock-ins, and automated reporting.",

  purpose:
    "Centralizing student and teacher attendance in one module keeps daily presence data consistent and gives School Admins one place to mark, review, correct, and report on attendance — rather than separate disconnected systems for staff and students.",

  steps: [
    {
      title: "Open Attendance Management",
      description:
        'From the sidebar, click Attendance under HR & Attendance. The header shows a live summary (teacher count, current date) and has four tabs: Overview, Students, Teachers, and Timesheets, plus a "How it Works" guide.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attencence_mainpage.png",
        alt: "Attendance Management Overview tab with Present Today, Absent, and Pending Requests cards",
        caption:
          "The Overview tab shows same-day stats and any pending Attendance Update Requests needing approval.",
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open the "Attendance Module — How it Works" guide, covering Module Overview, Student Attendance, Teacher Attendance, Attendance Requests, and Pro Tips.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_how_it_works.png",
        alt: "Attendance Module How it Works guide showing Module Overview page",
        caption:
          "The guide describes Teacher Tracking as covering detailed timesheets, geo-fencing, and shift tracking.",
      },
    },
    {
      title: "Mark student attendance",
      description:
        'Switch to the Students tab. Filter by Class and Section, optionally search for a student, then check the students you want to mark, choose a status (e.g. Absent) from the dropdown, and click "Mark Attendance" to apply it to all selected students at once.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_student.png",
        alt: "Students tab with Class 1 filter, one student selected, and status dropdown set to Absent",
        caption:
          "Bulk marking: select multiple students, pick one status, and apply it to all of them in a single action.",
      },
    },
    {
      title: "Mark teacher attendance",
      description:
        'Switch to the Teachers tab. Filter by "All Subjects/Classes" or search for a teacher, select the teachers you want to mark, choose a status (e.g. Present), set Working Hours, and click "Mark Attendance." A GEO-FENCING toggle in the top-right controls whether teacher mobile clock-ins must occur within the school\'s geofenced area.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_markteacher.png",
        alt: "Teachers tab with all three teachers selected, status Present, and Working Hours set to 8",
        caption:
          'Each teacher row also has an individual "Set Timing" button for adjusting their specific clock-in/out.',
      },
    },
    {
      title: "Review a teacher's monthly timesheet",
      description:
        'Switch to the Timesheets tab. Select a teacher from the "Select Teacher" list to view their Attendance History for a chosen month — a calendar view color-coded by status, plus Present/Late/Absent totals for that month. Use the arrows next to the month/year to navigate between months.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_timesheet.png",
        alt: "Timesheets tab showing Sushmita Mehra's August 2026 attendance calendar with 1 Present and 3 Absent",
        caption:
          "Green highlights present days, red highlights absent days — today's date gets a blue outline.",
      },
    },
  ],

  bestPractices: [
    "Mark attendance daily rather than batching it — the Overview tab's Present/Absent counts and Pending Requests are most useful when they reflect same-day reality.",
    "Enable GEO-FENCING on the Teachers tab if you want to ensure staff clock in only from school premises via mobile.",
    "Review Attendance Update Requests promptly on the Overview tab — teacher-submitted corrections stay pending until a School Admin approves them.",
  ],

  commonErrors: [
    {
      issue: 'A student or teacher shows "Not marked" for today',
      fix: "This is the default state until someone actively selects them and clicks Mark Attendance — it doesn't default to Present or Absent automatically.",
    },
    {
      issue: "Teacher can't clock in via mobile even though they're at school",
      fix: "Check the GEO-FENCING toggle and the school's configured location radius — an inaccurate or too-narrow geofence can incorrectly block valid clock-ins.",
    },
  ],

  faqs: [
    {
      question:
        "Can I mark attendance for multiple students or teachers at once?",
      answer:
        "Yes — check the boxes next to multiple rows on the Students or Teachers tab, pick one status from the dropdown, and click Mark Attendance to apply it to everyone selected.",
    },
    {
      question: "What's the difference between Overview and Timesheets?",
      answer:
        "Overview shows a same-day snapshot across everyone. Timesheets is a per-teacher, month-by-month historical view with a calendar and Present/Late/Absent totals.",
    },
    {
      question: "How do teacher attendance correction requests work?",
      answer:
        "Teachers can request adjustments to their own clock-ins; these appear as Attendance Update Requests on the Overview tab and stay pending until a School Admin approves them.",
    },
  ],

  relatedModules: [
    { title: "Teachers", slug: "teacher" },
    { title: "Students", slug: "students" },
    { title: "Leaves", slug: "leaves" },
  ],
};
