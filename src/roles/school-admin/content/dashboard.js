export const dashboardContent = {
  title: "Dashboard",
  slug: "dashboard",
  category: "Main",

  overview:
    "The Dashboard is the main page of the School Admin Portal. It gives you a quick view of what is happening in your school, such as the number of students, today's attendance, unpaid fees, assignments, recent admissions, and pending approvals. You can also use it to quickly open commonly used school activities.",

  purpose:
    "The Dashboard saves you time by bringing important school information into one place. Instead of opening different sections one by one, you can check the school's current status and quickly perform common tasks such as adding a student, marking attendance, collecting fees, or adding a teacher.",

  steps: [
    {
      title: "Check the Dashboard",
      description:
        "After you log in, the Dashboard opens automatically. At the top, you can see today's date, a welcome message, the school name, a search box, and an 'Add Student' button. Below this, four boxes show important information: Total Students, Today's Attendance, Fee Defaulters, and Assignments. These numbers help you quickly understand what is happening in the school.",
      screenshot: {
        src: "/screenshots/school-admin/dashboard/schooladmin_dashboard.png",
        alt: "School Admin Dashboard showing school information and summary cards",
        caption:
          "The Dashboard gives you a quick view of the school's important information.",
      },
    },

    {
      title: "Use Quick Actions",
      description:
        "Quick Actions gives you buttons for tasks that you use often. You can use these buttons to Add Student, Mark Attendance, Collect Fee, Add Teacher, Create an Exam, or open the Timetable. This saves you from searching through the menu every time you want to perform a common task.",
    },

    {
      title: "Check recent admissions",
      description:
        "The Recent Admissions section shows the students who were added to the school recently. You can see the student's name, class, admission status, fee payment status, and joining date. If you want to see all students, click 'View All' to open the Students section.",
    },

    {
      title: "Check assignments and approvals",
      description:
        "This section helps you keep track of assignments and requests that need your attention. You can see how many assignments are Published, Draft, Overdue, or waiting for Review. The Pending Approvals section shows requests that need your approval. If there is nothing waiting for you, it will show 'All caught up'.",
    },

    {
      title: "Open other school sections",
      description:
        "At the bottom of the Dashboard, you will find shortcuts to important sections such as Attendance, Fees, Exams, and Transport. Click on any shortcut to open that section directly. You can also use the menu on the left side to access all available sections.",
    },
  ],

  bestPractices: [
    "Check the Dashboard at the start of the day to see if there are any important updates or tasks that need your attention.",
    "Use Quick Actions when you want to perform common tasks quickly.",
    "Check Recent Admissions regularly to make sure newly added students are showing correctly.",
    "Check Pending Approvals regularly so that requests do not remain pending for too long.",
    "Use the Dashboard shortcuts to quickly open sections you use frequently.",
  ],

  commonErrors: [
    {
      issue: "The numbers on the Dashboard are not updated.",
      fix: "Refresh the page and check again. Also make sure the latest student, attendance, fee, or assignment information was saved successfully.",
    },
    {
      issue: "A Quick Action is not working.",
      fix: "Make sure you have permission to use that feature. Some actions may only be available to administrators or specific staff members.",
    },
    {
      issue: "An expected request is not showing under Pending Approvals.",
      fix: "Check whether the request was submitted successfully. Only requests that have been submitted and are waiting for approval appear in this section.",
    },
  ],

  faqs: [
    {
      question: "What is the Dashboard used for?",
      answer:
        "The Dashboard gives you a quick view of important school information. You can check students, attendance, fees, assignments, admissions, and approvals from one place.",
    },
    {
      question: "Do I need to open every section to check school information?",
      answer:
        "No. The Dashboard shows the most important information in one place. You can open a specific section when you need more details.",
    },
    {
      question: "Can I perform tasks directly from the Dashboard?",
      answer:
        "Yes. Quick Actions lets you perform common tasks such as adding students, marking attendance, collecting fees, adding teachers, and creating exams.",
    },
    {
      question: "What happens when I click a Dashboard shortcut?",
      answer:
        "The shortcut opens the related section. For example, clicking Attendance opens the Attendance section, clicking Fees opens Fee Management, and clicking Exams opens the Exams section.",
    },
    {
      question: "Can I access all school sections from the Dashboard?",
      answer:
        "The Dashboard provides shortcuts to commonly used sections. You can find all available sections in the menu on the left side.",
    },
    {
      question: "What should I check on the Dashboard every day?",
      answer:
        "You should check attendance, fee defaulters, recent admissions, assignments, and pending approvals. This helps you quickly identify anything that needs your attention.",
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
