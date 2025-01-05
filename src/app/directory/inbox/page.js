"use client";
import React, { useState, useEffect } from "react";
import { DirectorySidebar } from "@/components/directory-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PlusCircle, MoreHorizontal, Menu } from "lucide-react"; // Added Menu icon
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Messenger() {
  const [messageText, setMessageText] = useState("");
  const [currentConversation, setCurrentConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserList, setShowUserList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarOption, setSidebarOption] = useState("");
  const [isMobile, setIsMobile] = useState(false); // State to check if the screen is mobile
  const [showContacts, setShowContacts] = useState(false); // State to toggle contacts sidebar on mobile

  // Sample users
  const users = [
    { id: 1, name: "Alice", role: "Employee" },
    { id: 2, name: "Bob", role: "Manager" },
    { id: 3, name: "Charlie", role: "Employee" },
  ];

  // Get conversations from localStorage
  useEffect(() => {
    const storedConversations = JSON.parse(
      localStorage.getItem("conversations")
    );
    if (storedConversations) {
      setConversations(storedConversations);
    } else {
      // Add default conversations
      const defaultConversations = [
        {
          id: 1,
          name: "Alice",
          profilePic: "https://via.placeholder.com/40",
          messages: [
            {
              sender: "You",
              text: "Hi, Alice!",
              timestamp: new Date().toLocaleString(),
            },
            {
              sender: "Alice",
              text: "Hello, how are you?",
              timestamp: new Date().toLocaleString(),
            },
          ],
        },
        {
          id: 2,
          name: "Bob",
          profilePic: "https://via.placeholder.com/40",
          messages: [
            {
              sender: "You",
              text: "Hey Bob, what's up?",
              timestamp: new Date().toLocaleString(),
            },
            {
              sender: "Bob",
              text: "All good, thanks!",
              timestamp: new Date().toLocaleString(),
            },
          ],
        },
      ];
      setConversations(defaultConversations);
    }
  }, []);

  // Save conversations to localStorage
  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem("conversations", JSON.stringify(conversations));
    }
  }, [conversations]);

  // Handle window resize to check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    const newMessage = {
      sender: "You",
      text: messageText,
      timestamp: new Date().toLocaleString(),
    };
    const updatedConversations = conversations.map((convo) =>
      convo.id === currentConversation.id
        ? { ...convo, messages: [...convo.messages, newMessage] }
        : convo
    );
    setConversations(updatedConversations);
    setMessageText("");
    setCurrentConversation(
      updatedConversations.find((convo) => convo.id === currentConversation.id)
    );
  };

  const handleCreateNewConversation = (userName) => {
    const existingConvo = conversations.find(
      (convo) => convo.name === userName
    );
    if (existingConvo) {
      setCurrentConversation(existingConvo);
      setShowUserList(false);
      return;
    }

    const newConvo = {
      id: conversations.length + 1,
      name: userName,
      profilePic: "https://via.placeholder.com/40",
      messages: [
        {
          sender: "You",
          text: "Hi, how are you?",
          timestamp: new Date().toLocaleString(),
        },
        {
          sender: userName,
          text: "I'm good, thanks! How about you?",
          timestamp: new Date().toLocaleString(),
        },
      ],
    };
    const updatedConversations = [...conversations, newConvo];
    setConversations(updatedConversations);
    setCurrentConversation(newConvo);
    setShowUserList(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSidebarOption = (option) => {
    setSidebarOption(option);
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DirectorySidebar />
        <div className="flex-1 bg-gray-50 flex flex-col">
          {/* Sticky Header with Breadcrumb */}
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 bg-white shadow-sm transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      ACUP Management
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Messenger</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <div className="container mx-auto flex-1 px-6 py-6 flex">
            {/* Left Sidebar - Contacts/Conversations */}
            <div
              className={`w-1/4 bg-white border-r border-gray-200 p-4 space-y-4 ${
                isMobile ? (showContacts ? "block" : "hidden") : "block"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-800">
                  Conversations
                </h2>
                <div
                  className="flex items-center cursor-pointer ml-4"
                  onClick={() => setShowUserList(true)}
                >
                  <PlusCircle className="mr-2" />
                  <span className="text-sm text-nowrap">New Message</span>
                </div>
              </div>
              <div className="space-y-3">
                {conversations.map((convo) => (
                  <div
                    key={convo.id}
                    className={`flex items-center p-3 cursor-pointer hover:bg-gray-200 rounded-lg ${
                      convo.id === currentConversation?.id ? "bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setCurrentConversation(convo);
                      if (isMobile) setShowContacts(false); // Hide contacts on mobile after selection
                    }}
                  >
                    <Image
                      src={convo.profilePic}
                      alt={convo.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-black">
                        {convo.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {convo.messages[convo.messages.length - 1]?.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Chat View */}
            <div
              className={`flex-1 bg-white p-4 flex flex-col ${
                isMobile && showContacts ? "hidden" : "block"
              }`}
            >
              {currentConversation ? (
                <>
                  <div className="flex items-center mb-4 border-b border-gray-300 pb-4">
                    {isMobile && (
                      <Menu
                        className="cursor-pointer mr-3"
                        onClick={toggleContacts}
                      />
                    )}
                    <Image
                      src={currentConversation.profilePic}
                      alt={currentConversation.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <h2 className="text-2xl font-bold text-blue-800">
                      {currentConversation.name}
                    </h2>
                    <div className="ml-auto">
                      <MoreHorizontal
                        className="cursor-pointer"
                        onClick={() => handleSidebarOption("Chat Info")}
                      />
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto mt-4 space-y-4">
                    {currentConversation.messages.length > 0 ? (
                      currentConversation.messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            message.sender === "You"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`p-3 rounded-lg max-w-xs ${
                              message.sender === "You"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                          >
                            <p>{message.text}</p>
                            <span className="text-xs text-gray-400">
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-gray-500 mt-20">
                        No messages yet.
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="cursor-pointer text-blue-600 p-3 mr-4">
                      <span className="font-semibold">+</span>
                      <div className="text-sm">Add Attachment</div>
                    </div>
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="flex-1 p-3 border border-gray-300 rounded-lg"
                      placeholder="Type a message"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="ml-4 bg-blue-600 text-white p-3 rounded-lg"
                    >
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 mt-20">
                  Select a conversation to start chatting.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User List Modal for New Conversation */}
      {showUserList && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowUserList(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Select a user to start a conversation
            </h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Users..."
              className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
            />
            <div className="space-y-3">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center p-3 cursor-pointer hover:bg-gray-200 rounded-lg"
                  onClick={() => handleCreateNewConversation(user.name)}
                >
                  <Image
                    src="https://via.placeholder.com/40"
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-black">
                      {user.name}
                    </span>
                    <span className="text-sm text-gray-500">{user.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </SidebarProvider>
  );
}
