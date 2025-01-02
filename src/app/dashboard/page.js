"use client"; // Ensure this file is treated as a client-side component

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AnnouncementCard from "../components/AnnouncementCard";

export default function DashboardPage() {
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [recipients, setRecipients] = useState([]); // Store multiple recipients
  const [searchTerm, setSearchTerm] = useState("");
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal visibility
  const [selectedMessage, setSelectedMessage] = useState(null); // State for selected message

  return (
    <div className="bg-gray-50 min-h-screen mt-8">
      {/* Navbar */}
      <NavBar />

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-12 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Announcements Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <h2 className="text-xl font-bold mb-4 text-blue-800">
              ANCILLARY DIRECTOR ANNOUNCEMENTS
            </h2>
            <div className="space-y-4">
              <AnnouncementCard
                title="New Policy Update"
                description="A new policy regarding remote work has been implemented. Check your email for details."
              />
              <AnnouncementCard
                title="System Maintenance"
                description="Scheduled maintenance will occur this weekend. Save your work beforehand."
              />
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Notifications</h2>
            <ul className="space-y-4">
              <li className="p-4 bg-red-100 rounded-lg flex justify-between items-center">
                <p className="text-black">Urgent: Update your profile information.</p>
                <button className="text-blue-800 font-semibold hover:underline">
                  View
                </button>
              </li>
              <li className="p-4 bg-green-100 rounded-lg flex justify-between items-center">
                <p className="text-black">New memo: Quarterly sales report available.</p>
                <button className="text-blue-800 font-semibold hover:underline">
                  View
                </button>
              </li>
            </ul>
          </div>

          {/* Memos Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-3">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Memos</h2>
            <div className="space-y-4">
              <AnnouncementCard
                title="Memo #1"
                description="Submit your expense reports by the end of the week."
              />
              <AnnouncementCard
                title="Memo #2"
                description="Team meeting scheduled for Friday at 2 PM. Please RSVP."
              />
            </div>
          </div>

          {/* Latest News Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-3">
            <h2 className="text-xl font-bold mb-4 text-blue-800">LATEST NEWS</h2>
            <div className="space-y-4">
              <AnnouncementCard
                title="Global Expansion"
                description="Our company is expanding to new international markets. Stay tuned for more updates."
              />
              <AnnouncementCard
                title="New Partnership"
                description="We have partnered with XYZ Corporation to enhance our service offerings."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
