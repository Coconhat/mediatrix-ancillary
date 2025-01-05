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
      name: "Mediatrix ACUP",
      logo: Home,
      plan: "Healthcare",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/edit",
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
      url: "/edit/news",
      icon: FileText,
    },
    {
      title: "Staff",
      url: "#",
      icon: ClipboardList,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <>
     

      {/* Sidebar */}
      <Sidebar collapsible="icon" {...props}>
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
    </>
  );
}
