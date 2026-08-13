export const settingsContent = {
  title: "Settings",
  slug: "settings",
  category: "System",

  overview:
    "The Settings section is where you manage school-wide configuration and account settings. You can update the school profile, manage account access, configure geo-fencing for attendance, control device and session limits, and manage other system settings.",

  purpose:
    "Use this section to configure important settings that affect how the school system operates. General settings control school information and file uploads, Account settings manage the current user's account, Geo Fencing controls location-based attendance, and Security controls device login limits.",

  steps: [
    {
      title: "Open the Settings page",
      description:
        'From the left-side menu, go to the System section and click "Settings". The Settings page contains four main sections: General, Account, Geo Fencing, and Security. Select a section from the settings menu to view or update its configuration.',
      screenshot: {
        src: "/screenshots/school-admin/settings_general.png",
        alt: "Settings page showing the General settings section",
        caption:
          "The Settings page provides separate sections for school configuration, account settings, geo-fencing, and security.",
      },
    },

    {
      title: "Manage the school profile",
      description:
        'Open the "General" section to manage the School Profile. You can update the school name, academic year, maximum file upload size, and custom domain or subdomain. The maximum file upload size controls the maximum size of a single file that can be uploaded in the Gallery / Documents section for the school.',
      screenshot: {
        src: "/screenshots/school-admin/settings_general.png",
        alt: "General settings showing School Profile configuration",
        caption:
          "The General section contains school profile information, file upload limits, custom domain settings, and fee setup options.",
      },
    },

    {
      title: "Configure the maximum file upload size",
      description:
        "In the General settings, use the Max File Upload Size field to control the maximum size of a single uploaded file. The displayed configuration supports a range of 1 to 100 MB per file.",
    },

    {
      title: "Configure a custom domain or subdomain",
      description:
        'Use the "Custom Domain / Subdomain" field in the General section to configure a custom domain for the school. When users access the configured domain, the school branding, including its logo and name, is applied automatically.',
    },

    {
      title: "Manage account settings",
      description:
        'Open the "Account" section to view the currently signed-in account. The page displays the account email address and role. You can also use "Change Password" to secure the account with a new password or select "Sign Out" to end the current session.',
      screenshot: {
        src: "/screenshots/school-admin/settings_account.png",
        alt: "Account settings showing signed-in user information and account actions",
        caption:
          "The Account section shows the current account and provides options to change the password or sign out.",
      },
    },

    {
      title: "Configure geo-fencing for attendance",
      description:
        'Open the "Geo Fencing" section to configure location-based attendance for teachers. When geo-fencing is enabled, teachers must be within the configured radius of the school location to clock in. The system uses GPS from the teacher\'s device.',
      screenshot: {
        src: "/screenshots/school-admin/setting_geofencing.png",
        alt: "Geo Fencing settings showing attendance location configuration",
        caption:
          "Geo Fencing can require teachers to be on the school premises when marking attendance.",
      },
    },

    {
      title: "Enable or disable geo-fencing",
      description:
        'Use the "Enable Geo-Fencing" toggle to require teachers to be on-site when marking attendance. When enabled, the configured school location and allowed radius are used to determine whether a teacher can clock in.',
    },

    {
      title: "Set the school location",
      description:
        'In the School Location section, click "Use My Location" while on the school premises to automatically fill the coordinates, or enter the latitude and longitude manually. The page provides separate fields for Latitude and Longitude.',
    },

    {
      title: "Set the allowed attendance radius",
      description:
        "Use the Allowed Radius slider to define how far teachers can be from the configured school location while still being allowed to mark attendance. The available scale shown ranges from 50 m to 2 km, with 50 m described as strict and 2 km as lenient.",
    },

    {
      title: "Configure device and session limits",
      description:
        'Open the "Security" section to control how many devices students and teachers can be logged into simultaneously. If a user exceeds the configured limit, they will be prompted to log out of their other devices before continuing.',
      screenshot: {
        src: "/screenshots/school-admin/settings_security.png",
        alt: "Security settings showing student and teacher maximum device limits",
        caption:
          "Security settings control the maximum number of simultaneous devices for students and teachers.",
      },
    },

    {
      title: "Set student and teacher device limits",
      description:
        "Use the Student Max Devices and Teacher Max Devices fields to set the maximum number of devices that each type of user can have logged in simultaneously. The displayed default is 1 device per student and 1 device per teacher.",
    },

    {
      title: "Save security settings",
      description:
        'After changing the device limits, click "Save Security Settings" to apply the updated security configuration.',
    },
  ],

  bestPractices: [
    "Keep the school name and academic year updated so the system reflects the current school configuration.",
    "Set the maximum file upload size according to the types of documents and images the school expects users to upload.",
    "Use a valid custom domain or subdomain when configuring school-specific access.",
    "Only enable geo-fencing after confirming that the school location coordinates are correct.",
    "Use the Use My Location option while physically present at the school to help populate the correct coordinates.",
    "Choose an allowed radius that provides enough coverage for the school premises without making location-based attendance unnecessarily broad.",
    "Keep student and teacher device limits appropriate for the school's login and device usage requirements.",
    "Use Change Password regularly when account security needs to be updated.",
  ],

  commonErrors: [
    {
      issue: "Teachers cannot mark attendance after geo-fencing is enabled.",
      fix: "Check that the school latitude and longitude are correct and that the allowed radius is large enough to cover the school premises. Also make sure the teacher's device can provide GPS location.",
    },
    {
      issue: "The school location is incorrect.",
      fix: "Open Geo Fencing settings while on the school premises and click Use My Location, or enter the correct latitude and longitude manually.",
    },
    {
      issue: "A student or teacher is asked to log out of another device.",
      fix: "Check the Student Max Devices or Teacher Max Devices setting under Security. The user has reached the configured simultaneous device limit.",
    },
    {
      issue: "A file cannot be uploaded because it is too large.",
      fix: "Check the Max File Upload Size setting under General. The uploaded file must be within the configured limit of 1 to 100 MB per file.",
    },
  ],

  faqs: [
    {
      question: "What settings can I manage from the Settings section?",
      answer:
        "You can manage school profile information, account settings, geo-fencing for attendance, and security settings such as student and teacher device limits.",
    },
    {
      question: "What does Geo Fencing do?",
      answer:
        "Geo Fencing can require teachers to be within a configured distance of the school's location before they can mark attendance. It uses GPS from the teacher's device.",
    },
    {
      question: "How do I set the school's geo-fencing location?",
      answer:
        "Open Geo Fencing settings and click Use My Location while on the school premises, or enter the school's latitude and longitude manually.",
    },
    {
      question: "What is the Allowed Radius?",
      answer:
        "The Allowed Radius defines how far a teacher can be from the configured school location while still being allowed to clock in when geo-fencing is enabled.",
    },
    {
      question: "What happens when a user exceeds the device limit?",
      answer:
        "Users who exceed their configured device limit are prompted to log out of their other devices before continuing.",
    },
    {
      question: "What is the default device limit?",
      answer:
        "The displayed default is 1 device per student and 1 device per teacher.",
    },
    {
      question: "Where can I change my account password?",
      answer: 'Open Settings, select Account, and click "Change Password".',
    },
    {
      question: "Can I configure a custom domain for the school?",
      answer:
        "Yes. The General section provides a Custom Domain / Subdomain field for configuring a school-specific domain.",
    },
  ],

  relatedModules: [
    { title: "Attendance", slug: "attendance" },
    { title: "Gallery", slug: "gallery" },
    { title: "Academics", slug: "academics" },
  ],
};
