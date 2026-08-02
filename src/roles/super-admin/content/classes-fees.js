export const classesFeesContent = {
  title: "Classes & Fees",
  slug: "classes-fees",
  category: "Platform Administration",

  overview:
    "Master Classes & Fees is where Super Admins define the shared list of classes (Nursery through the highest grade) and each class's fee structure — annual fee, payment plans, discounts, and late fee rules — once, at the platform level. Every school on Skoolbyte is seeded from this same master list.",

  purpose:
    'Rather than each school configuring its own classes and fees from scratch, Skoolbyte defines them centrally here. This keeps class naming and fee structures consistent across schools and is why a newly created school already shows classes like "LKG" and "Class 1" (see the Schools module\'s prerequisite step).',

  steps: [
    {
      title: "Open Master Classes & Fees",
      description:
        'From the sidebar, click Classes & Fees under Platform Administration. This lists every master class in a table with columns for Class Name, Display Name, Fee Amount, Status, and Actions, with a search bar above and an "Add Class" button in the top-right.',
    },
    {
      title: "Create a new master class",
      description:
        'Click "➕ Add Class" to open the "Create Master Class" form. Fill in Class Name* (e.g. "Class 2"), an optional Display Name (defaults to the same value, editable if you want a different label shown to schools), an optional Description, and Sort Order (controls where this class appears in lists — lower numbers first). Click "Create" to save.',
      screenshot: {
        src: "/screenshots/super-admin/create_classees.png",
        alt: "Create Master Class form with Class Name, Display Name, Description, and Sort Order fields",
        caption:
          "Class Name is required; Display Name defaults to match it but can be edited separately.",
      },
    },
    {
      title: "Set up a class's fee structure",
      description:
        'Click the ₹ (rupee) icon on a class row to open "Fee Setup" for that class. Enter the Annual Fee (₹) — the form auto-calculates suggested Monthly and Quarterly amounts from it. Choose which Payment Options (Monthly, Quarterly, Full) the class allows via checkboxes, optionally cap discounts with Max Discount (%) and Max Discount (₹), and configure Late Fee (₹) with a Late Fee Type (e.g. Fixed). Click "Save Fee Config" to apply.',
      screenshot: {
        src: "/screenshots/super-admin/fees.png",
        alt: "Fee Setup modal for Class 2 showing Annual Fee, payment options, discount, and late fee fields",
        caption:
          "Monthly and Quarterly amounts are calculated automatically from the Annual Fee — Monthly ₹25,000 and Quarterly ₹75,000 shown here for a ₹3,00,000 annual fee.",
      },
    },
    {
      title: "Edit or delete a master class",
      description:
        "Use the ✏️ pencil icon on a class row to edit its name, display name, description, or sort order, and the  🗑️ trash icon to delete the class entirely. Deleting a master class here removes it from the shared list used by all schools.",
    },
  ],

  bestPractices: [
    "Set Sort Order deliberately (e.g. Pre-Nursery: 1, Nursery: 2, LKG: 3...) so classes list in the correct academic sequence everywhere they appear, not just alphabetically.",
    "Decide on your full fee structure (payment options, discount caps, late fee rules) before schools start enrolling students against a class — changing fee config after collections have started can create inconsistent records.",
  ],

  commonErrors: [
    {
      issue:
        "Monthly/Quarterly amounts look wrong after changing the Annual Fee",
      fix: "These are recalculated from the Annual Fee automatically — re-open Fee Setup after editing the Annual Fee to confirm the suggested Monthly/Quarterly values before saving.",
    },
    {
      issue: "A payment option (e.g. Monthly) isn't available to a school",
      fix: "Check that the corresponding checkbox is ticked under Payment Options in that class's Fee Setup — schools can only offer the payment plans enabled here.",
    },
  ],

  faqs: [
    {
      question: "Are classes and fees configured per-school or platform-wide?",
      answer:
        "Platform-wide. Master Classes & Fees defines one shared list that every school is seeded from — individual schools don't create their own classes from scratch.",
    },
    {
      question: "Can a school override the fee amount for its own students?",
      answer:
        "Fee Setup here defines the master annual fee, payment options, and discount/late-fee limits for the class. Check the Fees tab inside a school's own detail dashboard (Schools module) for how collections against this structure are tracked per school.",
    },
    {
      question: "What does Sort Order control?",
      answer:
        "It determines the display order of classes in dropdowns and lists across the platform — lower numbers appear first, which is how you keep Pre-Nursery through Class 12 in the correct sequence rather than alphabetical order.",
    },
  ],

  relatedModules: [
    { title: "Schools", slug: "schools" },
    { title: "Subjects", slug: "subjects" },
  ],
};
