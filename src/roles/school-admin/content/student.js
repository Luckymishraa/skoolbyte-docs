export const studentsContent = {
  title: "Students",
  slug: "students",
  category: "People",

  overview:
    "The Students section is where you manage all student information in the school. You can add new students, view their profiles, update their details, check attendance and fees, view documents, and request student record deletion when needed.",

  purpose:
    "Use this section to keep student information complete and up to date. Other sections such as Attendance, Fees, and Academics use the information stored here, so keeping student records accurate helps the school manage daily activities properly.",

  steps: [
    {
      title: "Open the Students page",
      description:
        'From the left-side menu, click Students. You will see a list of all students with information such as their name, class, status, fee status, services, and contact details. You can search for a student, open the "How it Works" guide, check Deletion Requests, or add a new student.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_student.png",
        alt: "Students page showing student list and available actions",
        caption:
          "The Students page gives you a quick view of all students and their basic information.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" to open the student guide. It explains how to search for students, add and edit student information, view student profiles, check fees and attendance, manage documents, and handle deletion requests.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_howitworks.png",
        alt: "Student Module How it Works guide",
        caption:
          "Use the guide if you need help understanding the different features in the Students section.",
      },
    },

    {
      title: "Add a new student",
      description:
        'Click "Add Student" to add a new student to the school. The form has three steps: Personal, Academic, and Guardian. Start by entering the student\'s name, date of birth, gender, category, phone number, email, and address. Click "Next" to continue to the academic and guardian information.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_addstudent.png",
        alt: "Add New Student form showing personal information",
        caption:
          "Enter the student's basic information first, then continue with academic and guardian details.",
      },
    },

    {
      title: "Complete student information",
      description:
        "Continue through the Academic and Guardian steps when adding a student. Enter the student's class and other academic information, followed by parent or guardian details. Make sure all required fields are completed before moving to the next step.",
    },

    {
      title: "View a student's profile",
      description:
        'Click the eye icon next to a student to open their complete profile. The profile contains personal information, contact details, attendance and leave information, fee and expense information, and documents. You can also use the "Reset Password" option if the student\'s login password needs to be changed.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_studentinfo.png",
        alt: "Student profile showing personal and contact information",
        caption:
          "The student profile brings important student information together in one place.",
      },
    },

    {
      title: "Edit student information",
      description:
        "Click the pencil icon next to a student to update their information. The same three steps used when adding a student are available here: Personal, Academic, and Guardian. The existing information is already filled in, so you only need to change the details that need updating and save the changes.",
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_editstudent.png",
        alt: "Edit Student form showing existing student information",
        caption:
          "Update student information whenever personal, academic, or guardian details change.",
      },
    },

    {
      title: "Request student record deletion",
      description:
        'If a student record needs to be removed, click the trash icon next to the student. You will see a Delete Student window. Student records are not deleted immediately. Clicking "Request Deletion" sends the request to the Super Admin for approval.',
      screenshot: {
        src: "/screenshots/school-admin/schooladmin_deletion.png",
        alt: "Delete Student window showing Super Admin approval requirement",
        caption:
          "A deletion request must be approved by the Super Admin before the student record is removed.",
      },
    },

    {
      title: "Check deletion requests",
      description:
        'Click "Deletion Requests" on the Students page to see the requests you have submitted. You can check the student\'s name, who submitted the request, its current status, the date it was submitted, and the Request ID. The status will change after the Super Admin reviews the request.',
      screenshot: {
        src: "/screenshots/school-admin/student_deletionrequest.png",
        alt: "Deletion Requests page showing submitted student deletion requests and their status",
        caption:
          "The Deletion Requests page shows submitted requests, their status, submission date, and Request ID.",
      },
    },
  ],

  bestPractices: [
    "Enter complete student and guardian information when adding a new student so the school always has the correct contact details.",
    "Keep student information updated whenever there is a change in contact details, class, or other important information.",
    "Use the student profile to check attendance, fees, and documents instead of searching through different sections.",
    "Use the Reset Password option on the student's profile when a student needs a new login password.",
    "Check Deletion Requests regularly if you have submitted a request, as the Super Admin needs to approve it before the record is removed.",
  ],

  commonErrors: [
    {
      issue: "The student was not deleted after clicking the trash icon.",
      fix: 'This is normal. Student records require Super Admin approval before they are deleted. Open "Deletion Requests" to check the status of your request.',
    },
    {
      issue: 'The "Next" button does not move to the next step.',
      fix: "Check the current form for any required fields marked with an asterisk (*). Complete all required fields before continuing.",
    },
    {
      issue: "A student's information is incorrect or outdated.",
      fix: "Click the pencil icon next to the student, update the required information, and save the changes.",
    },
  ],

  faqs: [
    {
      question: "What information can I manage for a student?",
      answer:
        "You can manage the student's personal information, academic information, guardian details, contact information, attendance, fees, and documents.",
    },
    {
      question: "Can I delete a student's record immediately?",
      answer:
        "No. Student deletion requires approval from the Super Admin. You can submit a deletion request and check its status from the Deletion Requests section.",
    },
    {
      question: "Where can I check a student's attendance?",
      answer:
        "Open the student's profile and go to the Leaves & Attendance section to view their attendance information.",
    },
    {
      question: "Where can I check a student's fee information?",
      answer:
        "Open the student's profile and go to Fees & Expenses to view their fee and payment information.",
    },
    {
      question: "What does the Services information show?",
      answer:
        "The Services information shows additional services associated with the student, such as CCTV or transport services.",
    },
    {
      question: "Can I change a student's login password?",
      answer:
        "Yes. Open the student's profile and use the Reset Password option to change their login password.",
    },
  ],

  relatedModules: [
    { title: "Teachers", slug: "teachers" },
    { title: "Attendance", slug: "attendance" },
    { title: "Fees", slug: "fees" },
  ],
};
