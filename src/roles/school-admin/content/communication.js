export const communicationContent = {
  title: "Communication",
  slug: "communication",
  category: "Communication",

  overview:
    "The Communication section helps you send and manage messages for students, parents, and teachers from one place. You can send announcements, create reusable message templates, and check the history of messages that have been sent.",

  purpose:
    "Use this section to manage all school messages in one place. You can check message activity, send announcements, create templates for messages you use regularly, and check whether sent messages were delivered successfully.",

  steps: [
    {
      title: "Open the Communication Hub",
      description:
        'From the left-side menu, click "Communication". You will see four sections: Dashboard, Send Message, Templates, and Message Log. You can also click "How it Works" if you need help using this section.',
    },

    {
      title: "Check the Communication Dashboard",
      description:
        "The Dashboard gives you a quick view of your school's messaging activity. You can see how many messages were sent, delivered, read, or failed. You can also see recently created templates, recent messages, and the communication methods currently available.",
      screenshot: {
        src: "/screenshots/school-admin/communication/comunication_dashoard.png",
        alt: "Communication Dashboard showing message statistics and recent activity",
        caption:
          "The Dashboard gives you a quick overview of your school's communication activity.",
      },
    },

    {
      title: "Send a message",
      description:
        'Open the Send Message section to send an announcement. First, choose who should receive the message, such as students, parents, teachers, the whole school, or a specific class. Then choose how the message should be sent, select its priority, enter a title and message, and click "Send Message".',
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_crateannouncement.png",
        alt: "Send Message form showing audience, channel, priority, title, and message fields",
        caption:
          "Send an announcement to the whole school or to a specific group.",
      },
    },

    {
      title: "Send a message to a specific class",
      description:
        'If you only want to contact one class, select "Specific Class" as the audience. Then choose the class you want to contact and send the message. Only the selected class will receive the announcement.',
    },

    {
      title: "View message templates",
      description:
        "Open the Templates section to see the message templates already available. Templates are ready-made messages that can be reused for common school notifications such as attendance, fee payments, exam results, and assignments. You can see the template name, subject, message, type, and available communication methods.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_teplate_amiapge.png",
        alt: "Message Templates showing templates for common school notifications",
        caption:
          "Templates save time by allowing you to reuse messages for common school communications.",
      },
    },

    {
      title: "Create a message template",
      description:
        'Click "New Template" to create a message that you can reuse later. Enter the template name, code, subject, and message. You can also add placeholders such as {{student_name}} or {{guardian_name}}. These placeholders are replaced with the correct student or parent information when the message is sent. Finally, choose the template type and communication method, then click "Create".',
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_createtemplate.png",
        alt: "Create Template form showing template details and message fields",
        caption:
          "Create reusable messages and use placeholders to automatically add student or parent information.",
      },
    },

    {
      title: "Delete a message template",
      description:
        "If you no longer need a template, click the trash icon on the template. You will need to confirm the deletion. Once deleted, the template cannot be used for future messages.",
    },

    {
      title: "Check the Message Log",
      description:
        "Open the Message Log to see the messages that have been sent from the Communication section. You can check who received each message, the message title, how it was sent, its delivery status, and when it was sent.",
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_messagelog_mainpage.png",
        alt: "Message Log showing sent messages and delivery information",
        caption:
          "Use the Message Log to check previous messages and their delivery status.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" to open the built-in guide. It explains how to send messages, use templates, check message delivery, and manage communication effectively.',
      screenshot: {
        src: "/screenshots/school-admin/communication/communication_hoeitworks.png",
        alt: "Communication How it Works guide",
        caption:
          "Use the guide if you are new to the Communication section or need help with a feature.",
      },
    },
  ],

  bestPractices: [
    "Create templates for messages that you send regularly, such as attendance alerts, fee reminders, exam results, and assignment announcements.",
    "Check the selected audience carefully before sending a message, especially when sending an announcement to the whole school.",
    "Use clear and simple message titles so parents, students, and teachers can quickly understand the purpose of the message.",
    "Check the Message Log after sending important messages to make sure they were delivered successfully.",
    "Give templates clear names so you can easily find the right message when you need it.",
    "Keep placeholder names exactly as provided so student and parent information is added correctly.",
  ],

  commonErrors: [
    {
      issue:
        'The message shows "{{student_name}}" or another placeholder instead of the student name.',
      fix: "Check that the placeholder was typed exactly as supported by the system. Do not change the spelling, spaces, or symbols in the placeholder.",
    },
    {
      issue: "A deleted template is needed again.",
      fix: 'Deleted templates cannot be restored. If the system provides a "Load Defaults" option, use it to bring back the standard templates, or create a new template manually.',
    },
    {
      issue: "The message was sent to the wrong group.",
      fix: 'Always check the selected audience before clicking "Send Message". Pay special attention when sending messages to the entire school.',
    },
  ],

  faqs: [
    {
      question: "What are message templates used for?",
      answer:
        "Templates are ready-made messages that you can reuse for common school notifications. They save time because you do not have to write the same message again and again.",
    },
    {
      question: "Can I send a message to only one class?",
      answer:
        'Yes. Select "Specific Class" as the audience, choose the class, and send the message. Only the selected class will receive it.',
    },
    {
      question: "Can I send messages to parents, students, and teachers?",
      answer:
        "Yes. When creating a message, you can choose the appropriate audience based on the communication options available in your school.",
    },
    {
      question: "What can I see in the Message Log?",
      answer:
        "The Message Log shows the messages that were sent, who received them, how they were sent, their delivery status, and the date and time they were sent.",
    },
    {
      question:
        "What are the icons or options for communication methods on a template?",
      answer:
        "They show which communication methods can be used with that template, such as in-app notifications, email, or SMS.",
    },
    {
      question: "What are placeholders such as {{student_name}}?",
      answer:
        "Placeholders are special fields used to automatically add information when a message is sent. For example, {{student_name}} can be replaced with the student's actual name.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Attendance", slug: "attendance" },
    { title: "Fees", slug: "fees" },
    { title: "Homework", slug: "homework" },
  ],
};
