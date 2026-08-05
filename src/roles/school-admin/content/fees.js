export const feesContent = {
  title: "Fees",
  slug: "fees",
  category: "Finance",

  overview:
    "Fee Management is where School Admins define fee structures per class (Fee Setup), generate invoices for individual students (Fee Invoices), track what's outstanding (Student Dues), and review collection reports (Reports).",

  purpose:
    "Fees here are two-step by design: first you set up fee heads (what's charged, how much, how often, for which class) once under Fee Setup, then you generate actual invoices against those fee heads whenever a student needs to be billed. This separation keeps fee definitions consistent while letting invoicing stay flexible per student, month, or year.",

  steps: [
    {
      title: "Open Fee Management",
      description:
        'From the sidebar, click Fees under Finance. The page header shows a running summary (e.g. "3 active fee types • ₹3,55,000/year") and has four tabs: Fee Invoices, Student Dues, Reports, and Fee Setup, plus a "How it works" guide and an "Export Students" button.',
      screenshot: {
        src: "/screenshots/school-admin/fees_setup.png",
        alt: "Fee Management page on the Fee Setup tab with search, filters, and a fee heads table",
        caption:
          "The Fee Setup tab — search, frequency/status/category filters, and status badges (Total/Active/Inactive/Optional) above the table.",
      },
    },
    {
      title: "Use the built-in Fee System Guide",
      description:
        'Click "How it works" to open the "School ERP — Fee System Guide." It walks through Fee Setup (do this once before generating any invoices) step by step: go to Fee Setup, click "+ Add Fee Head," fill in the fields per class, use "Other" in the Fee Type dropdown for a charge not already listed, apply special fees (like Exam or Picnic Fee) to a specific class or set them Global for the whole school, and set the Money Flow Type to control whether a fee adds to or subtracts from a student\'s total.',
      screenshot: {
        src: "/screenshots/school-admin/fees_howitworks.png",
        alt: "School ERP Fee System Guide showing numbered steps for Fee Setup",
        caption:
          "This guide is scoped to Fee Setup specifically — it's the recommended first stop before creating any invoices.",
      },
    },
    {
      title: "Add a fee head",
      description:
        'On the Fee Setup tab, click "Add Fee Head." Optionally start from a Quick Select Preset (Tuition Fee, Admission Fee, Annual Charges, Development Fund, Examination Fee, Computer Lab Fee, Library Fee, Sports Fee) to prefill common fields, then set Fee Type* (e.g. Transportation Fee), Fee Name*, Fee Category (e.g. Standard — Admission/Tuition), Class*, Amount (₹)*, Money Flow Type (e.g. "+ Add (Fee)"), and Frequency (e.g. Yearly). Check "Optional Fee" if students may choose whether to pay it.',
      screenshot: {
        src: "/screenshots/school-admin/fees_adding.png",
        alt: "Add Fee Head form with Quick Select Presets and fee configuration fields",
        caption:
          "Presets fill in Fee Type and a suggested Fee Name — you still set Class and Amount yourself.",
      },
    },
    {
      title: "Edit a fee head",
      description:
        'Click the pencil icon on a fee head row to open "Edit Fee Head," pre-filled with its current Fee Type, Fee Name, Fee Category, Class, Amount, Money Flow Type, Frequency, Status, and Optional Fee setting. Update and save.',
      screenshot: {
        src: "/screenshots/school-admin/fees_edit.png",
        alt: "Edit Fee Head modal pre-filled with Tuition Fee details for Class 2",
        caption:
          "Status here (Active/Inactive) controls whether this fee head can be selected when generating new invoices.",
      },
    },
    {
      title: "Generate an invoice",
      description:
        'Switch to the Fee Invoices tab. Under Invoice Details, choose the Class and Student, then set Invoice Type (e.g. Monthly), Month, and Year. Under Select Fee Heads, check which fee heads to include for that student — each shows its computed amount, with a running Subtotal and Net Total. Optionally enable EMI Options, then click "Generate Invoice Now."',
      screenshot: {
        src: "/screenshots/school-admin/fees_invoice.png",
        alt: "Fee Invoices tab with Invoice Details, Select Fee Heads, and Generate Invoice Now button",
        caption:
          "Monthly invoices auto-divide a Yearly fee head's amount — ₹16,666.67 shown here from a ₹2,00,000 annual Class 2 fee.",
      },
    },
  ],

  bestPractices: [
    "Complete all your Fee Setup for the academic year before generating the first invoice — changing a fee head's amount after invoices have already been generated against it won't retroactively update those invoices.",
    'Use the Money Flow Type field deliberately — most fee heads should be "+ Add (Fee)", but discounts or waivers are modeled as a subtracting flow type instead of a separate discount feature.',
    "Mark genuinely optional charges (like a sports kit fee) as Optional Fee so they don't get bundled into every student's invoice by default.",
  ],

  commonErrors: [
    {
      issue: "Can't find the fee type I need in the dropdown",
      fix: 'Select "Other" from the Fee Type dropdown in Add Fee Head to define a custom charge not covered by the built-in presets.',
    },
    {
      issue: "Invoice amount doesn't match the fee head's listed Amount",
      fix: "Check the selected Invoice Type and Frequency — a Yearly fee head billed on a Monthly invoice is automatically divided (e.g. ₹2,00,000/year → ₹16,666.67/month), which is expected behavior, not an error.",
    },
    {
      issue:
        "A fee head isn't showing up in Select Fee Heads when generating an invoice",
      fix: "Confirm the fee head's Status is Active and its Class matches the student's class — inactive or mismatched-class fee heads won't appear as selectable.",
    },
  ],

  faqs: [
    {
      question: "What's the difference between Fee Setup and Fee Invoices?",
      answer:
        "Fee Setup defines the fee rules (what's charged, how much, how often, which class) once. Fee Invoices is where you actually bill a specific student against those rules, for a specific month/year.",
    },
    {
      question: "Can a fee apply to the whole school instead of one class?",
      answer:
        "Yes — when adding a fee head, you can set it as Global rather than tying it to one specific class, which applies it to every student school-wide (covered in the built-in Fee System Guide).",
    },
    {
      question:
        "Where do I see whether a student has actually paid an invoice?",
      answer:
        "Check the Student Dues tab for outstanding amounts, or scroll to Student Payment History below the invoice generator on the Fee Invoices tab.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Teachers", slug: "teachers" },
  ],
};
