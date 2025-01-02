"use client"; // Ensure this file is treated as a client-side component

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AnnouncementCard from "../components/AnnouncementCard";

// Sample data for users and messages (can be replaced with a database in real life)
const users = [
  { id: 1, name: "Alice - Head of Ancillary Services", role: "Head" },
  { id: 2, name: "Bob - Employee", role: "Employee" },
  { id: 3, name: "Charlie - Employee", role: "Employee" },
];

const messages = [
  {
    id: 1,
    subject: "New Policy Update",
    sender: "Alice",
    timestamp: "2025-01-01 10:30 AM",
    body: "A new policy regarding remote work has been implemented.",
  },
  {
    id: 2,
    subject: "System Maintenance",
    sender: "Bob",
    timestamp: "2025-01-02 09:00 AM",
    body: "Scheduled maintenance will occur this weekend.",
  },
];

export default function DashboardPage() {
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [recipients, setRecipients] = useState([]); // Store multiple recipients
  const [searchTerm, setSearchTerm] = useState("");
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal visibility
  const [selectedMessage, setSelectedMessage] = useState(null); // State for selected message

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    // Handle message sending logic here (e.g., API call)
    console.log("Message sent:", { subject: messageSubject, body: messageBody, recipients });
    setIsModalOpen(false); // Close the modal after sending the message
  };

  const handleRemoveRecipient = (userName) => {
    setRecipients(recipients.filter((recipient) => recipient !== userName)); // Remove user from recipient list
  };

  const openMessageDetails = (message) => {
    setSelectedMessage(message); // Open the message details in a popup
  };

  const closeMessageDetails = () => {
    setSelectedMessage(null); // Close the message details popup
  };

  const handleDeleteMessage = () => {
    // Logic for deleting the message (e.g., removing from messages array)
    console.log("Message deleted:", selectedMessage.id);
    setSelectedMessage(null); // Close the popup after deletion
  };

  const handleReplyMessage = () => {
    // Logic for replying to the message (e.g., pre-fill the message body)
    console.log("Replying to message:", selectedMessage.id);
    setSelectedMessage(null); // Close the popup after reply
  };

  const handleForwardMessage = () => {
    // Logic for forwarding the message (e.g., add new recipients)
    console.log("Forwarding message:", selectedMessage.id);
    setSelectedMessage(null); // Close the popup after forwarding
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
            <h2 className="text-xl font-bold mb-4 text-blue-800">ANCILLARY DIRECTOR ANNOUNCEMENTS</h2>
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
                <button className="text-blue-800 font-semibold hover:underline">View</button>
              </li>
              <li className="p-4 bg-green-100 rounded-lg flex justify-between items-center">
                <p className="text-black">New memo: Quarterly sales report available.</p>
                <button className="text-blue-800 font-semibold hover:underline">View</button>
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

          {/* Inbox Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg col-span-3">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Inbox</h2>

            {/* List of received messages */}
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="border-b pb-4 cursor-pointer flex justify-between items-center"
                  onClick={() => openMessageDetails(message)}
                >
                  <div>
                    <div className="font-semibold text-black">{message.subject}</div>
                    <div className="text-black">{message.body}</div>
                  </div>
                  <span className="text-gray-500"> &gt;</span> {/* Add > icon */}
                </div>
              ))}
            </div>

            {/* Compose Message Button (Fixed bottom-right corner) */}
            <div className="fixed bottom-6 right-6">
              <button
                onClick={() => setIsModalOpen(true)} // Open modal on click
                className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
              >
                Compose Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Compose New Message */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Close modal if clicked outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full z-60" // Increase the width here
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside the modal
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Compose a Message</h2>
            <div className="mb-4">
              <label className="block text-black">Subject</label>
              <input
                type="text"
                value={messageSubject}
                onChange={(e) => setMessageSubject(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-black">To</label>
              <div className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm text-black">
                {/* Display selected recipients */}
                <div className="flex flex-wrap">
                  {recipients.map((recipient, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 p-2 rounded-full mr-2 mb-2"
                    >
                      {recipient}
                      <button
                        onClick={() => handleRemoveRecipient(recipient)}
                        className="ml-2 text-red-500"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>

                {/* Search users */}
                <input
                  type="text"
                  value={searchTerm}
                  onClick={() => setShowUserList(true)}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  placeholder="Search users"
                />
                {showUserList && (
                  <ul className="space-y-2 mt-2 max-h-60 overflow-y-scroll">
                    {filteredUsers.map((user) => (
                      <li
                        key={user.id}
                        onClick={() => {
                          if (!recipients.includes(user.name)) {
                            setRecipients([...recipients, user.name]);
                          }
                          setShowUserList(false);
                        }}
                        className="cursor-pointer p-3 hover:bg-gray-200 rounded-lg"
                      >
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-black">Message</label>
              <textarea
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm text-black"
                rows="4"
              ></textarea>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="bg-gray-300 text-black py-2 px-6 rounded-lg hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)} // Close modal on cancel
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup for Message Details */}
      {selectedMessage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeMessageDetails} // Close popup if clicked outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full z-60"
            onClick={(e) => e.stopPropagation()} // Prevent popup closing when clicking inside
          >
            {/* Back Button */}
            <button
              className="text-blue-600 mb-4"
              onClick={closeMessageDetails} // Close popup
            >
              Back
            </button>

            <h2 className="text-xl font-semibold mb-4 text-black">{selectedMessage.subject}</h2>
            <p className="text-gray-500 mb-4">From: {selectedMessage.sender}</p>
            <p className="text-gray-500 mb-4">Sent: {selectedMessage.timestamp}</p>
            <p className="text-black">{selectedMessage.body}</p>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handleReplyMessage}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Reply
              </button>
              <button
                onClick={handleForwardMessage}
                className="bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-gray-300 hover:text-white hover:border-blue-600"
              >
                Forward
              </button>
              <button
                onClick={handleDeleteMessage}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
