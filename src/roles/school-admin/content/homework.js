export const homeworkContent = {
  title: "Homework",
  slug: "homework",
  category: "Academics",

  overview:
    "The Homework section helps you create, publish, manage, and track homework assignments for students. You can assign homework to a specific teacher, class, section, and subject, add instructions and a due date, upload an attachment, save assignments as drafts, and publish them for students.",

  purpose:
    "Use this section to give students organized homework tasks and keep all assignments in one place. School Admins can create new homework, edit existing assignments, view assignment details, delete homework when necessary, and use filters and search to quickly find specific assignments.",

  steps: [
    {
      title: "Open Homework Management",
      description:
        'From the left-side menu, click "Home Work" under the Academics section to open the Homework Dashboard. The dashboard provides an overview of all homework assignments. At the top, you can see summary cards showing the Total Homework, Active assignments, Draft assignments, and Archived assignments. Below the summary cards, use the search box to quickly find homework by title, subject, class, or teacher name. You can also use the available filters to narrow down assignments by Status, Class, Type, Teacher, Created From date, and Created To date. The homework list displays important information such as the assignment title, class, subject, assigned teacher, creation date, and current status. Use the status shown in the list to identify whether an assignment is Published, Draft, or Archived. The Actions column provides options to view, edit, or delete an assignment.',
      screenshot: {
        src: "/screenshots/school-admin/homework/homework_dashboard.png",
        alt: "Homework Dashboard showing summary cards, search, filters, homework assignments, statuses, and actions",
        caption:
          "The Homework Dashboard provides an overview of assignments, search and filter options, assignment status, and actions for managing homework.",
      },
    },

    {
      title: "Create and publish homework",
      description:
        'Click "New Homework" in the top-right corner to open the homework creation form. Start by entering a clear Homework Title. In the Assign Teacher field, select the teacher responsible for the homework; this field is optional. Next, select the required Class and choose the appropriate Section. Select the Subject for the assignment. Enter the homework instructions in the Description field so students clearly understand what they need to complete. Set the Due Date to specify when the homework should be completed. You can also add an optional attachment such as a PDF, document, or image if students need a worksheet, question paper, or other supporting material. Before saving, choose one of the available save options. Select "Keep Draft" if the homework is still being prepared or reviewed. A draft is not visible to students and can be edited later. Select "Publish" when the homework is ready to be shared. Published homework becomes visible to students in the selected class and section. After checking all the details, click "Create Homework" to save the assignment.',
      screenshot: {
        src: "/screenshots/school-admin/homework/homework_addhomework.png",
        alt: "New Homework form showing teacher, class, section, subject, description, due date, attachment, and save options",
        caption:
          "Complete the homework details, choose whether to keep the assignment as a draft or publish it, and click Create Homework to save it.",
      },
    },

    {
      title: "View homework details",
      description:
        "Click the eye icon in the Actions column to view the details of an existing homework assignment. The details panel shows the homework title, class, section, subject, due date, teacher, and homework description.",
      screenshot: {
        src: "/screenshots/school-admin/homework/homework_view.png",
        alt: "Homework details panel showing assignment information",
        caption:
          "The View option lets you review the complete details of an existing homework assignment.",
      },
    },

    {
      title: "Edit existing homework",
      description:
        'Click the pencil icon in the Actions column to edit an existing homework assignment. You can update the homework title, teacher, class, section, subject, description, and due date. Click "Save Changes" after making the required updates.',
      screenshot: {
        src: "/screenshots/school-admin/homework/homework_edit.png",
        alt: "Edit Homework form showing existing homework details",
        caption:
          "Edit an existing homework assignment when its details need to be changed.",
      },
    },

    {
      title: "Delete homework",
      description:
        'Click the trash icon in the Actions column to delete a homework assignment. A confirmation message will appear before deletion. Click "Yes, Delete" only when you are sure because deleting the homework also removes all student submissions associated with it and the action cannot be undone.',
      screenshot: {
        src: "/screenshots/school-admin/homework/delete_homework.png",
        alt: "Delete Homework confirmation dialog",
        caption:
          "Confirm carefully before deleting homework because its student submissions will also be removed.",
      },
    },
  ],

  bestPractices: [
    "Use clear and simple homework titles so assignments are easy to identify.",
    "Select the correct class, section, and subject before publishing homework.",
    "Write clear instructions in the Description field so students understand what they need to complete.",
    "Always check the due date before publishing an assignment.",
    "Use attachments when students need worksheets, reference material, or other supporting files.",
    'Use "Keep Draft" when an assignment is still being prepared or reviewed.',
    'Use "Publish" only when the homework is ready to be visible to students.',
    "Review existing homework regularly and update details when requirements or deadlines change.",
    "Be careful when deleting homework because associated student submissions will also be removed.",
  ],

  commonErrors: [
    {
      issue: "Homework was created for the wrong class or section.",
      fix: "Open the homework using the Edit option and select the correct class and section. Save the changes after verifying the assignment details.",
    },
    {
      issue: "Students cannot see the homework.",
      fix: "Check the homework status on the Dashboard. If the homework is saved as a draft, it is not visible to students. Publish the homework when it is ready to be shared.",
    },
    {
      issue: "The homework due date is incorrect.",
      fix: 'Open the homework using the Edit option, update the Due Date field, and click "Save Changes".',
    },
    {
      issue: "The wrong teacher was assigned to the homework.",
      fix: 'Open the homework using the Edit option and select the correct teacher from the Assign Teacher field. Click "Save Changes" after updating it.',
    },
    {
      issue: "Homework was deleted accidentally.",
      fix: "Deleted homework cannot be restored. Student submissions associated with the homework are also removed, so confirm carefully before deleting an assignment.",
    },
  ],

  faqs: [
    {
      question: "What can I manage in the Homework section?",
      answer:
        "You can create homework assignments, assign them to teachers and students by class and section, add descriptions and attachments, set due dates, save drafts, publish assignments, edit existing homework, view details, and delete assignments.",
    },
    {
      question: "Can I save homework without publishing it?",
      answer:
        'Yes. Select "Keep Draft" to save the homework without making it visible to students. You can publish it later when it is ready.',
    },
    {
      question: "Who can see published homework?",
      answer:
        "Published homework is visible to the students assigned through the selected class and section.",
    },
    {
      question: "Can I edit homework after publishing it?",
      answer:
        'Yes. Click the pencil icon in the Actions column, update the required information, and click "Save Changes".',
    },
    {
      question: "Can I add a file to homework?",
      answer:
        "Yes. You can optionally upload supporting files such as PDFs, documents, or images when creating homework.",
    },
    {
      question: "What happens when I delete homework?",
      answer:
        "The homework is permanently removed. Any student submissions associated with that homework are also removed, and the action cannot be undone.",
    },
    {
      question: "How can I find a specific homework assignment?",
      answer:
        "Use the search box to search by title, subject, class, or teacher name. You can also use the available filters for status, class, type, teacher, and creation date.",
    },
    {
      question: "Is assigning a teacher required?",
      answer:
        "No. The teacher field is optional. Class and subject are required fields when creating homework.",
    },
  ],

  relatedModules: [
    { title: "Academics", slug: "academics" },
    { title: "Teachers", slug: "teachers" },
    { title: "Students", slug: "students" },
  ],
};
