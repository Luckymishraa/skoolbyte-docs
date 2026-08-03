import {
  LayoutDashboard,
  Building2,
  BookOpen,
  FileText,
  Users,
  BarChart3,
  Shield,
  UserPlus,
  GraduationCap,
  UserCog,
  ClipboardList,
  Briefcase,
  Settings,
  CircleHelp,
} from "lucide-react";

export const navigation = [
  {
    id: "platform-administration",
    section: "Platform Administration",
    items: [
      {
        title: "Dashboard",
        slug: "dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Schools",
        slug: "schools",
        icon: Building2,
      },
      {
        title: "Classes & Fees",
        slug: "classes-fees",
        icon: BookOpen,
      },
      {
        title: "Subjects",
        slug: "subjects",
        icon: FileText,
      },
      {
        title: "Admins",
        slug: "admins",
        icon: Users,
      },
      {
        title: "Reports",
        slug: "reports",
        icon: BarChart3,
      },
      {
        title: "Approvals",
        slug: "approvals",
        icon: Shield,
      },
      {
        title: "Registrations",
        slug: "registrations",
        icon: UserPlus,
      },
      {
        title: "Students",
        slug: "students",
        icon: GraduationCap,
      },
      {
        title: "Teachers",
        slug: "teachers",
        icon: UserCog,
      },
      {
        title: "Enquiries",
        slug: "enquiries",
        icon: ClipboardList,
      },
      {
        title: "Employees",
        slug: "employees",
        icon: Briefcase,
      },
      {
        title: "Settings",
        slug: "settings",
        icon: Settings,
      },
      {
        title: "System Guide",
        slug: "guide",
        icon: CircleHelp,
      },
    ],
  },
];
