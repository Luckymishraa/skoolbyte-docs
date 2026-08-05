export const transportContent = {
  title: "Transport",
  slug: "transport",
  category: "Operations",

  overview:
    "Transport Management is where School Admins manage the entire school transport system — vehicles, drivers and helpers, routes with stops, and which students are assigned to which route.",

  purpose:
    "Transport ties together four connected pieces (vehicle → driver → route → student) into one module, so assigning a student to a bus is a matter of picking an existing route and stop rather than re-entering vehicle or driver details each time.",

  steps: [
    {
      title: "Open Transport Management",
      description:
        'From the sidebar, click Transport under Operations. The page has five tabs: Dashboard, Vehicles, Drivers, Routes, and Students, plus a "How it Works" guide and a refresh button.',
      screenshot: {
        src: "/screenshots/school/transport-dashboard.png",
        alt: "Transport Management Dashboard tab with Total Vehicles, Drivers & Helpers, Active Routes, and Students stat cards",
        caption: "The Dashboard also shows a Fleet Overview listing each vehicle with its assigned driver, helper, and route.",
      },
    },
    {
      title: "Add a vehicle",
      description:
        'Switch to the Vehicles tab and click "Add Vehicle." Each vehicle card shows its number, type (e.g. bus), seat capacity, fuel type (e.g. cng, diesel), status, and any assigned driver/route — the trash icon removes a vehicle.',
      screenshot: {
        src: "/screenshots/school/transport-vehicles-list.png",
        alt: "Vehicles tab showing two active buses, 2222 and 1111, with driver and route tags",
        caption: "Vehicle 2222 is already linked to driver Ramesh and Route 2 Gurgaon; 1111 has a driver but no route yet.",
      },
    },
    {
      title: "Add a driver or helper",
      description:
        'Switch to the Drivers tab and click "Add Driver / Helper." Fill in Name*, Phone*, Role (Driver or Helper), and optionally Assign to Vehicle right away. Click "Add" to save.',
      screenshot: {
        src: "/screenshots/school/transport-add-driver-form.png",
        alt: "Add Driver / Helper form with Name, Phone, Role, and Assign to Vehicle fields",
        caption: "Assigning a vehicle here is optional — a driver can be added first and linked to a vehicle later.",
      },
    },
    {
      title: "View drivers and helpers",
      description:
        'The Drivers tab lists everyone added, each showing their name, phone number, role badge (Driver/Helper), and any vehicle they\'re currently linked to.',
      screenshot: {
        src: "/screenshots/school/transport-drivers-list.png",
        alt: "Drivers & Helpers tab showing Kamal linked to vehicle 1111 and Ramesh linked to vehicle 2222",
        caption: "Each driver card shows a chip for their assigned vehicle number, if one exists.",
      },
    },
    {
      title: "Create a route",
      description:
        'Switch to the Routes tab and click "Add Route." Enter a Route Name*, then add one or more Stops — each stop has a name, a pickup time, and a fee amount (₹). Use "+ Add Stop" for multi-stop routes, then click "Create Route."',
      screenshot: {
        src: "/screenshots/school/transport-add-route-form.png",
        alt: "Create Route form with Route Name and one stop: Chhaterpur bus station at 08:20, ₹1500",
        caption: "Each stop's fee (₹) is what gets charged when a student is assigned to it.",
      },
    },
    {
      title: "Assign a vehicle to a route",
      description:
        'On the Routes tab, expand a route and click "Assign Vehicle." Choose a Vehicle* from the dropdown and optionally a Driver, then click "Assign Vehicle" to confirm.',
      screenshot: {
        src: "/screenshots/school/transport-assign-vehicle-modal.png",
        alt: "Assign Vehicle to Route modal for Route 2 Gurgaon with vehicle and driver dropdowns",
        caption: "A route only becomes usable for student assignment once a vehicle is linked to it.",
      },
    },
    {
      title: "Edit or delete a route",
      description:
        'From the expanded route view, click "Edit Route" to update the route name or its stops (times and fees), or "Delete Route" to remove it — confirm in the "Delete Route" dialog, which cannot be undone.',
      screenshot: {
        src: "/screenshots/school/transport-edit-route-modal.png",
        alt: "Edit Route modal for Route 2 Gurgaon with a stop for Dlf phase 2 at 07:30, ₹2000",
        caption: "Editing a stop's fee here changes what future student assignments to that stop will be charged.",
      },
    },
    {
      title: "Assign a student to transport",
      description:
        'Switch to the Students tab and click "Assign Student." Select a Class*, then a Student*, a Route*, a Stop* (shown with its time and fee), and a Trip Type (e.g. Both — Pickup & Drop). Click "Assign Student" to confirm.',
      screenshot: {
        src: "/screenshots/school/transport-assign-student-modal.png",
        alt: "Assign Student to Transport modal for Aman Sharma, Route 2 Gurgaon, Dlf phase 2 stop",
        caption: "The Select Stop dropdown shows each stop's time and fare (e.g. \"07:30 - ₹2000\") to confirm before assigning.",
      },
    },
    {
      title: "Unassign a student from transport",
      description:
        'On the Students tab, click the trash icon on a student\'s row. Confirm in the "Unassign Student" dialog — this action cannot be undone.',
      screenshot: {
        src: "/screenshots/school/transport-unassign-student-confirm.png",
        alt: "Unassign Student confirmation dialog warning the action cannot be undone",
        caption: "Unassigning only removes the transport link — it does not delete the student record itself.",
      },
    },
  ],

  bestPractices: [
    "Set up Vehicles and Drivers before creating Routes, and Routes before assigning Students — the Assign Student form requires an existing route and stop to choose from.",
    "Keep stop fees accurate when editing a route — changing a stop's fee doesn't retroactively adjust students already assigned to it, so verify pricing before large batches of student assignments.",
    "Assign both a driver and a vehicle to every active route — an unassigned vehicle (like vehicle 1111 with no route) sits idle and won't appear as a usable transport option for students.",
  ],

  commonErrors: [
    {
      issue: "Can't find a route when assigning a student",
      fix: "Make sure the route has at least one stop and a vehicle assigned — routes without stops won't have a usable Select Stop option in the Assign Student form.",
    },
    {
      issue: "Accidentally deleted a route with active student assignments",
      fix: "This can't be undone — deleting a route is permanent, so check its student count (shown on the Routes tab) before deleting.",
    },
  ],

  faqs: [
    {
      question: "What's the difference between a Driver and a Helper?",
      answer:
        "Both are added through the same \"Add Driver / Helper\" form — the Role field distinguishes them (Driver vs Helper) for record-keeping and display purposes.",
    },
    {
      question: "How is a student's transport fee determined?",
      answer:
        "It comes from the fee (₹) set on the specific stop they're assigned to when creating or editing a route — different stops on the same route can have different fees.",
    },
    {
      question: "Can one vehicle be assigned to more than one route?",
      answer:
        "Check the Vehicles tab — each vehicle card shows its currently assigned route as a single chip, suggesting one active route per vehicle at a time in this version.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Fees", slug: "fees" },
  ],
};