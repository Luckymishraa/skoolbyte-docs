export const leavesContent = {
  title: "Leaves",
  slug: "leaves",
  category: "HR & Attendance",

  overview:
    "The Leaves Module handles time-off requests, tracks leave balances, and manages different types of absences for school staff.",

  purpose:
    "Rather than tracking teacher time-off informally, this module gives School Admins a structured system: define leave types (Casual, Sick, Earned, etc.) once, allocate how many days each teacher gets, then approve or reject requests against that balance — with a full history for auditing.",

  steps: [
    {
      title: "Open Leave Management",
      description:
        'From the sidebar, click Leaves under HR & Attendance. The page has four tabs: Dashboard, Leave Types, Balance, and History, plus a "How it Works" guide.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_mainpage.png",
        alt: "Teacher Leaves Dashboard tab with Pending Requests, Approved This Month, LWP Days, and Active Leave Types cards",
        caption:
          'The Dashboard\'s "Pending Approvals" section shows "All caught up!" when there are no outstanding requests.',
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open the "Leave Management — How it Works" guide, covering Module Overview, Dashboard & Approvals, Configuring Leave Types, Leave Balances, and Pro Tips.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_howitworks.png",
        alt: "Leave Management How it Works guide showing Module Overview page",
        caption:
          "The guide describes Balance Tracking as monitoring how many days each teacher has used.",
      },
    },
    {
      title: "Add a leave type",
      description:
        'Switch to the Leave Types tab and click "Add Leave Type." Fill in Name (e.g. "Casual Leave"), a short Code (e.g. "CL"), Allocation (a number and a period like Yearly), and check "Paid Leave" if it should count as paid time off. Click "Create" to save.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_Add.png",
        alt: "Add Leave Type form with Name Casual Leave, Code CL, Allocation 24 Yearly, and Paid Leave checked",
        caption:
          "This creates the default allocation new teachers get for this leave type — individual teachers can still be adjusted from the Balance tab.",
      },
    },
    {
      title: "Review all configured leave types",
      description:
        'The Leave Types tab lists every type as a card — Name, Code, days/year, and a Paid or Unpaid badge. Common defaults include Casual Leave, Earned Leave, Leave Without Pay, Maternity Leave, Paternity Leave, Sick Leave, and Unpaid Leave. Use "Seed Defaults" to quickly populate these standard types if starting from scratch.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_leavetypemainepage.png",
        alt: "Leave Types tab showing seven leave type cards including Casual Leave, Earned Leave, and Sick Leave",
        caption:
          "PAID types (e.g. Casual, Earned, Sick) count toward salary; UNPAID types (Leave Without Pay, Unpaid Leave) do not.",
      },
    },
    {
      title: "Edit a leave type",
      description:
        'Click the pencil icon on the desired leave type card to open the "Edit Leave Type" modal. Update the Name, Code, Annual Allocation, or Paid Leave status as needed, then click "Save Changes" to apply the updates.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_edit_leavetype.png",
        alt: "Edit Leave Type modal showing fields for Name, Code, Annual Allocation, and Paid Leave",
        caption:
          "Updating the annual allocation changes the default value for future leave balances but does not automatically update existing teacher balances.",
      },
    },
    {
      title: "Delete a leave type",
      description:
        'Click the trash icon on the leave type card you want to remove. A confirmation dialog will appear explaining that teachers will no longer be able to select this leave type. Click "Delete" to permanently remove it.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_delete_leavetype.png",
        alt: "Delete Leave Type confirmation dialog",
        caption:
          "Deleting a leave type is permanent. Make sure it is no longer required before confirming the action.",
      },
    },

    {
      title: "Review leave balances by teacher",
      description:
        'Switch to the Balance tab to see every teacher\'s allocation across all leave type codes (CL, EL, LWP, ML, PL, SL, UL) in one table, along with a Total Balance and a "Manage" button per row.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_balance_main_page.png",
        alt: "Balance tab showing three teachers with per-leave-type day counts and total balance",
        caption:
          "Total Balance sums all leave type allocations for that teacher across the year.",
      },
    },
    {
      title: "Adjust an individual teacher's leave balance",
      description:
        'Click "Manage" on a teacher\'s row in the Balance tab to open "Manage Teacher Leaves." Adjust the day count and period for each leave type individually for that specific teacher — setting a value to 0 removes that leave type for them. Click "Save Changes" to apply.',
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_balance_manage.png",
        alt: "Manage Teacher Leaves modal for Kamalpreet Sharma with per-type day inputs",
        caption:
          'The modal explicitly notes: "Set 0 days to remove a leave type" for that individual teacher.',
      },
    },
    {
      title: "Review leave request history",
      description:
        "Switch to the History tab to see a complete, searchable record of all teacher leave requests — Teacher, Leave Type, Period, Days, Reason, and Status columns. Use the search bar to look up a specific teacher.",
      screenshot: {
        src: "/screenshots/school-admin/leaves/leave_history.png",
        alt: "History tab showing an empty table with a search teacher bar",
        caption:
          '"No records found" is expected until teachers begin submitting leave requests.',
      },
    },
  ],

  bestPractices: [
    'Use "Seed Defaults" when setting up Leave Types for the first time — it\'s faster than manually recreating standard categories like Sick Leave and Maternity Leave.',
    "Adjust individual teacher balances via the Balance tab's \"Manage\" button rather than editing the leave type itself, when only one teacher's allocation needs to change (e.g. a mid-year hire with a prorated balance).",
    "Check the Dashboard regularly for Pending Requests — leave requests don't self-approve and will sit unresolved until reviewed.",
  ],

  commonErrors: [
    {
      issue: "Deleted a leave type that teachers were actively using",
      fix: "This is irreversible once confirmed — always check with affected teachers or review the Balance tab before deleting a leave type that's in active use.",
    },
    {
      issue:
        "A teacher's leave balance looks wrong after editing the leave type",
      fix: 'Editing a leave type changes the default allocation going forward — it does not automatically recalculate existing teacher balances. Adjust the specific teacher\'s balance directly via "Manage" on the Balance tab if needed.',
    },
  ],

  faqs: [
    {
      question:
        "What's the difference between editing a Leave Type and managing a teacher's Balance?",
      answer:
        "Editing a Leave Type (Leave Types tab) changes the default definition — name, code, standard allocation, paid/unpaid status. Managing a teacher's Balance (Balance tab → Manage) adjusts that one teacher's specific day counts without affecting the type's default for everyone else.",
    },
    {
      question: "What does setting a leave type to 0 days for a teacher do?",
      answer:
        "It removes that leave type for that specific teacher only — they'll no longer see it as an option, while other teachers keep their existing allocation.",
    },
    {
      question:
        "Where can I see whether a specific leave request was approved or rejected?",
      answer:
        "Check the History tab — it lists every leave request's Status alongside the Teacher, Leave Type, Period, Days, and Reason.",
    },
  ],

  relatedModules: [
    { title: "Teachers", slug: "teachers" },
    { title: "Attendance", slug: "attendance" },
  ],
};
