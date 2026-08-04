export const admissionsContent = {
  title: "Admissions",
  slug: "admissions",
  category: "People",

  overview:
    "The Admissions module manages formal student applications — both those you create directly (Admission Records) and those submitted by parents through your public Online Admission Portal.",

  purpose:
    "This is the formal application stage that follows Enquiries: once a family is ready to apply, an admission record captures full student, academic, and guardian details, which a School Admin then reviews, approves, or rejects.",

  steps: [
    {
      title: "Open the Admissions page",
      description:
        'From the sidebar, click Admissions under People. The page has two tabs — Admission Records (a table of submitted applications with Name, Application number, Class, Status, Guardian, Referred By, and Date) and Online Admission (portal settings) — plus a "New Admission" button and, on Admission Records, a search bar, status filter, and "Export" button.',
      screenshot: {
        src: "/public/screenshots/school-admin/admissions/admission_mainpage.png",
        alt: "Admission Records tab showing a table with one Pending application",
        caption:
          'Kavya Mishra\'s application (ADM260001) shown here with status "Pending."',
      },
    },
    {
      title: "Create a new admission application",
      description:
        'Click "New Admission" to open the "New Admission Application" form — a 5-step wizard. Step 1 collects First Name*, Last Name*, Date of Birth*, Gender*, Blood Group, Religion, Caste, and Category, then "Next" continues through the remaining steps (academic details, guardian details, address, and document/review).',
      screenshot: {
        src: "/public/screenshots/school-admin/admissions/admission_Add.png",
        alt: "New Admission Application form, step 1 of 5",
        caption:
          "Steps 2–5 continue with academic, guardian, address, and final review details before submission.",
      },
    },
    {
      title: "Review and approve or reject an application",
      description:
        'Click an application row (or its eye icon) to open its full details — grouped into Student Details, Academic Details, Parent/Guardian Details, and Address. From here, click "Reject Application" or "Approve Application" to move the admission out of Pending status.',
      screenshot: {
        src: "/public/screenshots/school-admin/admissions/admission_view.png",
        alt: "Admission application detail view with Reject and Approve buttons",
        caption:
          "This is the same detail view whether the application arrived via New Admission or the public Online Admission Portal.",
      },
    },
    {
      title: "Set up the Online Admission Portal",
      description:
        'Switch to the Online Admission tab to manage public self-service applications. Copy the Public Admission Link (or click the eye icon to preview it) to share with prospective families. Under Class Availability for Public Admission, toggle which classes are currently open for applications and see live seat counts (e.g. "0/40 seats"). Under Auto-Notifications, choose whether to Send SMS on application received, Send Email on status change, and/or Send WhatsApp updates.',
      screenshot: {
        src: "/public/screenshots/school-admin/admissions/admission_onlineadmission .png",
        alt: "Online Admission Portal tab with public link, class availability toggles, and auto-notification checkboxes",
        caption:
          "Turning off a class's toggle here removes it from the public application form without deleting anything.",
      },
    },
  ],

  bestPractices: [
    "Keep Class Availability toggles current — closing a class once it's full prevents overbooking through the public portal, since seat counts are tracked live.",
    "Enable at least one Auto-Notification (SMS or Email) so applicants aren't left wondering about their application status after submitting.",
    "Review Pending applications promptly — a backlog of pending admissions is easy to lose track of since they don't automatically escalate or expire.",
  ],

  commonErrors: [
    {
      issue: "A class isn't showing up on the public admission form",
      fix: "Check its toggle under Class Availability for Public Admission on the Online Admission tab — it must be enabled to appear as an option to applicants.",
    },
    {
      issue: "Rejected an application by mistake",
      fix: "There's no built-in \"undo\" shown for a rejection — contact the applicant to resubmit a new application if this happens, and double-check the student's name before clicking Reject Application.",
    },
  ],

  faqs: [
    {
      question:
        "What's the difference between Admission Records and Online Admission?",
      answer:
        "Admission Records is the list and review workflow for all applications, however they arrived. Online Admission is specifically the public-facing portal setup — the shareable link, which classes are open, and notification settings for applicants who apply themselves.",
    },
    {
      question:
        "Does approving an application automatically create a student record?",
      answer:
        "Check the Students module after approving an admission to confirm the new student appears there — if it doesn't create automatically in your version, you may need to add the student manually using the approved application's details.",
    },
    {
      question: "Can I limit how many students can apply for a class online?",
      answer:
        'Yes — the Class Availability for Public Admission section shows live seat counts (e.g. "0/40 seats") per class, which caps how many public applications that class will accept.',
    },
  ],

  relatedModules: [
    { title: "Enquiries", slug: "enquiries" },
    { title: "Students", slug: "students" },
  ],
};
