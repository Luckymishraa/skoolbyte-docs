export const feesContent = {
  title: "Fees",
  slug: "fees",
  category: "Finance",

  overview:
    "The Fees section helps you manage school fees from one place. You can set up the fees students need to pay, create invoices for individual students, check unpaid fees, and view fee collection information.",

  purpose:
    "First, set up the different types of fees your school charges, such as tuition, admission, transport, or examination fees. After the fees are set up, you can create invoices for individual students and track whether they have paid or still have an amount due.",

  steps: [
    {
      title: "Open Fee Management",
      description:
        'From the left-side menu, click Fees. You will see four sections: Fee Invoices, Student Dues, Reports, and Fee Setup. You can also open the "How it works" guide or export student information when needed.',
      screenshot: {
        src: "/screenshots/school-admin/fees_setup.png",
        alt: "Fee Management page showing Fee Setup and fee information",
        caption:
          "The Fees section brings fee setup, invoices, unpaid fees, and reports together in one place.",
      },
    },

    {
      title: "Use the Fee System Guide",
      description:
        'Click "How it works" to open the Fee System Guide. It explains how to set up fees before creating invoices. The guide also explains how to add different types of fees, apply fees to a class or the whole school, and choose whether a fee adds to or reduces the amount a student needs to pay.',
      screenshot: {
        src: "/screenshots/school-admin/fees_howitworks.png",
        alt: "Fee System Guide explaining how to set up school fees",
        caption:
          "Use the guide if you need help setting up fees before creating student invoices.",
      },
    },

    {
      title: "Add a new fee",
      description:
        'Open Fee Setup and click "Add Fee Head" to create a new type of fee. You can choose a ready-made option such as Tuition Fee, Admission Fee, Annual Charges, Examination Fee, Library Fee, or Sports Fee. You can also choose "Other" if the fee you need is not listed. Then enter the fee name, category, class, amount, how the fee affects the student\'s total, and how often it should be charged. You can also mark the fee as optional if students do not have to pay it.',
      screenshot: {
        src: "/screenshots/school-admin/fees_adding.png",
        alt: "Add Fee Head form showing fee options and fee details",
        caption:
          "Choose a common fee from the presets or create your own fee and enter its amount and other details.",
      },
    },

    {
      title: "Edit a fee",
      description:
        "If you need to change a fee, click the pencil icon next to it. You can update the fee name, category, class, amount, payment frequency, status, and other settings. Click save after making your changes.",
      screenshot: {
        src: "/screenshots/school-admin/fees_edit.png",
        alt: "Edit Fee Head form showing existing fee details",
        caption:
          "You can update fee details when the school's fee structure changes.",
      },
    },

    {
      title: "Generate a student invoice",
      description:
        'Open the Fee Invoices section to create a bill for a student. First, select the class and student. Then choose the invoice type, month, and year. Select the fees that should be included in the invoice. The system will calculate the subtotal and total amount. You can also use EMI options when available. Finally, click "Generate Invoice Now" to create the invoice.',
      screenshot: {
        src: "/screenshots/school-admin/fees_invoice.png",
        alt: "Fee Invoice form showing student, fee selection, and invoice details",
        caption:
          "Select the student and fees to create an invoice with the correct amount.",
      },
    },

    {
      title: "Check student dues",
      description:
        "Open the Student Dues section to check which students still have unpaid fees. This helps you quickly identify students with outstanding payments and follow up when necessary.",
    },

    {
      title: "Check payment history",
      description:
        "You can also check a student's payment history from the Fee Invoices section. This helps you see previous invoices and payments and understand whether a student's fees have been paid.",
    },
  ],

  bestPractices: [
    "Set up the complete fee structure for the academic year before creating student invoices.",
    "Check the fee amount and class carefully before saving a fee.",
    "Mark fees as optional only when students are not required to pay them.",
    "Use the correct payment frequency, such as Monthly or Yearly, so invoices are calculated correctly.",
    "Check Student Dues regularly to keep track of unpaid fees.",
    "Review important invoices before sharing them with students or parents.",
  ],

  commonErrors: [
    {
      issue: "The fee I need is not available in the fee type list.",
      fix: 'Select "Other" when adding a fee. This allows you to create a custom fee that is not included in the standard options.',
    },
    {
      issue: "The invoice amount is different from the fee amount I entered.",
      fix: "Check the invoice type and fee frequency. For example, a yearly fee can be divided into monthly payments when you create a monthly invoice. This is expected behavior.",
    },
    {
      issue: "A fee is not available when creating an invoice.",
      fix: "Check that the fee is Active and is assigned to the same class as the student. Inactive fees or fees assigned to another class will not be available for selection.",
    },
  ],

  faqs: [
    {
      question: "What is Fee Setup used for?",
      answer:
        "Fee Setup is where you create and manage the different types of fees your school charges. You can set the fee amount, class, and how often it should be charged.",
    },
    {
      question: "What is a Fee Invoice?",
      answer:
        "A Fee Invoice is a bill created for a specific student. It shows the fees the student needs to pay and the total amount due.",
    },
    {
      question: "Can I create a fee for the whole school?",
      answer:
        "Yes. A fee can be set as Global when the fee should apply to students across the school instead of only one specific class.",
    },
    {
      question: "Can I create a fee that students do not have to pay?",
      answer:
        "Yes. When creating a fee, you can mark it as an Optional Fee. This is useful for charges that students can choose whether to pay.",
    },
    {
      question: "Where can I check unpaid fees?",
      answer:
        "Open the Student Dues section to see outstanding amounts and identify students who still have fees to pay.",
    },
    {
      question: "Where can I check a student's previous payments?",
      answer:
        "You can check the Student Payment History in the Fee Invoices section to review previous invoices and payments.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Teachers", slug: "teachers" },
  ],
};
