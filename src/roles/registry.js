import { navigation as superAdminNav } from "./super-admin/navigation.js";
import { navigation as schoolNav } from "./school-admin/navigation.js";
import { studentsContent } from "./school-admin/content/student.js";
import { feesContent } from "./school-admin/content/fees.js";
import { teacherContent } from "./school-admin/content/teacher.js";
import { schoolsContent } from "./super-admin/content/schools.js";
import { classesFeesContent } from "./super-admin/content/classes-fees.js";
import { subjectsContent } from "./super-admin/content/subjects.js";
import { adminsContent } from "./super-admin/content/admins.js";

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
