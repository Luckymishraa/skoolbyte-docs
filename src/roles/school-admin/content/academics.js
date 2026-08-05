export const academicsContent = {
  title: "Academics",
  slug: "academics",
  category: "Academics",

  overview:
    "The Academics Module is the most critical part of the ERP — it defines the structure of your school: Classes, Sections, Subjects, and Academic Years. Everything else in the ERP depends on the setup here.",

  purpose:
    "This is where the school's academic skeleton is built, in order: Academic Year → Classes & Sections → Subject Allocation → Class Teachers → Timetable → Periods & Days → Promotion. Getting this hierarchy right first is what makes Attendance, Fees, Homework, and every other class-linked module work correctly.",

  steps: [
    {
      title: "Open Academic Management",
      description:
        "From the sidebar, click Academics under Academics. The page shows the Current Year and nine tabs, scrollable with left/right arrows: Academic Year, Classes, Sections, Subjects, Subject Allocation, Class Teachers, Timetable, Periods & Days, and Promotion.",
      screenshot: {
        src: "/screenshots/school/academics-main.png",
        alt: "Academic Management page showing tab navigation and Current Year 2026-27",
        caption:
          "The tab bar scrolls — use the arrow buttons on either side to see all nine sections.",
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open the "Academics Module — How it Works" guide, covering Module Overview, Setup Hierarchy, Classes & Sections, Subjects & Allocation, Timetable Builder, Student Promotion, and Pro Tips.',
      screenshot: {
        src: "/screenshots/school/academics-how-it-works.png",
        alt: "Academics Module How it Works guide showing Module Overview with Classes & Sections, Subject Mapping, Timetable, and Promotions cards",
        caption:
          "The guide frames the setup order as: Classes & Sections → Subject Mapping → Timetable → Promotions.",
      },
    },
    {
      title: "Manage Academic Years",
      description:
        'On the Academic Year tab, view all configured years as cards (Start Date, End Date, Status — Active or Upcoming). Click "+ Add Year" to open "Add Academic Year": enter Year Name* (e.g. "2025-26"), Start Date*, End Date*, and Status. An upcoming year can later be made current via "Set Active."',
      screenshot: {
        src: "/screenshots/school/academics-year-list.png",
        alt: "Academic Years tab showing 2027-28 Upcoming and 2026-27 Active cards",
        caption:
          "Only one academic year is Active at a time — the others show as Upcoming or past.",
      },
    },
    {
      title: "Create and organize Classes",
      description:
        'Switch to the Classes tab to see the Class & Section Hierarchy — each class card shows its section count, capacity, and assigned class teacher. Click "+ Add Class" to open a form: Class Name* (dropdown, e.g. "Nursery (Pre-Nursery)"), Display Name, Class Teacher, Sections (on create — e.g. "B"), and Capacity.',
      screenshot: {
        src: "/screenshots/school/academics-classes-hierarchy.png",
        alt: "Class & Section Hierarchy showing Class 1, Class 2, LKG, Pre-Nursery, and UKG cards",
        caption:
          "6 classes configured — each shows how many sections exist under it and total capacity.",
      },
    },
    {
      title: "Edit or delete a class",
      description:
        'Click the pencil icon on a class card to open "Edit Class" and update its Class Name, Display Name, Class Teacher, Sections, or Capacity, then "Update." Click the trash icon to delete — a confirmation warns this permanently removes the data.',
      screenshot: {
        src: "/screenshots/school/academics-edit-class-modal.png",
        alt: "Edit Class modal for Class 2 with Display Name, Class Teacher, Sections, and Capacity fields",
        caption:
          "Deleting a class is irreversible — check its section and student counts first.",
      },
    },
    {
      title: "Manage Sections",
      description:
        'Switch to the Sections tab to see every section as a card (e.g. "Class 1 - A"), showing enrollment vs. max strength (e.g. "0/40"), assigned teacher, and Room No. Click "+ Add Section" to open a form: Class*, Section Name*, Max Strength, Class Teacher, and Room Number.',
      screenshot: {
        src: "/screenshots/school/academics-sections-list.png",
        alt: "Section Management grid showing Class 1-A, Class 1-B, Class 2-A, LKG-A, Nursery-A, and Pre-Nursery-B cards",
        caption:
          '"No teacher assigned" appears until a class teacher is set for that specific section.',
      },
    },
    {
      title: "Add or edit a section",
      description:
        'Fill in the "Add Section" form (Class, Section Name, Max Strength, Class Teacher, Room Number) and click "Save." Use the pencil icon on an existing section card to open "Edit Section" with the same fields pre-filled, then "Update."',
      screenshot: {
        src: "/screenshots/school/academics-add-section-form.png",
        alt: "Add Section form with Class 1, Section Name B, Max Strength 40, Class Teacher, and Room Number R-101",
        caption:
          "A section's Class Teacher here is independent from that class's overall Class Teacher on the Classes tab — sections can have their own.",
      },
    },
    {
      title: "Review Subjects",
      description:
        'Switch to the Subjects tab — labeled "Subjects (Managed by Super Admin)." This is a read-only view of the master subject list (Class, Subject, Code, Type, Curriculum preview, Contents count, Status) — the same data set up centrally by the Super Admin.',
      screenshot: {
        src: "/screenshots/school/academics-subjects-list.png",
        alt: "Subjects tab showing General Knowledge, Science, Mathematics, and English rows across different classes",
        caption:
          'The "Managed by Super Admin" label is a hint — subjects themselves aren\'t created here.',
      },
    },
    {
      title: "Allocate a subject to a class-section and teacher",
      description:
        'Switch to the Subject Allocation tab to see a table of Class/Section/Subject/Teacher combinations. Click "+ Allocate Subject" to open a form: Class - Section* (e.g. "Class 2 - A"), Subject*, Teacher, and Periods Per Week. This is what actually assigns who teaches what, to which section.',
      screenshot: {
        src: "/screenshots/school/academics-allocate-subject-form.png",
        alt: "Allocate Subject form with Class 2 - A, Science, Rekha Verma, and 5 Periods Per Week",
        caption:
          "Periods Per Week here feeds directly into how many timetable slots that subject can be scheduled.",
      },
    },
    {
      title: "Edit a subject allocation",
      description:
        'Click the pencil icon on an allocation row to open "Edit Allocation" — update Class - Section, Subject, Teacher, or Periods Per Week, then click "Update."',
      screenshot: {
        src: "/screenshots/school/academics-edit-allocation-modal.png",
        alt: "Edit Allocation modal for Class 1 - A, General Knowledge, Kamalpreet Sharma, 5 periods per week",
        caption:
          "Changing the Teacher here reassigns who's responsible for that subject in that section going forward.",
      },
    },
    {
      title: "Assign Class Teachers",
      description:
        'Switch to the Class Teachers tab to see each teacher with their Class Teacher (whole-class) and Section Teacher (specific section) assignments, plus a total Assignments count. Click "+ Assign Teacher" to open a form: Assignment Type* (e.g. "Class Teacher"), Teacher*, and Class*.',
      screenshot: {
        src: "/screenshots/school/academics-class-teachers-list.png",
        alt: "Class Teacher tab showing Sushmita Mehra with 2 Assignments (Class 2 as Class Teacher, Class 1-B as Section Teacher)",
        caption:
          "A teacher can hold both a Class Teacher role and separate Section Teacher roles simultaneously.",
      },
    },
    {
      title: "Build the Timetable",
      description:
        'Switch to the Timetable tab, select a Class and Section, then view the weekly grid (Days × Periods). Click "Edit" to enter edit mode, then click any empty "+ Assign" slot to open "Assign Subject" — pick a subject/teacher pairing from those already allocated, or "Clear Slot" to remove one. Click "Save" to apply changes, "Cancel" to discard, or "Export PDF" to download.',
      screenshot: {
        src: "/screenshots/school/academics-timetable-edit-mode.png",
        alt: "Timetable Management in edit mode for Class 1-A with General Knowledge assigned across Monday-Thursday Period 1",
        caption:
          'Edit mode shows "Cancel" and "Save" buttons; view mode (after saving) shows "Edit" and "Export PDF" instead.',
      },
    },
    {
      title: "Assign a subject to a timetable slot",
      description:
        'Clicking "+ Assign" on a slot opens "Assign Subject" for that Day and time — showing "Clear Slot" (remove current assignment) plus a list of subjects already allocated to that class-section (via Subject Allocation), each showing the teacher and periods/week.',
      screenshot: {
        src: "/screenshots/school/academics-assign-subject-modal.png",
        alt: "Assign Subject modal for Monday 09:10 showing Clear Slot and General Knowledge with Kamalpreet Sharma, 5 pds/wk",
        caption:
          "Only subjects already set up via Subject Allocation appear here — allocate the subject first if it's missing.",
      },
    },
    {
      title: "Configure Periods & Working Days",
      description:
        'Switch to the Periods & Days tab. The Period Schedule lists every period (Assembly, Period 1-6, Short Break, Lunch Break) with times, editable/deletable via the pencil/trash icons. Click "+ Add Period" to open a form: Period Name*, Start Time*, End Time*, Type (e.g. Class), and Sequence. Working Days on the right lets you toggle Monday–Saturday on/off.',
      screenshot: {
        src: "/screenshots/school/academics-periods-days.png",
        alt: "Period & Working Days Setup showing Assembly through Period 6 with times, and Monday-Saturday toggles all enabled",
        caption:
          "Disabling a Working Day here (e.g. turning off Saturday) removes it as a schedulable day across the Timetable.",
      },
    },
    {
      title: "Promote students to the next class",
      description:
        'Switch to the Promotion tab for the 3-step Promotion & Class Progression flow. Step 1 (Select Source): choose a From Class and Section, then "Fetch Students." Step 2 (Select Students): check which fetched students to promote. Step 3 (Promote To): choose a Target Class and Section, review the Summary (Total Selected, Move To), then click "Promote Students."',
      screenshot: {
        src: "/screenshots/school/academics-promotion-flow.png",
        alt: "Promotion & Class Progression showing Class 1-A students Riya Kumari and Aniket Mehra being moved to Class 2-A",
        caption:
          "This is typically run once per year, at the end of the academic session, before setting the next year Active.",
      },
    },
  ],

  bestPractices: [
    "Follow the setup order the How it Works guide suggests: Academic Year → Classes & Sections → Subject Allocation → Class Teachers → Timetable → Periods & Days — each step depends on the one before it.",
    "Confirm a subject is allocated (Subject Allocation tab) before trying to place it on the Timetable — unallocated subjects won't appear in the Assign Subject picker.",
    "Run Student Promotion only after finalizing the current year's records — once students move to the next class, historical class-wise reports reflect their new placement.",
    "Keep Working Days accurate on the Periods & Days tab — a day left enabled that the school doesn't actually operate on will still appear as a schedulable day in the Timetable.",
  ],

  commonErrors: [
    {
      issue:
        "A subject doesn't appear when trying to assign it on the Timetable",
      fix: "Check Subject Allocation first — a subject must be allocated to that specific class-section (with a teacher and periods/week) before it can be placed into a timetable slot.",
    },
    {
      issue: "Deleted a class or section by mistake",
      fix: "This is irreversible — both actions show a confirmation warning that the data will be permanently removed, so double-check before confirming.",
    },
    {
      issue: "Promoted the wrong group of students",
      fix: 'Carefully review the Summary (Total Selected, Move To) in Step 3 before clicking "Promote Students" — verify the correct students are checked in Step 2.',
    },
  ],

  faqs: [
    {
      question: "Why can't I edit subjects directly from the Academics module?",
      answer:
        'Subjects are managed centrally by the Super Admin at the platform level — the Subjects tab here (labeled "Managed by Super Admin") is a read-only view of that master list.',
    },
    {
      question:
        "What's the difference between a class's Class Teacher and a section's Class Teacher?",
      answer:
        "A class-level Class Teacher (set on the Classes tab) is distinct from a Section Teacher (set on the Sections tab or via the Class Teachers tab) — a teacher can hold both roles for different classes/sections at once.",
    },
    {
      question:
        "Does Student Promotion delete the students' history in their old class?",
      answer:
        "Promotion moves students to a new Target Class and Section — check your Students module afterward to confirm historical records (fees, attendance) remain tied to the correct academic year rather than being lost.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Teacher", slug: "teacher" },
    { title: "Fees", slug: "fees" },
  ],
};
