export const enquiriesContent = {
  title: "Enquiries",
  slug: "enquiries",
  category: "People",

  overview:
    "The Enquiries section helps you keep track of families who are interested in enrolling their child in your school. You can add enquiries, record where they came from, follow up with parents, and track whether an enquiry becomes an admission.",

  purpose:
    "Use Enquiries to manage potential students before they officially apply for admission. It helps you keep all interested families in one place, follow up with them, and update their progress from a new enquiry to a completed admission or a rejected enquiry.",

  steps: [
    {
      title: "Open the Enquiries page",
      description:
        'From the left-side menu, click Enquiries. You will see a summary of your enquiries, including Total, New, Contacted, and Converted. You can search for an enquiry, filter enquiries by status or date, export the enquiry list, open the "How it Works" guide, view the QR Code, or add a new enquiry.',
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_mainpage.png",
        alt: "Enquiries page showing enquiry summary and enquiry list",
        caption:
          "The Enquiries page helps you view and manage families who are interested in the school.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" to open the built-in guide. It explains how to add enquiries, collect enquiries using the QR code, update enquiry status, search and filter enquiries, and export enquiry information.',
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_howitworks.png",
        alt: "Enquiries How it Works guide",
        caption:
          "The guide explains the main steps for managing student enquiries.",
      },
    },

    {
      title: "Add an enquiry manually",
      description:
        'Click "Add Enquiry" to enter information about a family that is interested in the school. Enter the father\'s name, mother\'s name, child\'s name, date of birth, mobile number, email, class they are interested in, address, and any additional remarks. You can also record how the family heard about the school, such as through a walk-in visit, referral, or school staff. Click "Save" to add the enquiry.',
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_add.png",
        alt: "Add Enquiry form showing parent, child, and enquiry information",
        caption:
          "Add the family's contact and student information so the enquiry can be followed up later.",
      },
    },

    {
      title: "Collect enquiries using the QR Code",
      description:
        'Click "QR Code" to open the school\'s enquiry QR code. You can share this QR code with parents at school events, on social media, or through other channels. When a parent scans the code, they can fill out the enquiry form themselves. You can also copy the form link or click "Download QR" to save the QR code.',
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_qrcode.png",
        alt: "Enquiry QR Code showing the school enquiry form link",
        caption:
          "Parents can scan the QR code and submit their enquiry without staff entering the information manually.",
      },
    },

    {
      title: "View an enquiry",
      description:
        'Click the eye icon on an enquiry to see its complete information. You can view the parent names, child\'s date of birth, mobile number, class, source of enquiry, trial class information, and submission date. You can also click "Edit" if you need to make changes.',
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_view.png",
        alt: "Enquiry Details showing student and parent information",
        caption:
          "Review the complete enquiry information before following up with the family.",
      },
    },

    {
      title: "Update an enquiry",
      description:
        "Click the pencil icon to edit an enquiry. You can update the student's or parent's information, class, contact details, remarks, source, counsellor, or status. Update the status as you follow up with the family, such as moving it from New to Contacted, Converted, or Rejected.",
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_edit.png",
        alt: "Edit Enquiry form showing enquiry information",
        caption:
          "Update enquiry details and change the status as the admission process moves forward.",
      },
    },

    {
      title: "Track enquiry status",
      description:
        "Use the status of an enquiry to understand where each family is in the admission process. A new enquiry means the family has recently shown interest. Contacted means someone from the school has followed up. Converted means the enquiry has moved forward, while Rejected means the enquiry will not proceed.",
    },

    {
      title: "Delete an enquiry",
      description:
        'If an enquiry is no longer needed, click the trash icon on the enquiry. A confirmation message will appear asking "Delete this enquiry?" Click "OK" only if you are sure. Deleting an enquiry is permanent and cannot be undone.',
      screenshot: {
        src: "/screenshots/school-admin/enquiries/enquiry_delete.png",
        alt: "Confirmation message for deleting an enquiry",
        caption:
          "Check the enquiry carefully before deleting it because the action cannot be undone.",
      },
    },
  ],

  bestPractices: [
    "Update enquiry statuses regularly so you always know which families need follow-up.",
    "Use the QR Code at school events, on social media, or on your website to make it easier for parents to submit enquiries.",
    "Record where each enquiry came from so you can understand which sources are bringing interested families to the school.",
    "Follow up with new enquiries promptly so interested families do not get missed.",
    "Once a family is ready to apply, move to the Admissions section to complete the formal admission process.",
  ],

  commonErrors: [
    {
      issue: "An enquiry was deleted by mistake.",
      fix: "Deleted enquiries cannot be restored. Always check the enquiry details carefully before confirming the deletion.",
    },
    {
      issue: "I cannot find where to change an enquiry's status.",
      fix: "Click the pencil icon to open the Edit Enquiry form. The status can be changed there.",
    },
    {
      issue: "A parent cannot submit an enquiry using the QR code.",
      fix: "Check that the QR code or enquiry form link is correct. You can open the QR Code section and copy the form link again before sharing it with parents.",
    },
  ],

  faqs: [
    {
      question: "What is an enquiry?",
      answer:
        "An enquiry is an expression of interest from a family who is considering enrolling their child in the school. It usually happens before the family submits a formal admission application.",
    },
    {
      question: "What is the difference between an Enquiry and an Admission?",
      answer:
        "An Enquiry is used when a family is interested in the school but has not yet submitted a formal application. An Admission is the formal application submitted when the family is ready to apply.",
    },
    {
      question: "Can parents submit enquiries themselves?",
      answer:
        "Yes. You can share the school's enquiry QR code or form link with parents. They can fill out the form themselves, and the enquiry will appear in the Enquiries section.",
    },
    {
      question: "How can I see where an enquiry came from?",
      answer:
        "Each enquiry has a Source of Enquiry field. It can show sources such as Admin, Walk-in, Referral, or an online enquiry form.",
    },
    {
      question: "What do the enquiry statuses mean?",
      answer:
        "New means the enquiry has recently been received. Contacted means the school has followed up with the family. Converted means the enquiry has moved forward, while Rejected means the enquiry will not proceed.",
    },
    {
      question: "Does converting an enquiry automatically create an admission?",
      answer:
        "No. Enquiries and Admissions are separate sections. When a family is ready to apply, you should use the Admissions section to create or complete the formal application.",
    },
  ],

  relatedModules: [
    { title: "Admissions", slug: "admissions" },
    { title: "Students", slug: "students" },
  ],
};
