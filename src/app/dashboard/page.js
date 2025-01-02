"use client"; // Ensure this file is treated as a client-side component

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AnnouncementCard from "../components/AnnouncementCard";

export default function DashboardPage() {
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedMemo, setSelectedMemo] = useState(null); // State for selected memo
  const [imageURL, setImageURL] = useState(''); // Initialize with an empty string or the default image URL

  // Memos state with "read" or "unread" property
  const [memos, setMemos] = useState([
    { id: 1, title: "Memo #1", description: "Submit your expense reports by the end of the week.", imageUrl: "/assets/memo1.png", read: false },
    { id: 2, title: "Memo #2", description: "Team meeting scheduled for Friday at 2 PM. Please RSVP.", imageUrl: "/assets/memo2.png", read: true },
  ]);

  // Function to handle opening memo details in the popup
  const openMemoDetails = (memo) => {
    setSelectedMemo(memo);
    setImageURL(memo.imageUrl); // Set the image URL dynamically based on the selected memo

    // Mark memo as read after clicking
    setMemos(memos.map(m => m.id === memo.id ? { ...m, read: true } : m));
  };

  // Function to close the memo details popup
  const closeMemoDetails = () => {
    setSelectedMemo(null);
    setImageURL(''); // Reset the image URL when closing the modal
  };

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
              {memos.map((memo) => (
                <div
                  key={memo.id}
                  className={`relative border p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer ${memo.read ? 'bg-gray-200' : 'bg-white'}`}
                  onClick={() => openMemoDetails(memo)}
                >
                  {/* Red dot badge on unread memos */}
                  {!memo.read && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                  <h3 className="text-lg font-semibold text-blue-800">{memo.title}</h3>
                  <p className="text-gray-600">{memo.description}</p>
                </div>
              ))}
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

      {/* Modal for Memo Details */}
      {selectedMemo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeMemoDetails} // Close popup if clicked outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full z-60"
            onClick={(e) => e.stopPropagation()} // Prevent popup closing when clicking inside
          >
            <button
              className="text-blue-600 mb-4"
              onClick={closeMemoDetails} // Close popup
            >
              Back
            </button>

            <h2 className="text-xl font-semibold mb-4 text-blue-800">{selectedMemo.title}</h2>
            <p className="text-black">{selectedMemo.description}</p>

            <div className="mt-6">
              {/* Display the dynamically updated image */}
              {imageURL && (
                <img src={imageURL} alt={selectedMemo.title} className="w-full rounded-lg shadow-lg" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
