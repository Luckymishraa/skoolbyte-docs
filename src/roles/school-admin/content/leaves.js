export const leavesContent = {
  title: "Leaves",
  slug: "leaves",
  category: "HR & Attendance",

  overview:
    "The Leaves section helps you manage teacher leave requests. You can create different types of leave, set how many days teachers can take, review leave balances, approve or reject requests, and check past leave records.",

  purpose:
    "Use this section to keep teacher leave information organized. You can decide which types of leave are available, set the number of days each teacher can take, review leave requests, and keep a record of all approved and rejected leaves.",

  steps: [
    {
      title: "Open Leave Management",
      description:
        'From the left-side menu, click Leaves. You will see four sections: Dashboard, Leave Types, Balance, and History. You can also click "How it Works" for a guide explaining how to manage teacher leaves.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_mainpage.png",
        alt: "Teacher Leaves Dashboard showing leave requests and leave information",
        caption:
          "The Leave Dashboard gives you a quick view of pending requests and teacher leave information.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" to open the Leave Management guide. It explains how to manage leave requests, create leave types, set teacher leave balances, and review leave information.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_howitworks.png",
        alt: "Leave Management How it Works guide",
        caption:
          "Use the guide if you need help understanding the different leave management features.",
      },
    },

    {
      title: "Add a new leave type",
      description:
        'Open the Leave Types section and click "Add Leave Type". Enter the leave name, a short code, and the number of days teachers can take. Choose whether the leave is paid or unpaid. For example, you can create "Casual Leave" with the code "CL" and a yearly allowance of 24 days. Click "Create" to save the leave type.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_Add.png",
        alt: "Add Leave Type form showing Casual Leave details",
        caption:
          "Create a leave type and set the number of days teachers can take each year.",
      },
    },

    {
      title: "View available leave types",
      description:
        'The Leave Types section shows all the types of leave available in the school. You can see the leave name, short code, number of days available, and whether the leave is paid or unpaid. If you are setting up the system for the first time, use "Seed Defaults" to add common leave types such as Casual Leave, Sick Leave, Earned Leave, Maternity Leave, and Unpaid Leave.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_leavetypemainepage.png",
        alt: "Leave Types section showing different types of teacher leave",
        caption:
          "Review all available leave types and see whether each type is paid or unpaid.",
      },
    },

    {
      title: "Edit a leave type",
      description:
        'Click the pencil icon next to a leave type to change its information. You can update the name, short code, number of days, or whether the leave is paid. Click "Save Changes" when you are finished.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_edit_leavetype.png",
        alt: "Edit Leave Type form",
        caption: "Update a leave type when the school's leave policy changes.",
      },
    },

    {
      title: "Delete a leave type",
      description:
        'If a leave type is no longer needed, click the trash icon next to it. A confirmation message will appear. Click "Delete" only if you are sure, because deleting a leave type cannot be undone.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_delete_leavetype.png",
        alt: "Delete Leave Type confirmation message",
        caption:
          "Check carefully before deleting a leave type because the action is permanent.",
      },
    },

    {
      title: "Check teacher leave balances",
      description:
        "Open the Balance section to see how many leave days each teacher has available. The list shows the number of days available for different types of leave and the teacher's total balance.",
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_balance_main_page.png",
        alt: "Teacher Leave Balance section showing leave days",
        caption:
          "The Balance section lets you check how many leave days each teacher has available.",
      },
    },

    {
      title: "Adjust a teacher's leave balance",
      description:
        'Click "Manage" next to a teacher to change their individual leave balance. You can adjust the number of days available for each type of leave. If you set a leave type to 0 days, that leave will no longer be available to that teacher. Click "Save Changes" after making the changes.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_balance_manage.png",
        alt: "Manage Teacher Leaves form showing individual leave balances",
        caption:
          "You can change the leave balance for one teacher without changing it for other teachers.",
      },
    },

    {
      title: "Review leave history",
      description:
        "Open the History section to see previous teacher leave requests. You can check the teacher's name, type of leave, number of days, reason, period, and whether the request was approved or rejected. Use the search box to find a specific teacher.",
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_history.png",
        alt: "Leave History section showing teacher leave records",
        caption:
          "The History section keeps a record of teacher leave requests and their status.",
      },
    },

    {
      title: "Review pending leave requests",
      description:
        "Check the Dashboard regularly for leave requests that are waiting for approval. Review the teacher's request and decide whether to approve or reject it. Requests remain pending until a School Admin reviews them.",
    },
  ],

  bestPractices: [
    'Use "Seed Defaults" when setting up the Leaves section for the first time to quickly add common leave types.',
    "Check teacher leave balances regularly to make sure the available days are correct.",
    "Review pending leave requests regularly so teachers do not have to wait unnecessarily for a decision.",
    "Change an individual teacher's balance from the Balance section instead of changing the general leave type when only one teacher's allowance needs to be changed.",
    "Keep the leave types and their paid or unpaid status aligned with your school's leave policy.",
  ],

  commonErrors: [
    {
      issue: "A leave type was deleted by mistake.",
      fix: 'Deleted leave types cannot be restored. Check carefully before confirming a deletion. If it was a standard leave type, use "Seed Defaults" if available or create the leave type again manually.',
    },
    {
      issue:
        "A teacher's leave balance is incorrect after changing a leave type.",
      fix: 'Changing a leave type does not automatically change the existing balance of every teacher. Open the Balance section, click "Manage" for the teacher, and adjust their individual balance.',
    },
    {
      issue: "A leave request is still showing as pending.",
      fix: "Leave requests do not get approved automatically. Open the Dashboard and review the pending request before approving or rejecting it.",
    },
  ],

  faqs: [
    {
      question: "What can I manage in the Leaves section?",
      answer:
        "You can create leave types, set the number of leave days available to teachers, adjust individual teacher balances, review pending requests, and check leave history.",
    },
    {
      question:
        "What is the difference between a Leave Type and a teacher's Leave Balance?",
      answer:
        "A Leave Type defines the general leave rule, such as Casual Leave with 24 days per year. A teacher's Leave Balance shows how many days that specific teacher has available.",
    },
    {
      question: "Can I give one teacher a different number of leave days?",
      answer:
        'Yes. Open the Balance section, click "Manage" next to the teacher, and change their individual leave balance without changing the balance for other teachers.',
    },
    {
      question: "What happens if I set a leave type to 0 days for a teacher?",
      answer:
        "That leave type will no longer be available to that specific teacher. Other teachers will keep their existing leave balances.",
    },
    {
      question:
        "Where can I see whether a leave request was approved or rejected?",
      answer:
        "Open the History section. It shows previous leave requests along with their status, leave type, number of days, teacher, and reason.",
    },
    {
      question: "Do leave requests get approved automatically?",
      answer:
        "No. Leave requests remain pending until a School Admin reviews and approves or rejects them.",
    },
  ],

  relatedModules: [
    { title: "Teachers", slug: "teachers" },
    { title: "Attendance", slug: "attendance" },
  ],
};
