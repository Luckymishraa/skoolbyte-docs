export const subjectsContent = {
  title: "Subjects",
  slug: "subjects",
  category: "Platform Administration",

  overview:
    "Master Subjects & Curriculum is where Super Admins define, per class, which subjects exist, their curriculum outline, and chapter-level resources (PDFs or external links) that make up that subject's content.",

  purpose:
    "Subjects are scoped to a specific master class (e.g. Mathematics for Pre-Nursery is a separate record from Mathematics for Class 1), which lets curriculum and chapter resources be tailored exactly to each grade level rather than shared generically across the whole school.",

  steps: [
    {
      title: "Open Master Subjects & Curriculum",
      description:
        "From the sidebar, click Subjects under Platform Administration. Use the Class dropdown at the top to select which class's subjects you want to view — the table below updates to show only that class's subjects, with columns for Subject, Code, Type, Curriculum (a preview), Contents (chapter count), Status, and Actions.",
      screenshot: {
        src: "/screenshots/subject.png",
        alt: "Master Subjects & Curriculum page with Class dropdown and subjects table",
        caption:
          "Selecting a class (e.g. Pre-Nursery) filters the table to that class's subjects only.",
      },
    },
    {
      title: "Create a new subject",
      description:
        'Click "➕ Add Subject" to open the "Create Master Subject" form. The Class field is pre-filled from whichever class was selected on the list page. Fill in Subject Name* (e.g. "Mathematics"), Code (e.g. "MATH"), and Type (e.g. Core), then optionally add a Curriculum outline as free text describing the term-wise syllabus plan.',
      screenshot: {
        src: "/screenshots/create_subject.png",
        alt: "Create Master Subject form with Class, Subject Name, Code, Type, and Curriculum fields",
        caption:
          "Class and Subject Name are required; Code and Type help with filtering and reporting elsewhere.",
      },
    },
    {
      title: "Add chapter contents",
      description:
        'In the "Chapter Contents" section of the same form, click  "➕ Add Row" to add a chapter resource. Each row has a Chapter label, a Title, a content Type (e.g. PDF), a File URL / External URL, and optional notes. Add as many rows as the subject has chapters, then submit "Create Subject" to save.',
    },
    {
      title: "Edit or delete a subject",
      description:
        "On the Subjects table, use the ✏️ pencil icon to edit a subject's details, curriculum, or chapter contents, and the 🗑️ trash icon to permanently delete the subject.",
      screenshot: {
        src: "/screenshots/edit_subject.png",
        alt: "Subjects table showing pencil edit icon and trash delete icon for a subject",
        caption:
          "Use the ✏️ pencil icon to update a subject's information, or the 🗑️ trash icon to permanently remove the subject from the system.",
      },
    },
  ],

  bestPractices: [
    "Keep subject Codes short and consistent (e.g. ENG, MATH, SCI) since they're likely reused in reports, timetables, or exports elsewhere in the platform.",
    "Fill in the Curriculum field even briefly — it's the only place a term-wise plan is documented, and it's what schools reference when planning their own lesson schedules.",
  ],

  commonErrors: [
    {
      issue: "Added the wrong subject to the wrong class",
      fix: "Double-check the Class dropdown before clicking Add Subject — subjects are scoped per class, so a subject created under the wrong class won't appear when browsing the intended one.",
    },
    {
      issue: "Chapter resource link doesn't open",
      fix: "Verify the File URL / External URL field contains a complete, publicly accessible link (including https://) rather than a partial path.",
    },
  ],

  faqs: [
    {
      question:
        "Is the same subject (e.g. Mathematics) shared across all classes?",
      answer:
        "No — each class has its own separate subject records, even if the subject name is the same. This lets curriculum and chapters differ appropriately by grade level.",
    },
    {
      question: "Can schools add their own subjects?",
      answer:
        "Subjects are managed centrally here at the platform level as part of the master class/subject structure — this keeps curriculum consistent across schools using the platform.",
    },
    {
      question: "What does the Contents count on the subjects table mean?",
      answer:
        "It's the number of chapter resources (PDFs/external links) added under that subject's Chapter Contents.",
    },
  ],

  relatedModules: [
    { title: "Classes & Fees", slug: "classes-fees" },
    { title: "Schools", slug: "schools" },
  ],
};
