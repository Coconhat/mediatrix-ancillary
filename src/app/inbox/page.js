"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function Inbox() {
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [recipients, setRecipients] = useState([]); // Store multiple recipients
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserList, setShowUserList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal visibility
  const [selectedMessage, setSelectedMessage] = useState(null); // State for selected message

  const users = [
    { id: 1, name: "Analiza - Head of Ancillary Services", role: "Head" },
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
    {
      id: 3,
      subject: "New Policy Update",
      sender: "Alice",
      timestamp: "2025-01-01 10:30 AM",
      body: "A new policy regarding remote work has been implemented.",
    },
    {
      id: 4,
      subject: "System Maintenance",
      sender: "Bob",
      timestamp: "2025-01-02 09:00 AM",
      body: "Scheduled maintenance will occur this weekend.",
    },
    {
      id: 5,
      subject: "New Policy Update",
      sender: "Alice",
      timestamp: "2025-01-01 10:30 AM",
      body: "A new policy regarding remote work has been implemented.",
    },
    {
      id: 6,
      subject: "System Maintenance",
      sender: "Bob",
      timestamp: "2025-01-02 09:00 AM",
      body: "Scheduled maintenance will occur this weekend.",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    console.log("Message sent:", { subject: messageSubject, body: messageBody, recipients });
    setIsModalOpen(false);
  };

  const handleRemoveRecipient = (userName) => {
    setRecipients(recipients.filter((recipient) => recipient !== userName));
  };

  const openMessageDetails = (message) => {
    setSelectedMessage(message);
  };

  const closeMessageDetails = () => {
    setSelectedMessage(null);
  };

  const handleDeleteMessage = () => {
    console.log("Message deleted:", selectedMessage.id);
    setSelectedMessage(null);
  };

  const handleReplyMessage = () => {
    console.log("Replying to message:", selectedMessage.id);
    setSelectedMessage(null);
  };

  const handleForwardMessage = () => {
    console.log("Forwarding message:", selectedMessage.id);
    setSelectedMessage(null);
  };

  return (
<div className="bg-gray-50 min-h-screen pt-20 mt-11">
  <NavBar />
  <div className="container mx-auto px-4 py-10">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Inbox</h2>

      {/* List of received messages */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer"
            onClick={() => openMessageDetails(message)}
          >
            <div>
              <div className="font-semibold text-lg text-black">{message.subject}</div>
              <div className="text-sm text-gray-600">{message.body}</div>
              <div className="text-sm text-gray-400 mt-1">{message.timestamp}</div>
            </div>
            <span className="text-gray-500 text-xl font-bold">&gt;</span>
          </div>
        ))}
      </div>

      {/* Compose Message Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Compose Message
        </button>
      </div>
    </div>
  </div>

      {/* Modal for Compose New Message */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full z-60"
            onClick={(e) => e.stopPropagation()}
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
                onClick={() => setIsModalOpen(false)}
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