import {
  LayoutDashboard,
  GraduationCap,
  UserCog,
  ClipboardList,
  UserPlus,
  BookOpen,
  ClipboardCheck as HomeworkIcon,
  Calendar,
  CalendarCheck,
  CalendarX,
  DollarSign,
  MessageSquare,
  Image,
  Settings,
  LifeBuoy,
} from "lucide-react";

export const navigation = [
  {
    id: "main",
    section: "Main",
    items: [{ title: "Dashboard", slug: "dashboard", icon: LayoutDashboard }],
  },
  {
    id: "people",
    section: "People",
    items: [
      { title: "Students", slug: "students", icon: GraduationCap },
      { title: "Teachers", slug: "teacher", icon: UserCog },
      { title: "Enquiries", slug: "enquiries", icon: ClipboardList },
      { title: "Admissions", slug: "admissions", icon: UserPlus },
    ],
  },
  {
    id: "academics",
    section: "Academics",
    items: [
      { title: "Academics", slug: "academics", icon: BookOpen },
      { title: "Home Work", slug: "assignments", icon: HomeworkIcon },
      { title: "Calendar", slug: "calendar", icon: Calendar },
    ],
  },
  {
    id: "hr-attendance",
    section: "HR & Attendance",
    items: [
      { title: "Attendance", slug: "attendance", icon: CalendarCheck },
      { title: "Leaves", slug: "leaves", icon: CalendarX },
    ],
  },
  {
    id: "finance",
    section: "Finance",
    items: [{ title: "Fees", slug: "fees", icon: DollarSign }],
  },
  {
    id: "communication",
    section: "Communication",
    items: [
      { title: "Communication", slug: "communication", icon: MessageSquare },
    ],
  },
  {
    id: "gallery-reports",
    section: "Gallery & Reports",
    items: [{ title: "Gallery", slug: "gallery", icon: Image }],
  },
  {
    id: "system",
    section: "System",
    items: [
      { title: "Settings", slug: "settings", icon: Settings },
      { title: "Support", slug: "support", icon: LifeBuoy },
    ],
  },
];
