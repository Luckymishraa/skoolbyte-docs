import {
  LayoutDashboard,
  GraduationCap,
  UserCog,
  ClipboardList,
  UserPlus,
  BookOpen,
  ClipboardCheck,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  IndianRupee,
  BusFront,
  MessageSquare,
  Image,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

export const navigation = [
  {
    id: "main",
    section: "Main",
    items: [
      {
        title: "Dashboard",
        slug: "dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    id: "people",
    section: "People",
    items: [
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
        title: "Admissions",
        slug: "admissions",
        icon: UserPlus,
      },
    ],
  },

  {
    id: "academics",
    section: "Academics",
    items: [
      {
        title: "Academics",
        slug: "academics",
        icon: BookOpen,
      },
      {
        title: "Home Work",
        slug: "home-work",
        icon: ClipboardCheck,
      },
      {
        title: "Calendar",
        slug: "calendar",
        icon: CalendarDays,
      },
    ],
  },

  {
    id: "attendance",
    section: "HR & Attendance",
    items: [
      {
        title: "Attendance",
        slug: "attendance",
        icon: CalendarCheck,
      },
      {
        title: "Leaves",
        slug: "leaves",
        icon: CalendarX,
      },
    ],
  },

  {
    id: "finance",
    section: "Finance",
    items: [
      {
        title: "Fees",
        slug: "fees",
        icon: IndianRupee,
      },
    ],
  },

  {
    id: "operations",
    section: "Operations",
    items: [
      {
        title: "Transport",
        slug: "transport",
        icon: BusFront,
      },
    ],
  },

  {
    id: "communication",
    section: "Communication",
    items: [
      {
        title: "Communication",
        slug: "communication",
        icon: MessageSquare,
      },
    ],
  },

  {
    id: "gallery",
    section: "Gallery & Reports",
    items: [
      {
        title: "Gallery",
        slug: "gallery",
        icon: Image,
      },
    ],
  },

  {
    id: "system",
    section: "System",
    items: [
      {
        title: "Settings",
        slug: "settings",
        icon: Settings,
      },
      {
        title: "Support",
        slug: "support",
        icon: CircleHelp,
      },
    ],
  },

  {
    id: "account",
    section: "",
    items: [
      {
        title: "Logout",
        slug: "logout",
        icon: LogOut,
      },
    ],
  },
];
