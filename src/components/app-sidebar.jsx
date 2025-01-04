"use client";

import * as React from "react";
import {
  BookOpen,
  ClipboardList,
  DollarSign,
  FileText,
  Home,
  Settings2,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "Dr. Jane Smith",
    email: "jane.smith@mediatrix.com.ph",
    avatar: "/avatars/doctor.jpg",
  },
  teams: [
    {
      name: "City General Hospital",
      logo: Home,
      plan: "Healthcare",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Finance",
      url: "/edit/finance",
      icon: DollarSign,
    },
    {
      title: "News & Updates",
      url: "#",
      icon: FileText,
    },

    {
      title: "Staff",
      url: "#",
      icon: ClipboardList,
      items: [
        {
          title: "Doctors",
          url: "#",
        },
        {
          title: "Nurses",
          url: "#",
        },
        {
          title: "Support Staff",
          url: "#",
        },
        {
          title: "Schedules",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Departments",
          url: "#",
        },
        {
          title: "Permissions",
          url: "#",
        },
        {
          title: "System Logs",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{"need to for ui proposes lol"}</SidebarHeader>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
