export const admissionsContent = {
  title: "Admissions",
  slug: "admissions",
  category: "People",

  overview:
    "The Admissions section is used to manage student applications. You can add applications yourself or receive applications submitted by parents through the school's Online Admission Portal.",

  purpose:
    "Use this section when a student is ready to apply for admission. You can collect the student's information, academic details, parent or guardian information, and address. After receiving an application, you can review it and decide whether to approve or reject it.",

  steps: [
    {
      title: "Open the Admissions page",
      description:
        "From the left-side menu, click Admissions. You will see two sections: Admission Records and Online Admission. Admission Records shows all student applications, including the student's name, application number, class, status, guardian, who referred the student, and application date. You can also search for an application, filter applications by status, export the list, or create a new admission.",
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_mainpage.png",
        alt: "Admissions page showing the list of student applications",
        caption:
          "The Admissions page lets you view and manage all student applications.",
      },
    },

    {
      title: "Create a new admission",
      description:
        'Click "New Admission" to create an application yourself. The form is divided into five steps. First, enter the student\'s basic information such as name, date of birth, gender, blood group, religion, caste, and category. The next steps collect academic information, parent or guardian details, address, and documents. Review the information before submitting the application.',
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_Add.png",
        alt: "New Admission Application form",
        caption:
          "Complete the admission form step by step with the student's personal, academic, and family information.",
      },
    },

    {
      title: "Review an admission application",
      description:
        "Click an application from the list, or click the eye icon, to view its complete details. You can review the student's information, academic details, parent or guardian information, and address. Check the information carefully before making a decision about the application.",
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_view.png",
        alt: "Admission application details with approve and reject options",
        caption:
          "Review the student's information before approving or rejecting the application.",
      },
    },

    {
      title: "Approve or reject an application",
      description:
        'After reviewing an application, you can choose "Approve Application" or "Reject Application." Approving accepts the application, while rejecting moves the application out of the pending list. Make sure the application details are correct before making your decision.',
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_view.png",
        alt: "Admission application with Approve and Reject buttons",
        caption:
          "Use the Approve or Reject button after checking the application details.",
      },
    },

    {
      title: "Set up the Online Admission Portal",
      description:
        "Open the Online Admission section to manage applications submitted directly by parents. You can copy the public admission link and share it with families. You can also choose which classes are accepting applications and see the available seats. The section also lets you turn on automatic SMS, email, or WhatsApp updates for applicants.",
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_onlineadmission .png",
        alt: "Online Admission settings showing admission link, class availability, and notifications",
        caption:
          "Manage the public admission link, available classes, seats, and applicant notifications from here.",
      },
    },

    {
      title: "Choose which classes are open for admission",
      description:
        "Under Class Availability for Public Admission, you can decide which classes parents can select when applying online. Turn on a class to allow applications and turn it off when you no longer want to accept applications for that class. The available seat count is shown for each class.",
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_onlineadmission .png",
        alt: "Class availability settings for online admissions",
        caption:
          "Turn classes on or off depending on whether you are accepting new applications.",
      },
    },

    {
      title: "Set up applicant notifications",
      description:
        "You can choose how applicants receive updates about their applications. You can enable SMS notifications when an application is received, email notifications when the application status changes, and WhatsApp updates. Turn on the options that your school wants to use.",
      screenshot: {
        src: "/screenshots/school-admin/admissions/admission_onlineadmission .png",
        alt: "Automatic notification settings for admission applications",
        caption:
          "Automatic notifications help parents stay informed about their application status.",
      },
    },
  ],

  bestPractices: [
    "Keep the available classes updated so parents only see classes that are currently accepting applications.",
    "Review pending applications regularly so parents do not have to wait unnecessarily for a response.",
    "Check student and parent information carefully before approving or rejecting an application.",
    "Keep the number of available seats updated to avoid accepting more applications than the school can accommodate.",
    "Enable automatic notifications so applicants receive updates about their applications.",
  ],

  commonErrors: [
    {
      issue: "A class is not showing on the online admission form.",
      fix: "Open Online Admission and check the Class Availability section. Make sure the class is turned on so parents can select it when applying.",
    },
    {
      issue: "An application was rejected by mistake.",
      fix: "Check the application details carefully before rejecting an application. If an application has already been rejected, there is no undo option shown in the system, so the applicant may need to submit a new application.",
    },
    {
      issue: "Parents are not receiving application updates.",
      fix: "Open the Online Admission section and check the notification settings. Make sure the required SMS, email, or WhatsApp notification option is enabled.",
    },
  ],

  faqs: [
    {
      question: "What is the Admissions section used for?",
      answer:
        "It is used to manage student applications. You can create applications yourself, receive applications from parents online, review applications, and approve or reject them.",
    },
    {
      question:
        "What is the difference between Admission Records and Online Admission?",
      answer:
        "Admission Records is where you view and manage student applications. Online Admission is where you manage the public admission form, available classes, seats, and notifications for parents.",
    },
    {
      question: "Can parents apply for admission online?",
      answer:
        "Yes. You can share the Public Admission Link with parents so they can submit an application online.",
    },
    {
      question:
        "Can I choose which classes are available for online admission?",
      answer:
        "Yes. The Class Availability section lets you turn online admission on or off for individual classes.",
    },
    {
      question: "Can I send automatic updates to parents?",
      answer:
        "Yes. You can enable SMS, email, or WhatsApp notifications so applicants can receive updates about their applications.",
    },
    {
      question: "What should I check before approving an application?",
      answer:
        "Check the student's personal information, academic details, parent or guardian information, address, and other submitted information before approving the application.",
    },
  ],

  relatedModules: [
    { title: "Enquiries", slug: "enquiries" },
    { title: "Students", slug: "students" },
  ],
};
