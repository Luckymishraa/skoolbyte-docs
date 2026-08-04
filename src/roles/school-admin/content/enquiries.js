export const enquiriesContent = {
  title: "Enquiries",
  slug: "enquiries",
  category: "People",

  overview:
    "The Enquiry Module is your CRM for managing prospective students. It tracks every lead from initial contact to final conversion or rejection, helping you grow your school's admissions.",

  purpose:
    "Enquiries capture interest before a family commits to applying — this keeps prospective-student leads (and where they came from) organized and followed up on, separate from the formal Admissions module where an actual application is submitted.",

  steps: [
    {
      title: "Open the Enquiries page",
      description:
        'From the sidebar, click Enquiries under People. The page shows four summary cards (Total, New, Contacted, Converted), a search bar, status filter tabs (All, New, Contacted, Converted, Rejected), a date range filter, and "How it Works," "Export," "QR Code," and "Add Enquiry" buttons.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_mainpage.png",
        alt: "Enquiries page with summary cards, filters, and a list of enquiry cards",
        caption:
          "Each enquiry card shows the child's name, status badge, source, class, parent names, phone, and date.",
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open the "Enquiry Module — How it Works" guide, covering Module Overview, QR Code & Public Form, Adding Enquiries, Status Pipeline, Filters & Search, Exporting Data, and Pro Tips.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_howitworks.png",
        alt: "Enquiry Module How it Works guide showing Module Overview page",
        caption:
          "The guide describes the Status Pipeline as moving leads through New, Contacted, Converted stages.",
      },
    },
    {
      title: "Add an enquiry manually",
      description:
        'Click "Add Enquiry" to open the "Add Enquiry" form. Fill in Father Name*, Mother Name*, Child Name*, Child DOB, Mobile No*, Email, Enquiry Class*, Address, Remark, and Source of Enquiry (dropdown, e.g. Admin, Walk-in, Referral). Submit to save it as a New lead.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_add.png",
        alt: "Add Enquiry form with parent, child, and enquiry details fields",
        caption:
          "Required fields (marked *): Father Name, Mother Name, Child Name, Mobile No, and Enquiry Class.",
      },
    },
    {
      title: "Share the public enquiry QR code",
      description:
        'Click "QR Code" to open "Enquiry QR Code." Share the generated QR code (or copy the Form URL) with parents — scanning it opens a public enquiry form for your school directly, letting them self-register as a lead without staff manually entering their details. Click "Download QR" to save the image.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_qrcode.png",
        alt: "Enquiry QR Code modal with QR image, form URL, and Download QR button",
        caption:
          "The Form URL follows the pattern skoolbyte.com/enquiry/your-school-slug.",
      },
    },
    {
      title: "View an enquiry's full details",
      description:
        'Click the eye icon on an enquiry card to open "Enquiry Details" — a read-only view of Father Name, Mother Name, Date of Birth, Mobile, Enquiry Class, Source, Trial Class Given, and Date submitted. Click "Edit" from here to jump straight into editing, or "Close" to dismiss.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_view.png",
        alt: "Enquiry Details modal showing all fields for Mark's enquiry",
        caption:
          '"Trial Class Given" tracks whether the prospective student has already attended a trial session.',
      },
    },
    {
      title: "Edit an enquiry",
      description:
        'Click the pencil icon on an enquiry card to open "Edit Enquiry," pre-filled with the same fields as Add Enquiry (Father Name, Mother Name, Child Name, Child DOB, Mobile No, Email, Enquiry Class, Address, Remark, Source of Enquiry, Counsellor Name). Update the status or any detail and save — this is also how you move a lead from New to Contacted, Converted, or Rejected.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_edit.png",
        alt: "Edit Enquiry form pre-filled with Mark's enquiry details",
        caption:
          'The same form structure as Add Enquiry, pre-populated and titled "Edit Enquiry."',
      },
    },
    {
      title: "Delete an enquiry",
      description:
        'Click the trash icon on an enquiry card. A browser confirmation ("Delete this enquiry?") appears — click "OK" to confirm. This is immediate and permanent.',
      screenshot: {
        src: "/public/screenshots/school-admin/enquiries/enquiry_delete.png",
        alt: "Browser confirmation dialog asking Delete this enquiry?",
        caption:
          "Unlike student deletion, this uses a simple native browser confirm — no approval workflow.",
      },
    },
  ],

  bestPractices: [
    "Share the QR Code at school events, on social media, or on your website — it's the fastest way to collect enquiries without staff data entry, and every submission arrives pre-tagged with the correct school.",
    "Update an enquiry's status promptly as you work it (New → Contacted → Converted/Rejected) — the dashboard cards (Total, New, Contacted, Converted) reflect real-time counts your team likely relies on for follow-up priorities.",
    "Once a family decides to apply, use the Admissions module for the formal application — Enquiries and Admissions are separate records, so converting a lead doesn't automatically create an admission.",
  ],

  commonErrors: [
    {
      issue: "Deleted an enquiry by accident",
      fix: 'This can\'t be undone — deletion is immediate once you click "OK" on the confirmation dialog, so double-check before confirming.',
    },
    {
      issue: "Can't find where to change an enquiry's status",
      fix: "Status changes happen through the pencil (Edit) icon, not a separate status dropdown on the card itself — open Edit Enquiry and update the status field there.",
    },
  ],

  faqs: [
    {
      question: "What's the difference between an Enquiry and an Admission?",
      answer:
        "An Enquiry is an early-stage lead — someone expressing interest, often before deciding to apply. An Admission is the formal application itself, submitted through the separate Admissions module once a family is ready to proceed.",
    },
    {
      question:
        "Can parents submit enquiries without a staff member creating them?",
      answer:
        "Yes — share the Enquiry QR Code or its Form URL, and parents can submit their own enquiry through a public form, which appears in your Enquiries list automatically.",
    },
    {
      question: "How do I see where my enquiries are coming from?",
      answer:
        "Each enquiry records a Source of Enquiry (e.g. Admin, Walk-in, Referral, or QR/public form submissions) — visible both on the enquiry card and in Enquiry Details.",
    },
  ],

  relatedModules: [
    { title: "Admissions", slug: "admissions" },
    { title: "Students", slug: "students" },
  ],
};
