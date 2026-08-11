export const calendarContent = {
  title: "Calendar",
  slug: "calendar",
  category: "Academics",

  overview:
    "The Calendar section helps you keep track of important school dates in one place. You can add holidays, exams, meetings, school activities, and other events so that students, teachers, and administrators can easily see what is happening and when.",

  purpose:
    "The Calendar acts as the school's main schedule. Instead of keeping important dates in different places, you can add them to the Calendar so everyone can see the same information. Changes made to the Calendar are also reflected on the student and teacher portals.",

  steps: [
    {
      title: "Open the Calendar",
      description:
        'From the left-side menu, click Calendar. The Calendar opens in a monthly view and shows the events planned for that month. You can see the number of events, switch between Calendar and Grid views, open the "How it Works" guide, and add a new event using the "Add Event" button.',
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_mainpage.png",
        alt: "School Calendar showing events for August 2026",
        caption:
          "The Calendar shows holidays and other school events on their scheduled dates.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" if you need help using the Calendar. The guide explains how to add events, switch between Calendar and Grid views, and understand the different types of events. It also explains how Calendar updates are shared with students and teachers.',
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_howitworks.png",
        alt: "Calendar How it Works guide",
        caption:
          "The guide explains the main Calendar features and how to use them.",
      },
    },

    {
      title: "Add a new event",
      description:
        'Click "Add Event" to create a new school event. Enter the event name and date. You can also select the event type, add a location, and write a description to provide more information. Once the details are complete, click "Create Event" to add it to the Calendar.',
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_Addevent.png",
        alt: "Add Event form for creating a school event",
        caption:
          "Add the event name and date, and provide additional details such as type, location, and description.",
      },
    },

    {
      title: "Choose the event type",
      description:
        "When adding an event, select the type that best describes it, such as Exam, Holiday, Meeting, or Activity. Choosing the correct type makes it easier to understand and identify different events on the Calendar.",
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_Addevent.png",
        alt: "Add Event form showing event type selection",
        caption:
          "Select the appropriate type so the event is easy to identify on the Calendar.",
      },
    },

    {
      title: "Switch between Calendar and Grid view",
      description:
        'Use the "Calendar" and "Grid" buttons at the top-right of the page to change how you view your events. Calendar view shows events on their dates in a monthly calendar. Grid view shows the events in a list, which can be useful when you want to quickly look through several events. In Calendar view, use the left and right arrows to move between months.',
    },
  ],

  bestPractices: [
    "Add important school dates as soon as they are confirmed so students and teachers can see the latest information.",
    "Choose the correct event type so holidays, exams, meetings, and activities are easy to identify.",
    "Add a location and description when an event needs additional information.",
    "Check the Calendar regularly to make sure important dates are correct and up to date.",
    "Use Grid view when you want to quickly review a list of upcoming events.",
  ],

  commonErrors: [
    {
      issue: "An event is not showing on the expected date.",
      fix: "Check the date entered when the event was created. Also make sure you are viewing the correct month by using the left and right arrows.",
    },
    {
      issue: "An event is difficult to identify on the Calendar.",
      fix: "Check that the correct event type was selected when the event was created. Event types help make different kinds of events easier to recognize.",
    },
  ],

  faqs: [
    {
      question: "What can I add to the Calendar?",
      answer:
        "You can add important school events such as exams, holidays, meetings, activities, and other events that students and teachers need to know about.",
    },
    {
      question: "Who can see the events I add?",
      answer:
        "Events added to the Calendar are available to the relevant students, teachers, and administrators through their respective portals.",
    },
    {
      question: "What is the difference between Calendar view and Grid view?",
      answer:
        "Calendar view shows events on a monthly calendar according to their dates. Grid view displays the events as a list, making it easier to quickly review multiple events.",
    },
    {
      question: "Do I need to publish an event separately?",
      answer:
        "No. Once an event is created, the Calendar information is reflected on the relevant student and teacher portals.",
    },
    {
      question: "Can I see events from different months?",
      answer:
        "Yes. In Calendar view, use the left and right arrows to move between months and view events scheduled for different dates.",
    },
  ],

  relatedModules: [
    { title: "Academics", slug: "academics" },
    { title: "Home Work", slug: "assignments" },
  ],
};
