export const academicsContent = {
  title: "Academics",
  slug: "academics",
  category: "Academics",

  overview:
    "The Academics section is where you set up and manage the basic academic structure of your school. You can manage academic years, classes, sections, subjects, teachers, timetables, school periods, working days, and student promotions from one place.",

  purpose:
    "Use this section to set up how your school is organized for each academic year. Start by setting the academic year, then create classes and sections, assign subjects and teachers, set up the timetable, define school days and periods, and finally promote students to their next class at the end of the year.",

  steps: [
    {
      title: "Open Academic Management",
      description:
        "From the left-side menu, click Academics. You will see the current academic year and different sections for managing your school's academic information. These include Academic Year, Classes, Sections, Subjects, Subject Allocation, Class Teachers, Timetable, Periods & Days, and Promotion. If you cannot see all the sections, use the arrow buttons to move through the list.",
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_mainpage.png",
        alt: "Academic Management page showing the different academic sections",
        caption:
          "Academic Management brings all the school's academic settings together in one place.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" if you need help understanding the Academics section. The guide explains how to set up classes and sections, subjects, teachers, timetables, and student promotions. It also explains the recommended order for setting everything up.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_hoeitworks.png",
        alt: "Academics How it Works guide",
        caption:
          "The guide explains the main steps for setting up your school's academic information.",
      },
    },

    {
      title: "Set up Academic Years",
      description:
        'Open the Academic Year tab to see the academic years already added. Each year shows its start date, end date, and status. To add a new year, click "+ Add Year" and enter the year name, start date, end date, and status. When you are ready to use a future academic year, you can make it active by clicking "Set Active."',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_Add.png",
        alt: "Academic Years showing active and upcoming academic years",
        caption:
          "You can see which academic year is currently active and which years are coming next.",
      },
    },

    {
      title: "Create Classes",
      description:
        'Open the Classes tab to see all the classes in your school. Each class shows the number of sections, student capacity, and assigned class teacher. To add a new class, click "+ Add Class" and enter the class name, display name, class teacher, sections, and student capacity.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_add_classes.png",
        alt: "Class and Section list showing different classes",
        caption:
          "Each class shows its sections, student capacity, and assigned teacher.",
      },
    },

    {
      title: "Edit a Class",
      description:
        'If you need to change class information, click the pencil icon on the class. You can update the class name, display name, class teacher, sections, or student capacity. Click "Update" after making your changes.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_classes_ediclass.png",
        alt: "Edit Class form",
        caption:
          "Update class information whenever details such as the teacher or capacity change.",
      },
    },

    {
      title: "Delete a Class",
      description:
        'If a class is no longer needed, click the trash icon on the class. A confirmation message will appear. Check the class details carefully before clicking "Delete" because deleting a class cannot be undone.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_classes_deleteclass.png",
        alt: "Delete Class confirmation message",
        caption:
          "Check the class carefully before deleting it because the action cannot be undone.",
      },
    },

    {
      title: "Manage Sections",
      description:
        'Open the Sections tab to see the sections created under each class, such as "Class 1 - A" or "Class 1 - B". Each section shows the number of students, maximum student capacity, assigned teacher, and room number. To create a new section, click "+ Add Section" and enter the class, section name, maximum number of students, class teacher, and room number.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_section_maipage.png",
        alt: "Section Management showing sections for different classes",
        caption:
          "Each section belongs to a class and can have its own teacher and classroom.",
      },
    },

    {
      title: "Add a Section",
      description:
        'Click "+ Add Section" and enter the required information: Class, Section Name, Maximum Students, Class Teacher, and Room Number. Once everything is filled in, click "Save" to create the section.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_section_addsection.png",
        alt: "Add Section form",
        caption:
          "Add the class, section name, student capacity, teacher, and room before saving.",
      },
    },

    {
      title: "Edit a Section",
      description:
        'Click the pencil icon on a section to change its information. You can update the class, section name, maximum number of students, class teacher, or room number. Click "Update" to save the changes.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_section_editsection.png",
        alt: "Edit Section form",
        caption: "Keep section information updated whenever there are changes.",
      },
    },

    {
      title: "Delete a Section",
      description:
        'To remove a section, click the trash icon on the section. You will be asked to confirm the deletion. Check the section carefully and click "Delete" only if you are sure. Deleting a section cannot be undone.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_section_deletesection.png",
        alt: "Delete Section confirmation message",
        caption:
          "Make sure the section is no longer needed before deleting it.",
      },
    },
    {
      title: "View Subjects",
      description:
        "Open the Subjects tab to see the subjects available for different classes. You can view information such as the class, subject name, subject code, subject type, and status. Subjects are managed by the Super Admin, so they cannot be created or edited from this section.",
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_subject.png",
        alt: "Subjects list showing subjects for different classes",
        caption:
          "The Subjects section lets you view the subjects available for your school.",
      },
    },
    {
      title: "Assign Subjects to Classes",
      description:
        'Open Subject Allocation to decide which subjects are taught to which class and section, and which teacher will teach them. Click "+ Allocate Subject" and select the class and section, subject, teacher, and number of periods per week. This information is then used when creating the timetable.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_allocatesubjet_add.png",
        alt: "Allocate Subject form",
        caption:
          "Assign a subject and teacher to a specific class and section.",
      },
    },

    {
      title: "Edit a Subject Assignment",
      description:
        'Click the pencil icon next to an existing subject assignment to make changes. You can change the class and section, subject, teacher, or number of periods per week. Click "Update" to save the changes.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_allocatesubject_edit.png",
        alt: "Edit Subject Assignment form",
        caption:
          "You can change the teacher or other subject details whenever needed.",
      },
    },

    {
      title: "Assign Class Teachers",
      description:
        'Open the Class Teachers tab to see which teachers are responsible for each class or section. Click "+ Assign Teacher" to assign a teacher. Select the type of assignment, teacher, and class. A teacher can be responsible for a complete class or a specific section.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_Classteacher_mainpage.png",
        alt: "Class Teachers section showing teacher assignments",
        caption:
          "Assign teachers to classes or specific sections according to your school's requirements.",
      },
    },

    {
      title: "Create the Timetable",
      description:
        'Open the Timetable tab and select a class and section to view its weekly timetable. Click "Edit" when you want to make changes. You can add subjects to empty time slots, remove existing subjects, and save your changes. You can also export the completed timetable as a PDF.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_timetable_mainpage.png",
        alt: "Timetable for a class and section",
        caption:
          "Create and manage the weekly timetable for each class and section.",
      },
    },

    {
      title: "Add a Subject to the Timetable",
      description:
        'Click "+ Assign" in an empty timetable slot to choose a subject and teacher. Only subjects that have already been assigned to that class and section in Subject Allocation will be available. If a subject is missing, add it to Subject Allocation first.',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_timetable_assign.png",
        alt: "Assign Subject to a timetable slot",
        caption:
          "Choose an already assigned subject and teacher for each timetable slot.",
      },
    },

    {
      title: "Set School Periods and Working Days",
      description:
        "Open Periods & Days to set the school's daily schedule. You can add or edit periods such as Assembly, classes, Short Break, and Lunch Break by entering their names and start and end times. You can also choose which days of the week the school operates, such as Monday to Saturday.",
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_periodsday_aminpage.png",
        alt: "Periods and Working Days settings",
        caption:
          "Set the school's daily periods and choose which days the school operates.",
      },
    },

    {
      title: "Promote Students to the Next Class",
      description:
        'At the end of the academic year, use the Promotion tab to move students to their next class. First, select the current class and section and fetch the students. Then select the students who should be promoted. Finally, choose the new class and section, review the details, and click "Promote Students."',
      screenshot: {
        src: "/screenshots/school-admin/academics/academic_promotion_add.png",
        alt: "Student Promotion showing students moving to the next class",
        caption:
          "Review the selected students and their new class carefully before confirming the promotion.",
      },
    },
  ],

  bestPractices: [
    "Set up the academic year first, followed by classes, sections, subjects, teachers, and the timetable.",
    "Assign subjects to a class and section before trying to add them to the timetable.",
    "Check all student details carefully before promoting students to the next class.",
    "Keep the school's working days and daily periods updated so the timetable matches the actual school schedule.",
    "Review class and section information regularly to make sure teachers, rooms, and student capacity are correct.",
  ],

  commonErrors: [
    {
      issue: "A subject is not available when creating the timetable.",
      fix: "Open Subject Allocation and check that the subject has been assigned to the correct class and section. A subject must be assigned there before it can be added to the timetable.",
    },
    {
      issue: "A class or section was deleted by mistake.",
      fix: "Deleting a class or section cannot be undone. Always check the details carefully before confirming the deletion.",
    },
    {
      issue: "The wrong students were selected for promotion.",
      fix: 'Before clicking "Promote Students," check the selected students and make sure the correct new class and section are shown.',
    },
  ],

  faqs: [
    {
      question: "What can I manage from the Academics section?",
      answer:
        "You can manage academic years, classes, sections, subjects, teacher assignments, timetables, school periods, working days, and student promotions.",
    },
    {
      question: "Can I create or edit subjects?",
      answer:
        "No. Subjects are managed by the Super Admin. You can view the available subjects and assign them to classes, sections, and teachers.",
    },
    {
      question: "What is the difference between a Class and a Section?",
      answer:
        "A class is the main level, such as Class 1 or Class 2. A section is a smaller group within that class, such as Class 1-A or Class 1-B.",
    },
    {
      question:
        "Why do I need to assign a subject before adding it to the timetable?",
      answer:
        "Subject Allocation tells the system which subjects are taught to each class and section and which teacher is responsible for them. Only these assigned subjects can be added to the timetable.",
    },
    {
      question: "What is student promotion used for?",
      answer:
        "Student Promotion is used at the end of the academic year to move students from their current class to the next class.",
    },
    {
      question: "Can I undo a student promotion?",
      answer:
        "The promotion process moves the selected students to the new class and section. Always review the selected students and destination class carefully before confirming the promotion.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Teachers", slug: "teachers" },
    { title: "Fees", slug: "fees" },
  ],
};
