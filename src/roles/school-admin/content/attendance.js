export const attendanceContent = {
  title: "Attendance",
  slug: "attendance",
  category: "HR & Attendance",

  overview:
    "The Attendance section is used to record and check the daily attendance of students and teachers. You can mark attendance manually, manage teacher clock-ins, check attendance history, and review attendance correction requests.",

  purpose:
    "This section keeps student and teacher attendance information in one place. School administrators can mark attendance, check who is present or absent, review teacher attendance, and make sure attendance records are accurate.",

  steps: [
    {
      title: "Open Attendance Management",
      description:
        'From the left-side menu, click Attendance. You will see the current date, teacher information, and four sections: Overview, Students, Teachers, and Timesheets. You can also click "How it Works" if you need help understanding the Attendance section.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attencence_mainpage.png",
        alt: "Attendance Management page showing attendance summary",
        caption:
          "The Attendance page gives you a quick view of today's attendance and pending requests.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" to open a simple guide explaining how attendance works. It covers student attendance, teacher attendance, attendance correction requests, and useful tips for managing attendance.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_how_it_works.png",
        alt: "Attendance Module How it Works guide",
        caption:
          "Use the guide if you need help understanding the different attendance features.",
      },
    },

    {
      title: "Mark student attendance",
      description:
        'Open the Students section to mark student attendance. First, select the Class and Section. You can also search for a specific student. Select one or more students, choose their attendance status, such as Present or Absent, and click "Mark Attendance". The same status will be applied to all selected students.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_student.png",
        alt: "Students attendance page with students selected",
        caption:
          "Select multiple students and mark their attendance together to save time.",
      },
    },

    {
      title: "Mark teacher attendance",
      description:
        'Open the Teachers section to mark teacher attendance. You can search for a teacher or view teachers by their subjects or classes. Select the teachers you want to mark, choose their attendance status, enter their working hours, and click "Mark Attendance". You can also adjust an individual teacher\'s timing using the "Set Timing" option.',
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_markteacher.png",
        alt: "Teachers attendance page showing selected teachers",
        caption:
          "Mark attendance for multiple teachers at once or adjust an individual teacher's timing.",
      },
    },

    {
      title: "Use teacher location checking",
      description:
        "The GEO-FENCING option controls whether teachers must be at the school location when they clock in using their mobile phone. When this option is enabled, teachers can only clock in when they are within the allowed school area.",
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_markteacher.png",
        alt: "Teacher attendance page with GEO-FENCING option",
        caption:
          "GEO-FENCING helps make sure teacher mobile clock-ins happen from the school location.",
      },
    },

    {
      title: "Check a teacher's monthly attendance",
      description:
        "Open the Timesheets section and select a teacher. You can choose a month to see that teacher's attendance history. The calendar shows which days the teacher was Present, Late, or Absent, along with the total number of days for each status. Use the month arrows to move between different months.",
      screenshot: {
        src: "/screenshots/school-admin/attendence/attendence_timesheet.png",
        alt: "Teacher monthly attendance history",
        caption:
          "The Timesheet lets you review a teacher's attendance for a complete month.",
      },
    },
  ],

  bestPractices: [
    "Mark attendance every day so that the attendance information stays accurate and up to date.",
    "Check the Overview section regularly to see today's attendance and any requests that need your attention.",
    "Use GEO-FENCING for teacher mobile clock-ins if you want to make sure teachers are clocking in from the school.",
    "Review attendance correction requests regularly and approve them only after checking the details.",
    "Check teacher Timesheets when you need to review attendance for a particular month.",
  ],

  commonErrors: [
    {
      issue: 'A student or teacher shows "Not marked" for today.',
      fix: 'This means attendance has not been recorded yet. Select the student or teacher, choose the correct attendance status, and click "Mark Attendance".',
    },
    {
      issue: "A teacher cannot clock in from their mobile phone.",
      fix: "Check whether GEO-FENCING is enabled and make sure the school's location and allowed area are set correctly. If the allowed area is too small or the location is incorrect, the teacher may not be able to clock in.",
    },
  ],

  faqs: [
    {
      question:
        "Can I mark attendance for multiple students or teachers at once?",
      answer:
        'Yes. Select multiple students or teachers, choose the attendance status, and click "Mark Attendance". The selected status will be applied to everyone you selected.',
    },
    {
      question: "What is the difference between Overview and Timesheets?",
      answer:
        "Overview gives you a quick view of today's attendance for students and teachers. Timesheets lets you check one teacher's attendance history month by month.",
    },
    {
      question: "What happens if a teacher needs to correct their attendance?",
      answer:
        "Teachers can submit a request to correct their attendance. The request appears in the Attendance section for the School Admin to review. The change is only made after the School Admin approves the request.",
    },
    {
      question: "What does GEO-FENCING mean?",
      answer:
        "GEO-FENCING checks the teacher's location when they clock in using their mobile phone. When it is enabled, the teacher needs to be within the allowed school area to clock in.",
    },
    {
      question: "Can I see a teacher's attendance for previous months?",
      answer:
        "Yes. Open Timesheets, select the teacher, and use the month controls to view their attendance for different months.",
    },
  ],

  relatedModules: [
    { title: "Teachers", slug: "teachers" },
    { title: "Students", slug: "students" },
    { title: "Leaves", slug: "leaves" },
  ],
};
