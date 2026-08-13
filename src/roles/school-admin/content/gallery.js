export const galleryContent = {
  title: "Gallery",
  slug: "gallery",
  category: "Communication",

  overview:
    "The Gallery section is where you manage school documents and media. You can organize files into folders, upload documents, view uploaded files, create groups, and manage which students or teachers belong to each group.",

  purpose:
    "Use the Gallery to keep school documents and media organized in one place. Folders help separate files by purpose, while groups can be used to organize teachers and students for shared folder access and collaboration.",

  steps: [
    {
      title: "Open the Gallery page",
      description:
        'From the left-side menu, go to the "Gallery" section under Gallery & Reports. The Gallery page displays your available folders, storage usage, and actions such as Guide, Groups, New Folder, and Upload.',
      screenshot: {
        src: "/screenshots/school-admin/gallery/gallery_mainpge.png",
        alt: "Gallery page showing storage, folders, and available actions",
        caption:
          "The Gallery page provides an overview of school storage, folders, and file management actions.",
      },
    },
    {
      title: "Monitor storage usage",
      description:
        "The storage panel at the top of the Gallery displays the amount of storage currently used compared with the school's available storage. Use this information to keep track of available space when uploading files.",
    },

    {
      title: "Create a new folder",
      description:
        'Click "New Folder" to create a folder for organizing school documents and media. Enter a name in the Folder Name field and click "Create". The new folder will then appear on the Gallery page.',
      screenshot: {
        src: "/screenshots/school-admin/gallery/gallery_folder.png",
        alt: "New Folder dialog showing the folder name field and Create button",
        caption:
          "Enter a folder name and click Create to organize files into a new folder.",
      },
    },

    {
      title: "Manage groups",
      description:
        'Click "Groups" to open the Manage Groups window. You can create a new group by entering a group name and clicking "Create". Existing groups display the number of members and shared folders, and you can manage the members of each group from the same window.',
      screenshot: {
        src: "/screenshots/school-admin/gallery/gallery_managegroups.png",
        alt: "Manage Groups window showing group creation and group members",
        caption:
          "Use Manage Groups to create groups and organize teachers and students as group members.",
      },
    },

    {
      title: "Add members to a group",
      description:
        'Inside a group, select the member type such as "Teacher" or "Student", select the available member, and click "Add". Added members appear in the Members list with their role clearly displayed.',
    },

    {
      title: "Remove members or delete a group",
      description:
        "You can remove an individual member from a group using the remove icon next to the member. If an entire group is no longer required, use the delete icon associated with the group.",
    },

    {
      title: "Upload a file",
      description:
        'Click "Upload" to open the Upload File window. Select a file using "Choose file". The form displays the maximum allowed file size and allows you to enter a title for the file. Select the appropriate file type from the Type dropdown, such as "Certificate", and then click "Upload" to add the file to the Gallery.',
      screenshot: {
        src: "/screenshots/school-admin/gallery/gallery_upload.png",
        alt: "Upload File dialog showing file selection, title, type, and Upload button",
        caption:
          "Select a file, enter its title, choose the appropriate file type, and click Upload to add it to the Gallery.",
      },
    },

    {
      title: "Manage files inside a folder",
      description:
        'Click a folder from the Gallery page to open it. The folder page displays the files stored inside it along with details such as the file title, upload date, file size, and content type. Use the "View" button to open and review an uploaded file, or use the trash icon to delete a file that is no longer required. Check the file carefully before deleting it to make sure you remove the correct document.',
      screenshot: {
        src: "/screenshots/school-admin/gallery/gallery_uploadedimage.png",
        alt: "Gallery folder showing an uploaded file with view and delete actions",
        caption:
          "Open a folder to view file details, review uploaded files, or delete files that are no longer required.",
      },
    },
  ],

  bestPractices: [
    "Create folders based on document type or purpose so files are easy to locate later.",
    "Use clear and descriptive folder names when organizing school documents.",
    "Enter meaningful titles for uploaded files instead of relying only on the original filename.",
    "Select the correct file type when uploading documents to keep the Gallery organized.",
    "Check the file size before uploading and make sure it is within the configured maximum upload limit.",
    "Use groups to organize teachers and students when group-based file or folder sharing is required.",
    "Review storage usage regularly before uploading large numbers of files.",
    "Delete files that are no longer required to keep the Gallery organized and make better use of available storage.",
  ],

  commonErrors: [
    {
      issue: "A file cannot be uploaded.",
      fix: "Check that a file has been selected and that its size does not exceed the maximum file upload limit configured for the school.",
    },
    {
      issue: "A file is difficult to find.",
      fix: "Open the relevant folder and use clear folder names and file titles to keep documents organized.",
    },
    {
      issue: "A teacher or student is not appearing as a group member.",
      fix: "Open Manage Groups, select the appropriate member type such as Teacher or Student, select the available member, and click Add.",
    },
    {
      issue: "The Gallery is running low on storage.",
      fix: "Check the storage indicator at the top of the Gallery and remove files that are no longer required.",
    },
  ],

  faqs: [
    {
      question: "What can I manage in the Gallery?",
      answer:
        "You can create folders, upload and view files, delete files, monitor storage usage, and create and manage groups of teachers and students.",
    },
    {
      question: "Can I create folders for different types of documents?",
      answer:
        "Yes. Use the New Folder option to create folders with names that match the documents or media you want to organize.",
    },
    {
      question: "Can I create groups of teachers and students?",
      answer:
        "Yes. The Manage Groups feature allows you to create groups and add teachers or students as members.",
    },
    {
      question: "Can I remove someone from a group?",
      answer:
        "Yes. Open the group in Manage Groups and use the remove option next to the member you want to remove.",
    },
    {
      question: "Can I delete a group?",
      answer:
        "Yes. Use the delete icon associated with the group in the Manage Groups window.",
    },
    {
      question: "What information is required when uploading a file?",
      answer:
        "You need to select a file, provide a title, and select the appropriate file type before uploading it.",
    },
    {
      question: "How can I check available Gallery storage?",
      answer:
        "The storage indicator at the top of the Gallery shows the amount of storage used compared with the school's available storage.",
    },
    {
      question: "Can I view an uploaded file?",
      answer:
        "Yes. Open the folder containing the file and click the View button on the file card.",
    },
  ],

  relatedModules: [
    { title: "Settings", slug: "settings" },
    { title: "Communication", slug: "communication" },
    { title: "Students", slug: "students" },
    { title: "Teachers", slug: "teachers" },
  ],
};
