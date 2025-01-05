"use client";

import * as React from "react";
import {
  Bell,
  BellDotIcon,
  BellElectricIcon,
  ClipboardList,
  FileText,
  Home,
  InboxIcon,
  Settings2,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation"; // Import hook for getting current route

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
    name: "Anne San Juan",
    email: "mmsanjuan@mediatrix.com.ph",
    avatar: "/avatars/doctor.jpg",
  },
  teams: [
    {
      name: "Mediatrix ACUP Directory",
      logo: Home,
      plan: "Healthcare",
    },
  ],
  navMain: [
    {
      title: "News & Announcements",
      url: "/directory/news",
      icon: FileText,
    },
    {
      title: "Inbox",
      url: "/directory/inbox",
      icon: InboxIcon,
    },
    {
      title: "Notifications",
      url: "/directory/notifications",
      icon: Bell,
    },
  ],
};

export function DirectorySidebar({ ...props }) {
  const pathname = usePathname(); // Get the current route

  return (
    <Sidebar collapsible="icon" {...props}>
      
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={data.navMain.map((item) => ({
            ...item,
            isActive: pathname === item.url, // Add an isActive property
          }))}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
