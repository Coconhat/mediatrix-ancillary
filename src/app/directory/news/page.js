"use client";

import React, { useState } from "react";
import { AnnouncementCard } from "../../components/AnnouncementCard";
import Image from "next/image";
import { DirectorySidebar } from "@/components/directory-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Home,
  BarChart,
  Bell,
  FileText,
  Clock,
  Users,
  Settings,
} from "lucide-react";

export default function DashboardPage() {
  const [activeSidebarOption, setActiveSidebarOption] = useState("dashboard");
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Initial announcements state
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "New Policy Update",
      description:
        "A new policy regarding remote work has been implemented. Check your email for details.",
      fullContent:
        "Our new remote work policy aims to provide more flexibility while maintaining productivity. Key changes include:\n\n- Option for 2 remote days per week\n- Core hours from 10 AM to 3 PM\n- Monthly in-person team meetings\n\nPlease review the full policy document in your email for complete details and guidelines.",
      isRead: false,
    },
    {
      id: 2,
      title: "System Maintenance",
      description:
        "Scheduled maintenance will occur this weekend. Save your work beforehand.",
      fullContent:
        "System maintenance is scheduled for Saturday, 10 PM - Sunday, 2 AM. During this time, all systems including email, internal tools, and cloud storage will be unavailable. Please ensure all critical work is saved and backed up before the maintenance window begins.",
      isRead: true,
    },
  ]);

  // Initial news state
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Global Expansion",
      description:
        "Our company is expanding to new international markets. Stay tuned for more updates.",
      fullContent:
        "We're excited to announce our expansion into the Asian and European markets. This strategic move includes:\n\n- New offices in Singapore and Berlin\n- Local partnerships in key regions\n- Enhanced support for international clients\n- Hiring initiatives in new locations\n\nThis expansion represents a significant milestone in our company's growth trajectory.",
      isRead: false,
    },
    {
      id: 2,
      title: "New Partnership",
      description:
        "We have partnered with XYZ Corporation to enhance our service offerings.",
      fullContent:
        "Our partnership with XYZ Corporation brings exciting new possibilities for our clients. The collaboration will enable:\n\n- Integrated service solutions\n- Enhanced technical capabilities\n- Expanded market reach\n- Joint innovation initiatives\n\nMore details about specific offerings will be announced in the coming weeks.",
      isRead: true,
    },
  ]);

  // Initial memos state
  const [memos, setMemos] = useState([
    {
      id: 1,
      title: "Memo #1",
      description: "Submit your expense reports by the end of the week.",
      imageUrl: "/assets/memo1.png",
      read: false,
    },
    {
      id: 2,
      title: "Memo #2",
      description: "Team meeting scheduled for Friday at 2 PM. Please RSVP.",
      imageUrl: "/assets/memo2.png",
      read: true,
    },
  ]);

  // Sort function for read/unread items
  const sortByReadStatus = (items) => {
    return [...items].sort((a, b) => {
      if (a.isRead === b.isRead) return 0;
      return a.isRead ? 1 : -1;
    });
  };

  // Handlers for memos
  const openMemoDetails = (memo) => {
    setSelectedMemo(memo);
    setImageURL(memo.imageUrl);
    setMemos(memos.map((m) => (m.id === memo.id ? { ...m, read: true } : m)));
  };

  const closeMemoDetails = () => {
    setSelectedMemo(null);
    setImageURL("");
  };

  // Handlers for announcements and news
  const openItemDetails = (item, type) => {
    setSelectedItem({ ...item, type });
    setShowModal(true);

    if (type === "announcement") {
      setAnnouncements(
        announcements.map((a) =>
          a.id === item.id ? { ...a, isRead: true } : a
        )
      );
    } else {
      setNews(news.map((n) => (n.id === item.id ? { ...n, isRead: true } : n)));
    }
  };

  const closeItemDetails = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  // Sort announcements and news
  const sortedAnnouncements = sortByReadStatus(announcements);
  const sortedNews = sortByReadStatus(news);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <DirectorySidebar>
          <ul className="space-y-4 mt-4">
            <li
              className={`p-2 rounded-md cursor-pointer ${
                activeSidebarOption === "dashboard" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSidebarOption("dashboard")}
            >
              <Home className="inline-block mr-2" />
              Dashboard
            </li>
            <li
              className={`p-2 rounded-md cursor-pointer ${
                activeSidebarOption === "reports" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSidebarOption("reports")}
            >
              <BarChart className="inline-block mr-2" />
              Reports
            </li>
            <li
              className={`p-2 rounded-md cursor-pointer ${
                activeSidebarOption === "notifications" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSidebarOption("notifications")}
            >
              <Bell className="inline-block mr-2" />
              Notifications
            </li>
            <li
              className={`p-2 rounded-md cursor-pointer ${
                activeSidebarOption === "documents" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveSidebarOption("documents")}
            >
              <FileText className="inline-block mr-2" />
              Documents
            </li>
          </ul>
        </DirectorySidebar>

        {/* Main Content Wrapper */}
        <main className="flex-grow w-full">
          {/* Sticky Header with Breadcrumb */}
          <header className="sticky top-0 z-10 w-full h-16 bg-white shadow-sm">
            <div className="h-full px-4 flex items-center overflow-x-auto">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Breadcrumb className="w-full">
                <BreadcrumbList className="flex-nowrap whitespace-nowrap">
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">ACUP Management</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>News and Announcement</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          {/* Main Content */}
          <div className="w-full p-4 md:p-6">
            <div className="w-full space-y-6">
              {/* Announcements Section */}
              <section className="bg-white p-4 rounded-lg shadow-lg w-full">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-blue-800">
                  ANNOUNCEMENTS
                </h2>
                <div className="space-y-4">
                  {sortedAnnouncements.map((announcement) => (
                    <AnnouncementCard
                      key={announcement.id}
                      title={announcement.title}
                      description={announcement.description}
                      isRead={announcement.isRead}
                      onClick={() => openItemDetails(announcement, "announcement")}
                    />
                  ))}
                </div>
              </section>

              {/* Latest News Section */}
              <section className="bg-white p-4 rounded-lg shadow-lg w-full">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-blue-800">
                  LATEST NEWS
                </h2>
                <div className="space-y-4">
                  {sortedNews.map((newsItem) => (
                    <AnnouncementCard
                      key={newsItem.id}
                      title={newsItem.title}
                      description={newsItem.description}
                      isRead={newsItem.isRead}
                      onClick={() => openItemDetails(newsItem, "news")}
                    />
                  ))}
                </div>
              </section>

              {/* Memos Section */}
              <section className="bg-white p-4 rounded-lg shadow-lg w-full">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-blue-800">
                  Memos
                </h2>
                <div className="space-y-4 w-full">
                  {memos.map((memo) => (
                    <div
                      key={memo.id}
                      className={`relative border p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer w-full ${
                        memo.read ? "bg-gray-200" : "bg-white"
                      }`}
                      onClick={() => openMemoDetails(memo)}
                    >
                      {!memo.read && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></div>
                      )}
                      <h3 className="text-lg font-semibold text-blue-800 break-words">
                        {memo.title}
                      </h3>
                      <p className="text-gray-600 break-words">{memo.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Modals */}
          {selectedMemo && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
              onClick={closeMemoDetails}
            >
              <div
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="text-blue-600 mb-4" onClick={closeMemoDetails}>
                  Back
                </button>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-800 break-words">
                  {selectedMemo.title}
                </h2>
                <p className="text-black break-words">{selectedMemo.description}</p>
                {imageURL && (
                  <Image
                    src={imageURL}
                    alt={selectedMemo.title}
                    width={800}
                    height={520}
                    className="w-full rounded-lg shadow-lg mt-4"
                  />
                )}
              </div>
            </div>
          )}

          {showModal && selectedItem && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
              onClick={closeItemDetails}
            >
              <div
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="text-blue-600 mb-4" onClick={closeItemDetails}>
                  Back
                </button>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-800 break-words">
                  {selectedItem.title}
                </h2>
                <div className="text-black whitespace-pre-line break-words">
                  {selectedItem.fullContent}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};