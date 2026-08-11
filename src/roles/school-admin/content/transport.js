export const transportContent = {
  title: "Transport",
  slug: "transport",
  category: "Operations",

  overview:
    "The Transport section helps you manage the school's buses and other transport services. You can add vehicles, manage drivers and helpers, create routes and stops, and assign students to the correct route.",

  purpose:
    "Use this section to manage all school transport information in one place. First, add your vehicles and drivers, then create routes and stops. Once the routes are ready, you can assign students to their pickup and drop-off points.",

  steps: [
    {
      title: "Open Transport Management",
      description:
        'From the left-side menu, click Transport. You will see five sections: Dashboard, Vehicles, Drivers, Routes, and Students. You can also open the "How it Works" guide or refresh the transport information.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_dashboard.png",
        alt: "Transport Dashboard showing vehicles, drivers, routes, and students",
        caption:
          "The Transport Dashboard gives you a quick overview of the school's transport system.",
      },
    },

    {
      title: "Check the Transport Dashboard",
      description:
        "The Dashboard shows a summary of your transport system, including the total number of vehicles, drivers and helpers, active routes, and students using transport. You can also see which driver, helper, and route are currently connected to each vehicle.",
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_dashboard.png",
        alt: "Transport Dashboard showing transport summary and vehicle information",
        caption:
          "Use the Dashboard to quickly check the current status of the school's transport system.",
      },
    },

    {
      title: "View registered vehicles",
      description:
        "Open the Vehicles section to see all vehicles registered with the school. Each vehicle shows its vehicle number, type, seating capacity, fuel type, assigned driver, assigned route, and current status.",
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_vehical_mainpage.png",
        alt: "Vehicles section showing registered school buses",
        caption:
          "The Vehicles section shows important information about each school vehicle.",
      },
    },

    {
      title: "Add a vehicle",
      description:
        'Open the Vehicles section and click "Add Vehicle" to register a new school vehicle. Enter the vehicle number, vehicle type, seating capacity, fuel type, and other required information. You can also connect a driver or route when available.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_add_vehicle.png",
        alt: "Vehicles section showing school buses and their assignments",
        caption:
          "Add each school vehicle so it can later be connected to a driver and route.",
      },
    },

    {
      title: "Add a driver or helper",
      description:
        'Open the Drivers section and click "Add Driver / Helper". Enter the person\'s name, phone number, and select whether they are a Driver or Helper. You can also assign a vehicle at this stage, or connect them to a vehicle later. Click "Add" to save the information.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_Add_driver.png",
        alt: "Add Driver or Helper form",
        caption:
          "Add drivers and helpers and optionally connect them to a vehicle.",
      },
    },

    {
      title: "View drivers and helpers",
      description:
        "The Drivers section shows all drivers and helpers added to the system. You can see their name, phone number, role, and the vehicle they are currently assigned to.",
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_driver_mainpage.png",
        alt: "Drivers and Helpers section showing transport staff",
        caption:
          "Check which drivers and helpers are currently connected to each vehicle.",
      },
    },

    {
      title: "View transport routes",
      description:
        "Open the Routes section to see all school transport routes. Each route shows its stops and the students assigned to it. You can expand a route to see more details and available actions.",
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_routes_mainpage.png",
        alt: "Routes section showing school transport routes",
        caption:
          "View routes and expand them to check their stops and assignments.",
      },
    },

    {
      title: "Create a transport route",
      description:
        'Open the Routes section and click "Add Route". Enter a name for the route and add one or more stops. For each stop, enter the stop name, pickup time, and fee. Click "+ Add Stop" if the route has multiple stops. When all stops are added, click "Create Route".',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_add_route.png",
        alt: "Add Route form showing route name and stop details",
        caption:
          "Add each pickup stop along with its pickup time and transport fee.",
      },
    },

    {
      title: "Assign a vehicle to a route",
      description:
        'Open a route and click "Assign Vehicle". Select the vehicle that will operate the route and, if needed, select its driver. Click "Assign Vehicle" to save the assignment. A route needs a vehicle before students can be assigned to it.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_mainpage_assignvehicles.png",
        alt: "Assign Vehicle form for a transport route",
        caption:
          "Connect a vehicle and driver to a route before assigning students to it.",
      },
    },

    {
      title: "Edit a route",
      description:
        'Click "Edit Route" to change the route name, stops, pickup times, or stop fees. After making the required changes, click "Save Changes".',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_mainpage_editroute.png",
        alt: "Edit Route form",
        caption:
          "Update route details whenever stops, timings, or fees change.",
      },
    },

    {
      title: "Delete a route",
      description:
        'If a route is no longer needed, click "Delete Route". A confirmation message will appear. Click "Delete" only if you are sure because deleting a route is permanent.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_mainpage_deleteroute.png",
        alt: "Delete Route confirmation message",
        caption:
          "Check the route carefully before deleting it because the action cannot be undone.",
      },
    },

    {
      title: "View student transport assignments",
      description:
        "Open the Students section under Transport to see which students are using school transport. You can search by student name or admission number, filter students by route, and check each student's assigned stop and trip type.",
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_student_mainpage.png",
        alt: "Student transport assignments section",
        caption:
          "The Students section shows which route and stop each student is using.",
      },
    },

    {
      title: "Assign a student to transport",
      description:
        'Open the Students section and click "Assign Student". Select the student\'s class and name, then choose a route and stop. The stop will show its pickup time and fee. Finally, choose the trip type, such as Both for pickup and drop, and click "Assign Student".',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_assign_student.png",
        alt: "Assign Student to Transport form",
        caption:
          "Select the student's route, stop, pickup time, fee, and trip type before confirming the assignment.",
      },
    },

    {
      title: "Remove a student's transport assignment",
      description:
        'If a student no longer uses school transport, click the trash icon next to the student in the Students section. A confirmation message will appear. Click "Unassign Student" to remove the transport assignment. This does not delete the student from the school.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_studentassign_delete.png",
        alt: "Unassign Student confirmation message",
        caption:
          "Removing a transport assignment only disconnects the student from transport; the student record remains unchanged.",
      },
    },

    {
      title: "Use the How it Works guide",
      description:
        'Click "How it Works" at the top of the Transport section to open the built-in guide. It explains the main transport features and the steps for setting up vehicles, drivers, routes, and student assignments.',
      screenshot: {
        src: "/screenshots/school-admin/transport/transport_howitworks.png",
        alt: "Transport How it Works guide",
        caption:
          "Use the guide if you need help setting up or managing school transport.",
      },
    },
  ],

  bestPractices: [
    "Add vehicles and drivers first, then create routes and stops, and finally assign students to those routes.",
    "Check vehicle, driver, and route information regularly to make sure transport assignments are correct.",
    "Keep pickup times and stop fees updated whenever there are changes.",
    "Check the student transport list regularly to make sure every student is assigned to the correct route and stop.",
    "Before deleting a route or removing a transport assignment, check the details carefully because these actions cannot be undone.",
  ],

  commonErrors: [
    {
      issue: "A route is not available when assigning a student.",
      fix: "Check that the route has at least one stop and that a vehicle has been assigned to the route. The student assignment requires an available route and stop.",
    },
    {
      issue: "A student was assigned to the wrong stop.",
      fix: "Review the student's transport assignment and make sure the correct route and stop are selected. Check the pickup time and fee before saving the assignment.",
    },
    {
      issue: "A vehicle is not available for student transport.",
      fix: "Check the vehicle's information and make sure it has been assigned to a route. A route must have a vehicle before students can use it.",
    },
    {
      issue: "A route was deleted by mistake.",
      fix: "Deleted routes cannot be restored. Always check the route and its student assignments before confirming deletion.",
    },
  ],

  faqs: [
    {
      question: "What can I manage in the Transport section?",
      answer:
        "You can manage school vehicles, drivers, helpers, transport routes, stops, transport fees, and student transport assignments.",
    },
    {
      question: "What information is needed to create a route?",
      answer:
        "You need to enter a route name and add at least one stop. Each stop can have a name, pickup time, and transport fee.",
    },
    {
      question: "How is a student's transport fee decided?",
      answer:
        "The transport fee comes from the fee set for the specific stop selected when assigning the student. Different stops can have different fees.",
    },
    {
      question: "Can a driver be added without assigning a vehicle?",
      answer:
        "Yes. You can add a driver or helper first and assign a vehicle later.",
    },
    {
      question: "What is the difference between a Driver and a Helper?",
      answer:
        "A Driver is responsible for driving the school vehicle, while a Helper is another staff member assigned to assist with the transport service. You can select the person's role when adding them.",
    },
    {
      question:
        "Can I remove a student from transport without deleting the student?",
      answer:
        "Yes. Unassigning a student only removes their transport assignment. The student's main school record remains unchanged.",
    },
  ],

  relatedModules: [
    { title: "Students", slug: "students" },
    { title: "Fees", slug: "fees" },
  ],
};
