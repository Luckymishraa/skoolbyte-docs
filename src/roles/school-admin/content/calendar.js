export const calendarContent = {
  title: "Calendar",
  slug: "calendar",
  category: "Academics",

  overview:
    "The Calendar Module is the central hub for scheduling all school-wide activities, exams, holidays, and meetings. Events added here are immediately visible to all relevant stakeholders (Students, Teachers, and Admins).",

  purpose:
    "This is the single master schedule for the academic year — rather than each module or teacher maintaining separate dates, the Calendar keeps holidays, exams, meetings, and activities in one shared place that reflects in real time on student and teacher portals.",

  steps: [
    {
      title: "Open the Calendar",
      description:
        'From the sidebar, click Calendar under Academics. The page shows a month grid by default, an event count for the month (e.g. "2 events this month"), a "How it Works" guide, a Calendar/Grid view toggle, and an "Add Event" button.',
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_mainpage.png",
        alt: "Calendar page for August 2026 with Independence Day and Annual Function events shown",
        caption:
          "Holidays and events are color-coded on the day they fall — red for holidays, green for activities in this example.",
      },
    },
    {
      title: "Use the built-in How it Works guide",
      description:
        'Click "How it Works" to open the "Calendar Module — How it Works" guide, covering Module Overview, Adding Events, Calendar vs Grid View, Event Types & Colors, and Pro Tips.',
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_howitworks.png",
        alt: "Calendar Module How it Works guide showing Module Overview with School Calendar, Event Types, Dual Views, and Real-time Updates cards",
        caption:
          'The guide notes: "Changes reflect instantly on student/teacher portals" — no separate publish step needed.',
      },
    },
    {
      title: "Add an event",
      description:
        'Click "Add Event" to open the "Add Event" form. Fill in Title*, Date*, Type (dropdown, e.g. Activity), Location, and Description, then click "Create Event."',
      screenshot: {
        src: "/screenshots/school-admin/calender/calender_Addevent.png",
        alt: "Add Event form with Title Annual Function, Date 31/08/2026, Type Activity, Location School Campus, Description",
        caption:
          "Required fields are Title and Date — Type, Location, and Description are optional context.",
      },
    },
    {
      title: "Switch between Calendar and Grid view",
      description:
        'Use the "Calendar" / "Grid" toggle buttons in the top-right to switch between the monthly calendar layout and a list/grid layout of events. Use the left/right arrows to navigate between months in Calendar view.',
    },
  ],

  bestPractices: [
    "Set the correct Type for each event (e.g. Exam, Holiday, Meeting, Activity) — the How it Works guide notes event types are used for categorization and color-coding, which helps staff and parents scan the calendar quickly.",
    "Add events as soon as they're confirmed — since changes reflect instantly on student and teacher portals, this is the fastest way to keep the whole school aligned on dates without separate announcements.",
  ],

  commonErrors: [
    {
      issue: "An event doesn't appear on the calendar day I expected",
      fix: "Double-check the Date field when creating the event — confirm you're viewing the correct month using the left/right navigation arrows.",
    },
  ],

  faqs: [
    {
      question: "Who can see events added to the Calendar?",
      answer:
        "Events are immediately visible to all relevant stakeholders — Students, Teachers, and Admins — through their respective portals.",
    },
    {
      question: "What's the difference between Calendar view and Grid view?",
      answer:
        "Calendar view shows a traditional monthly grid with events placed on their dates. Grid view presents events as a list, which can be easier for scanning many events at once.",
    },
  ],

  relatedModules: [
    { title: "Academics", slug: "academics" },
    { title: "Home Work", slug: "assignments" },
  ],
};
