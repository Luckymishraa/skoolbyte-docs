import { navigation as superAdminNav } from "./super-admin/navigation.js";
import { navigation as schoolNav } from "./school-admin/navigation.js";
import { studentsContent } from "./school-admin/content/student.js";
import { feesContent } from "./school-admin/content/fees.js";
import { teacherContent } from "./school-admin/content/teacher.js";
import { schoolsContent } from "./super-admin/content/schools.js";
import { classesFeesContent } from "./super-admin/content/classes-fees.js";
import { subjectsContent } from "./super-admin/content/subjects.js";
import { adminsContent } from "./super-admin/content/admins.js";
import { enquiriesContent } from "./school-admin/content/enquiries.js";
import { admissionsContent } from "./school-admin/content/admissions.js";
import { calendarContent } from "./school-admin/content/calendar.js";
import { communicationContent } from "./school-admin/content/communication.js";
import { leavesContent } from "./school-admin/content/leaves.js";
import { academicsContent } from "./school-admin/content/academics.js";
import { attendanceContent } from "./school-admin/content/attendance.js";
import { transportContent } from "./school-admin/content/transport.js";

export const roles = [
  {
    key: "super-admin",
    basePath: "/super-admin",
    label: "Skoolbyte Docs",
    badge: "SB",
    navigation: superAdminNav,
    pages: [
      { slug: "schools", content: schoolsContent },
      { slug: "classes-fees", content: classesFeesContent },
      { slug: "subjects", content: subjectsContent },
      { slug: "admins", content: adminsContent },
    ],
  },
  {
    key: "school-admin",
    basePath: "/school-admin",
    label: "School Admin Docs",
    badge: "SC",
    navigation: schoolNav,
    pages: [
      { slug: "students", content: studentsContent },
      { slug: "fees", content: feesContent },
      { slug: "teachers", content: teacherContent },
      { slug: "enquiries", content: enquiriesContent },
      { slug: "admissions", content: admissionsContent },
      { slug: "calendar", content: calendarContent },
      { slug: "communication", content: communicationContent },
      { slug: "attendance", content: attendanceContent },
      { slug: "transport", content: transportContent },
      { slug: "leaves", content: leavesContent },
      { slug: "academics", content: academicsContent },
    ], // filled in as School content is written
  },
  //   {
  //     key: "teacher",
  //     basePath: "/teacher",
  //     label: "Teacher Docs",
  //     badge: "TC",
  //     navigation: teacherNav,
  //     pages: [],
  //   },
  //   {
  //     key: "student",
  //     basePath: "/student",
  //     label: "Student Docs",
  //     badge: "ST",
  //     navigation: studentNav,
  //     pages: [],
  //   },
];

export function getRoleByPath(pathname) {
  return roles.find((role) => pathname.startsWith(role.basePath));
}
