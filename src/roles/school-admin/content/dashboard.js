export const dashboardContent = {
  title: "Dashboard",
  slug: "dashboard",
  category: "Main",

  overview:
    "The Dashboard is the central workspace of the School Admin Portal. It provides a real-time snapshot of your school's daily operations, allowing you to monitor key metrics, access frequently used features, review recent activities, and quickly navigate to every major module from one place.",

  purpose:
    "Instead of opening multiple modules individually, the Dashboard brings together the most important information—student count, attendance, fee status, assignments, admissions, approvals, and quick shortcuts—so administrators can immediately understand what's happening across the school and take action when required.",

  steps: [
    {
      title: "View the Dashboard overview",
      description:
        "After logging in, the Dashboard opens automatically. At the top you'll find the current date, a personalized welcome message, the school name, a global search bar, and an 'Add Student' shortcut. Just below these are four summary cards showing Total Students, Today's Attendance, Fee Defaulters, and Assignments. These cards give you an instant overview of your school's current status without opening individual modules.",
      screenshot: {
        src: "/public/screenshots/school-admin/dashboard/schooladmin_dashboard.png",
        alt: "School Admin Dashboard overview showing statistics cards and top navigation",
        caption:
          "The dashboard provides a quick summary of your school's daily activity immediately after login.",
      },
    },

    {
      title: "Use Quick Actions",
      description:
        "The Quick Actions section contains shortcuts for the most frequently performed administrative tasks. Instead of navigating through the sidebar, you can directly Add Student, Mark Attendance, Collect Fee, Add Teacher, Create a New Exam, or open the Timetable module with a single click. These shortcuts help reduce navigation time during daily operations.",
      // screenshot: {
      //   src: "/screenshots/school-admin/dashboard_quick_actions.png",
      //   alt: "Quick Actions section containing shortcuts for common school operations",
      //   caption:
      //     "Use Quick Actions for the tasks you perform most often throughout the school day.",
      // },
    },

    {
      title: "Monitor recent admissions",
      description:
        "The Recent Admissions table displays the latest students added to the system. Each row shows the student's name, class, admission status, fee payment status, and when they joined. Selecting 'View All' opens the complete Students module where every student record can be managed.",
      // screenshot: {
      //   src: "/screenshots/school-admin/dashboard_recent_admissions.png",
      //   alt: "Recent Admissions table showing newly admitted students",
      //   caption:
      //     "Quickly verify new admissions without opening the Students module.",
      // },
    },

    {
      title: "Review assignments and approvals",
      description:
        "The right-hand panel summarizes assignment activity and pending approval requests. Assignment statistics show how many assignments are Published, Draft, Overdue, and Pending Review. Below that, the Pending Approvals widget alerts you whenever actions require administrative approval. When everything has been processed, it displays an 'All caught up' message.",
      // screenshot: {
      //   src: "/screenshots/school-admin/dashboard_assignments.png",
      //   alt: "Assignments summary and Pending Approvals widgets",
      //   caption:
      //     "Keep track of academic tasks and administrative approvals from one location.",
      // },
    },

    {
      title: "Navigate using Dashboard shortcuts",
      description:
        "At the bottom of the Dashboard are navigation cards for major school modules such as Attendance, Fees, Exams, and Transport. These cards act as quick navigation buttons. Clicking any card immediately opens its respective module, allowing you to switch between operational areas without using the sidebar menu.",
      // screenshot: {
      //   src: "/screenshots/school-admin/dashboard_navigation_cards.png",
      //   alt: "Bottom navigation cards linking to Attendance, Fees, Exams, and Transport",
      //   caption:
      //     "Each dashboard card redirects directly to its corresponding module.",
      // },
    },
  ],

  bestPractices: [
    "Review the Dashboard at the beginning of every day to identify attendance issues, fee defaulters, pending assignments, and approval requests.",
    "Use Quick Actions for routine administrative work instead of navigating through multiple sidebar menus.",
    "Regularly monitor the Recent Admissions section to verify that newly admitted students appear correctly in the system.",
    "Resolve Pending Approvals promptly to prevent delays in administrative workflows.",
    "Use the bottom navigation cards to quickly move between frequently used modules during daily operations.",
  ],

  commonErrors: [
    {
      issue: "Dashboard statistics don't match recent changes.",
      fix: "Refresh the page or ensure the latest student, attendance, fee, or assignment records have been saved successfully before expecting the dashboard metrics to update.",
    },
    {
      issue: "A Quick Action doesn't perform the expected task.",
      fix: "Verify that you have permission to access that module. Some actions may only be available to users with the required administrative role.",
    },
    {
      issue:
        "Pending Approvals shows 'All caught up' but an approval is expected.",
      fix: "Confirm that the request was actually submitted. Only requests awaiting administrative action appear in this widget.",
    },
  ],

  faqs: [
    {
      question: "Does the Dashboard update automatically?",
      answer:
        "Most dashboard widgets reflect the latest data stored in the system. If recent changes aren't visible immediately, refreshing the page will load the latest information.",
    },
    {
      question:
        "Can I perform administrative tasks directly from the Dashboard?",
      answer:
        "Yes. The Quick Actions section allows you to perform common operations such as adding students, marking attendance, collecting fees, adding teachers, creating exams, and opening the timetable.",
    },
    {
      question: "What happens when I click the bottom dashboard cards?",
      answer:
        "Each card opens its corresponding module. For example, the Attendance card opens the Attendance page, the Fees card opens Fee Management, the Exams card opens the Exams module, and the Transport card opens the Transport section.",
    },
    {
      question: "Can I access every module from the Dashboard?",
      answer:
        "The Dashboard provides shortcuts to the most frequently used modules. The complete list of modules is always available through the left sidebar navigation.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Attendance", slug: "attendance" },
    { title: "Fees", slug: "fees" },
    { title: "Teachers", slug: "teachers" },
    { title: "Exams", slug: "exams" },
    { title: "Transport", slug: "transport" },
  ],
};
