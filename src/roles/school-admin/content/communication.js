export const communicationContent = {
  title: "Communication",
  slug: "communication",
  category: "Communication",

  overview:
    "The Communication Hub allows School Admins to communicate with students, parents, and teachers from a single place. It provides an overview of messaging activity, supports sending broadcast messages, manages reusable templates, and keeps a complete history of all sent messages.",

  purpose:
    "Communication centralizes school notifications into four key areas: Dashboard for monitoring message activity, Send Message for broadcasting announcements, Templates for creating reusable message formats, and Message Log for reviewing message history and delivery records.",

  steps: [
    {
      title: "Open the Communication Hub",
      description:
        "From the sidebar, click **Communication** under the Communication section. The module opens with four tabs: **Dashboard**, **Send Message**, **Templates**, and **Message Log**. Use the **How it Works** button for an interactive walkthrough or the refresh button to reload communication data.",
    },

    {
      title: "Review the Dashboard",
      description:
        "The Dashboard provides a quick overview of communication activity. View the total number of messages sent, delivered, read, and failed. Below the summary cards, review recently created templates, recent message activity, and the currently available delivery channels.",
      screenshot: {
        src: "/screenshots/school-admin/communication/comunication_dashoard.png",
        alt: "Communication dashboard showing message statistics, templates, recent activity, and available channels",
        caption:
          "Use the Dashboard to quickly monitor message activity and available communication channels.",
      },
    },

    {
      title: "Send a broadcast message",
      description:
        "Open the **Send Message** tab to send announcements to students, teachers, parents, or a specific class. Select the target audience, choose the delivery channel and priority, enter a title and message body, then click **Send Message**.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_crateannouncement.png",
        alt: "Send Broadcast Message form with audience selection, channel, priority, title, and message body",
        caption:
          "Broadcast messages can be sent to the entire school or a selected audience.",
      },
    },

    {
      title: "Review message templates",
      description:
        "Switch to the Templates tab to view all available message templates. Each template displays its name, internal code, subject, message body, template type, and supported delivery channels. These templates are reused for recurring school notifications.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_teplate_amiapge.png",
        alt: "Templates tab displaying Exam Result, Attendance, Fee Payment, and Assignment templates",
        caption:
          "Templates save time by providing reusable message formats for common school events.",
      },
    },

    {
      title: "Create a template",
      description:
        "Click **New Template** to create a reusable message template. Enter a Name, Code, Subject, and Message Body using placeholders such as {{student_name}} or {{guardian_name}} where appropriate. Select the Template Type and Delivery Channel, then click **Create**.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_createtemplate.png",
        alt: "Create Template dialog showing name, code, subject, body, type, and channel fields",
        caption:
          "Placeholder variables are automatically replaced with real student, guardian, or school information when messages are sent.",
      },
    },

    {
      title: "Delete a template",
      description:
        "Click the trash icon on any template card to permanently remove it from the system. Deleted templates can no longer be selected when sending future messages.",
    },

    {
      title: "Review the Message Log",
      description:
        "Open the Message Log tab to view every message sent from the Communication Hub. The log displays the delivery status, message title, recipient, delivery channel, and the date and time each message was sent.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_messagelog_mainpage.png",
        alt: "Message Log displaying sent messages with recipient, status, channel, and timestamp",
        caption:
          "Use the Message Log to audit communication history and verify successful message delivery.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        "Click the **How it Works** button to open the built-in tutorial. The guide explains the Communication module, message broadcasting, templates, delivery tracking, and best practices through a step-by-step walkthrough.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_hoeitworks.png",
        alt: "Communication Module How it Works tutorial dialog",
        caption:
          "The built-in guide is useful for first-time administrators learning the Communication module.",
      },
    },
  ],

  bestPractices: [
    "Create reusable templates for recurring notifications such as attendance alerts, fee confirmations, exam results, and assignment announcements.",
    "Keep placeholder variables exactly as provided so recipient information is filled automatically during message delivery.",
    "Use appropriate priorities to distinguish routine announcements from urgent notifications.",
    "Review the Message Log after sending important announcements to confirm successful delivery.",
    "Use clear and descriptive template names so administrators can quickly find the correct template.",
  ],

  commonErrors: [
    {
      issue:
        'Placeholder variables such as "{{student_name}}" appear exactly as typed in the received message.',
      fix: "Ensure placeholder names are written exactly as supported by the system. Editing or misspelling a variable prevents it from being replaced with actual data.",
    },
    {
      issue: "A deleted template is needed again.",
      fix: "Deleted templates cannot be restored. Use **Load Defaults** to recreate standard templates or create a new one manually.",
    },
    {
      issue: "The wrong audience received a broadcast message.",
      fix: "Always verify the selected Target Audience before clicking Send Message, especially when broadcasting to the entire school.",
    },
  ],

  faqs: [
    {
      question: "What is the purpose of message templates?",
      answer:
        "Templates store reusable message formats for common school events, reducing the need to write the same notification repeatedly.",
    },
    {
      question: "Can I send a message to only one class?",
      answer:
        "Yes. Select **Specific Class** as the Target Audience, choose the desired class, and send the announcement only to that class.",
    },
    {
      question: "What information is available in the Message Log?",
      answer:
        "The Message Log records the delivery status, recipient, message title, delivery channel, and timestamp for every sent message.",
    },
    {
      question: "What do the channel icons on a template represent?",
      answer:
        "They indicate which communication channels the template supports, such as in-app notifications, email, SMS, or all available channels.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Attendance", slug: "attendance" },
    { title: "Fees", slug: "fees" },
    { title: "Homework", slug: "homework" },
  ],
};
