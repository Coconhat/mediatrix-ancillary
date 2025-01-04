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
      items: [
        {
          title: "Update Total Patients",
          url: "#",
        },
        {
          title: "Update Revenue This Month",
          url: "#",
        },
        {
          title: "Update Appointments Number",
          url: "#",
        },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Update weeky revenue",
          url: "#",
        },
        {
          title: "Expenses",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "News & Updates",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Post News",
          url: "#",
        },
        {
          title: "Edit News",
          url: "#",
        },
        {
          title: "Announcements",
          url: "#",
        },
      ],
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
    <Sidebar collapsible="icon" {...props} >
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
