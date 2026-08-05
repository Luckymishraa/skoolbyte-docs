export const communicationContent = {
  title: "Communication",
  slug: "communication",
  category: "Communication",

  overview:
    "The Communication Hub is where School Admins manage outgoing messages to parents, students, and staff — sending messages directly, maintaining reusable message templates, and reviewing a log of what's been sent.",

  purpose:
    "Rather than composing every notification from scratch, Communication centralizes messaging into four areas: a Dashboard overview, Send Message for one-off messages, Templates for reusable message formats tied to common events, and a Message Log for auditing what was sent and when.",

  steps: [
    {
      title: "Open the Communication Hub",
      description:
        'From the sidebar, click Communication under Communication. The page has four tabs: Dashboard, Send Message, Templates, and Message Log, plus a "How it Works" guide and a refresh button.',
    },
    {
      title: "Review Message Templates",
      description:
        'Switch to the Templates tab to see all configured message templates, each showing a Title, an internal key (e.g. "exam_result"), a Subject line, the message body with placeholder variables (e.g. {{guardian_name}}, {{student_name}}), a category tag (e.g. "transactional"), and delivery channel icons (notification, email, SMS, or "all").',
      screenshot: {
        src: "/screenshots/school/communication-templates-list.png",
        alt: "Message Templates tab showing Exam Result Published, Attendance Absent, and Fee Payment Received templates",
        caption:
          "Placeholder variables like {{guardian_name}} and {{amount}} are automatically filled in with real values when a message is sent.",
      },
    },
    {
      title: "Add or load templates",
      description:
        'Click "New Template" to create a custom message template from scratch, or click "Load Defaults" to quickly populate common templates (e.g. Exam Result Published, Attendance Absent, Fee Payment Received, Assignment Assigned) instead of building them individually.',
    },
    {
      title: "Delete a template",
      description:
        "Click the trash icon on a template card to remove it — once deleted, that template can no longer be selected when sending messages.",
    },
  ],

  bestPractices: [
    'Use "Load Defaults" when setting up Communication for the first time — the built-in templates (Exam Result Published, Attendance Absent, Fee Payment Received, Assignment Assigned) cover the most common school-to-parent notifications.',
    "Keep template variables (e.g. {{guardian_name}}, {{student_name}}) intact when editing wording — removing them means the actual name/detail won't be filled in when the message is sent.",
    'Tag templates consistently (e.g. "transactional") so they\'re easy to find and manage as your template list grows.',
  ],

  commonErrors: [
    {
      issue:
        'A message went out with the literal text "{{student_name}}" instead of the actual name',
      fix: "This means the placeholder variable was altered or malformed in the template — check that variable names in the template body exactly match the expected format (e.g. {{student_name}}, not {{ student_name }} or {{StudentName}}).",
    },
    {
      issue: "Deleted a template that's still needed",
      fix: 'Templates aren\'t recoverable once deleted from this list — use "Load Defaults" to restore a standard template, or recreate it manually with "New Template."',
    },
  ],

  faqs: [
    {
      question:
        "What do the icons next to a template (bell, envelope, phone) mean?",
      answer:
        'They indicate which delivery channels that template can send through — such as in-app notification, email, and SMS — or "all" if it\'s set to send via every available channel.',
    },
    {
      question: "Where do I see whether a message was actually delivered?",
      answer: "Check the Message Log tab for a record of sent messages.",
    },
    {
      question: "What's the difference between Send Message and Templates?",
      answer:
        "Templates are reusable message formats you set up in advance for recurring events (like exam results or fee confirmations). Send Message is where you compose and dispatch a message, which can either use one of those templates or be written fresh.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Fees", slug: "fees" },
    { title: "Attendance", slug: "attendance" },
  ],
};
