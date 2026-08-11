export const teacherContent = {
  title: "Teachers",
  slug: "teachers",
  category: "People",

  overview:
    "The Teachers section is where you manage information about all teachers in the school. You can add teachers, update their details, assign subjects and classes, check attendance, manage salary information, and view their documents.",

  purpose:
    "Use this section to keep teacher information organized and up to date. You can manage each teacher's personal and work details from one place, while other sections such as Academics, Attendance, and Leaves use this information.",

  steps: [
    {
      title: "Open the Teachers page",
      description:
        'From the left-side menu, click Teachers. You will see a list of teachers with information such as their name, department, designation, status, and contact details. You can search for a teacher, open the "How it Works" guide, or add a new teacher.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_teacher.png",
        alt: "Teachers page showing teacher list and available actions",
        caption:
          "The Teachers page gives you a quick view of all teachers and their basic information.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" to open the teacher guide. It explains how to search for teachers, add and edit teacher information, assign subjects and classes, manage salary, check attendance, and manage teacher records.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_teacher_howitworks.png",
        alt: "Teacher Module How it Works guide",
        caption:
          "Use the guide if you need help understanding the different features in the Teachers section.",
      },
    },

    {
      title: "Add a new teacher",
      description:
        'Click "Add Teacher" to add a new teacher. The form has four steps: Info, Subjects, Salary, and Leaves. Start by entering the teacher\'s name, date of birth, gender, qualification, email, phone number, department, and designation. Click "Next Step" to continue with subjects, salary, and leave information.',
      screenshot: {
        src: "/screenshots/school-admin/addteacher.png",
        alt: "Add New Teacher form showing teacher information",
        caption:
          "Enter the teacher's basic information first, then add subjects, salary, and leave details.",
      },
    },

    {
      title: "Assign subjects and classes",
      description:
        "During the Subjects step, assign the subjects and classes that the teacher will handle. Make sure these assignments are completed so the teacher appears correctly in related sections such as Academics and Attendance.",
    },

    {
      title: "Set salary and leave information",
      description:
        "During the Salary and Leaves steps, enter the teacher's salary information and set their available leave days. This information can be managed later from the teacher's profile.",
    },

    {
      title: "View a teacher's profile",
      description:
        'Click the eye icon next to a teacher to open their complete profile. The profile includes personal information, contact details, subjects, classes, salary information, schedule, attendance and leave information, and documents. You can also use the "Reset Password" option if the teacher needs a new login password.',
      screenshot: {
        src: "/screenshots/school-admin/viewteacherinfo.png",
        alt: "Teacher profile showing teacher information and summary",
        caption:
          "The teacher profile brings important personal, work, salary, attendance, and document information together.",
      },
    },

    {
      title: "Edit teacher information",
      description:
        'Click the pencil icon next to a teacher to open "Edit Teacher." The existing information is already filled in, so you can update details such as the teacher\'s name, email, phone number, department, designation, or status. Click "Save Changes" when you are finished.',
      screenshot: {
        src: "/screenshots/school-admin/teacheredit.png",
        alt: "Edit Teacher form showing existing teacher information",
        caption:
          "Update teacher information whenever their personal or work details change.",
      },
    },

    {
      title: "Manage subjects, classes, salary, and leaves",
      description:
        "For detailed changes to a teacher's subjects, classes, salary, or leave information, open the teacher's profile and use the relevant section. This keeps the teacher's main information separate from their work assignments and other details.",
    },

    {
      title: "Reset a teacher's password",
      description:
        'Open the teacher\'s profile and click "Reset Password" when the teacher needs a new login password. Password changes are handled separately from the Edit Teacher form.',
    },

    {
      title: "Delete a teacher",
      description:
        'If a teacher no longer needs to be in the system, click the trash icon next to their name. A confirmation message will appear. Click "Delete" only if you are sure. Unlike student deletion, teacher deletion does not require Super Admin approval and cannot be undone.',
      screenshot: {
        src: "/screenshots/school-admin/teacher_delete.png",
        alt: "Delete Teacher confirmation message",
        caption:
          "Check the teacher's details carefully before deleting because the action cannot be undone.",
      },
    },
  ],

  bestPractices: [
    "Complete the teacher's subject and class assignments when adding them so their information is available correctly in other school sections.",
    "Keep teacher information updated whenever their department, designation, contact details, or status changes.",
    "Use the teacher's profile to manage detailed information such as salary, leaves, subjects, and classes.",
    "Use the Reset Password option on the teacher's profile when a teacher needs a new login password.",
    "Check teacher information regularly to make sure assignments and contact details are correct.",
  ],

  commonErrors: [
    {
      issue: "A teacher's Subjects or Classes shows as empty.",
      fix: "Open the teacher's profile and check the Schedule & Classes section. Assign the correct subjects and classes if they were not added when the teacher was created.",
    },
    {
      issue: "A teacher was deleted by mistake.",
      fix: "Teacher deletion cannot be undone. Always check the teacher's name carefully in the confirmation message before clicking Delete.",
    },
    {
      issue: "The teacher's password needs to be changed.",
      fix: "Open the teacher's profile and use the Reset Password option. Do not try to change the password from the Edit Teacher form.",
    },
  ],

  faqs: [
    {
      question: "What information can I manage for a teacher?",
      answer:
        "You can manage the teacher's personal information, contact details, department, designation, subjects, classes, salary, leaves, attendance, and documents.",
    },
    {
      question: "Can I assign subjects and classes to a teacher?",
      answer:
        "Yes. You can assign subjects and classes when adding the teacher or manage these assignments later from the teacher's profile.",
    },
    {
      question: "Does deleting a teacher require Super Admin approval?",
      answer:
        "No. Teacher deletion happens immediately after confirmation. Unlike student deletion, it does not go through a Super Admin approval process.",
    },
    {
      question: "Where can I manage a teacher's salary?",
      answer:
        "Salary information can be entered when adding a teacher and managed later from the Payroll & Salary section of the teacher's profile.",
    },
    {
      question: "Can I see a teacher's attendance history?",
      answer:
        "Yes. Open the teacher's profile and go to the Leaves & Attendance section to view their attendance information.",
    },
    {
      question: "Can I change a teacher's login password?",
      answer:
        "Yes. Open the teacher's profile and use the Reset Password option to change their login password.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Attendance", slug: "attendance" },
    { title: "Academics", slug: "academics" },
  ],
};
