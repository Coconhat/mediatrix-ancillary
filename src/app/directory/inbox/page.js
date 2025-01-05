"use client";
import React, { useState, useEffect, useRef } from "react";
import { DirectorySidebar } from "@/components/directory-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PlusCircle, Menu, Paperclip, MoreHorizontal, X } from "lucide-react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

  export default function Messenger() {
    const [messageText, setMessageText] = useState("");
    const [currentConversation, setCurrentConversation] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showUserList, setShowUserList] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [sidebarOption, setSidebarOption] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    // Sample users
    const users = [
      { id: 1, name: "Alice", role: "Employee" },
      { id: 2, name: "Bob", role: "Manager" },
      { id: 3, name: "Charlie", role: "Employee" },
    ];

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      scrollToBottom();
    }, [currentConversation?.messages]);

    // Get conversations from localStorage
    useEffect(() => {
      const storedConversations = JSON.parse(localStorage.getItem("conversations"));
      if (storedConversations) {
        setConversations(storedConversations);
      } else {
        const defaultConversations = [
          {
            id: 1,
            name: "Alice",
            profilePic: "https://via.placeholder.com/40",
            messages: [
              { sender: "You", text: "Hi, Alice!", timestamp: new Date().toLocaleString() },
              { sender: "Alice", text: "Hello, how are you?", timestamp: new Date().toLocaleString() },
            ],
          },
          {
            id: 2,
            name: "Bob",
            profilePic: "https://via.placeholder.com/40",
            messages: [
              { sender: "You", text: "Hey Bob, what's up?", timestamp: new Date().toLocaleString() },
              { sender: "Bob", text: "All good, thanks!", timestamp: new Date().toLocaleString() },
            ],
          },
        ];
        setConversations(defaultConversations);
      }
    }, []);

    useEffect(() => {
      if (conversations.length > 0) {
        localStorage.setItem("conversations", JSON.stringify(conversations));
      }
    }, [conversations]);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
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
      const existingConvo = conversations.find((convo) => convo.name === userName);
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
          { sender: "You", text: "Hi, how are you?", timestamp: new Date().toLocaleString() },
          { sender: userName, text: "I'm good, thanks! How about you?", timestamp: new Date().toLocaleString() },
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

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        // Create a message with file information
        const newMessage = {
          sender: "You",
          text: `File: ${file.name}`,
          timestamp: new Date().toLocaleString(),
          isFile: true,
          fileName: file.name,
          fileSize: `${(file.size / 1024).toFixed(2)} KB`,
        };
        
        const updatedConversations = conversations.map((convo) =>
          convo.id === currentConversation.id
            ? { ...convo, messages: [...convo.messages, newMessage] }
            : convo
        );
        setConversations(updatedConversations);
        setCurrentConversation(
          updatedConversations.find((convo) => convo.id === currentConversation.id)
        );
      }
    };

    const handleAttachmentClick = () => {
      fileInputRef.current?.click();
    };

    const handleDeleteConversation = () => {
      const updatedConversations = conversations.filter(
        (convo) => convo.id !== currentConversation.id
      );
      setConversations(updatedConversations);
      setCurrentConversation(null);
    };

    const handleClearChat = () => {
      const updatedConversations = conversations.map((convo) =>
        convo.id === currentConversation.id
          ? { ...convo, messages: [] }
          : convo
      );
      setConversations(updatedConversations);
      setCurrentConversation(updatedConversations.find((convo) => convo.id === currentConversation.id));
    };

    const [showProfile, setShowProfile] = useState(false);

    return (
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <DirectorySidebar />
          <div className="flex-1 flex flex-col max-h-screen overflow-hidden">
            {/* Header - Fixed height */}
            <header className="h-16 shrink-0 bg-white border-b border-gray-200">
              <div className="flex items-center h-full px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">ACUP Management</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Messenger</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
  
            {/* Main Content - Fill remaining height */}
            <div className="flex flex-1 min-h-0">
              {/* Contacts Sidebar */}
              <div
                className={`${
                  isMobile ? (showContacts ? "block" : "hidden") : "block"
                } w-80 bg-white border-r border-gray-200 flex flex-col min-h-0`}
              >
                {/* Conversations Header - Fixed height */}
                <div className="h-14 px-4 flex items-center justify-between border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-blue-800">Conversations</h2>
                  <button
                    className="flex items-center text-blue-600 hover:text-blue-700"
                    onClick={() => setShowUserList(true)}
                  >
                    <PlusCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">New Message</span>
                  </button>
                </div>
  
                {/* Conversations List - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                  {conversations.map((convo) => (
                    <div
                      key={convo.id}
                      className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-100 ${
                        convo.id === currentConversation?.id ? "bg-gray-100" : ""
                      }`}
                      onClick={() => {
                        setCurrentConversation(convo);
                        if (isMobile) setShowContacts(false);
                      }}
                    >
                      <Image
                        src={convo.profilePic}
                        alt={convo.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <div className="font-semibold">{convo.name}</div>
                        <div className="text-sm text-gray-500 truncate">
                          {convo.messages[convo.messages.length - 1]?.text || "No messages yet"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Chat Area */}
              <div className={`flex-1 flex flex-col min-h-0 ${isMobile && showContacts ? "hidden" : "block"} ${isMobile ? "h-screen" : "h-auto"}`}>

                {currentConversation ? (
                  <>
                    {/* Chat Header - Fixed height */}
                    <div className="h-14 flex items-center px-4 border-b border-gray-200 bg-white">
                      {isMobile && (
                        <button className="mr-3" onClick={toggleContacts}>
                          <Menu className="h-6 w-6" />
                        </button>
                      )}
                      <Image
                        src={currentConversation.profilePic}
                        alt={currentConversation.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <h2 className="text-lg font-semibold">{currentConversation.name}</h2>
                      <div className="ml-auto">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <MoreHorizontal className="h-5 w-5" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setShowProfile(true)}>
                              View Profile
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
  
                    {/* Messages - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-4 min-h-0">
                      {currentConversation.messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex mb-4 ${
                            message.sender === "You" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              message.sender === "You"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {message.isFile ? (
                              <div className="flex items-center space-x-2">
                                <Paperclip className="h-4 w-4" />
                                <div>
                                  <div className="font-medium">{message.fileName}</div>
                                  <div className="text-xs opacity-75">{message.fileSize}</div>
                                </div>
                              </div>
                            ) : (
                              <div>{message.text}</div>
                            )}
                            <div className="text-xs opacity-75 mt-1">
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
  
                    {/* Message Input - Fixed height */}
                    <div className="flex-shrink-0 px-4 py-3 border-t border-gray-200 bg-white overflow-hidden">
                      <div className="flex items-center gap-4 h-12">
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Paperclip className="h-6 w-6" />
                        </button>
                        <input
                          type="text"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyDown={handleKeyPress}
                          placeholder="Type a message"
                          className="flex-1 p-2 border border-gray-300 rounded-lg"
                        />
                        <button
                          onClick={handleSendMessage}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-500">
                    Select a conversation to start chatting
                  </div>
                )}
              </div>
            </div>
          </div>
    
          {/* User List Modal for New Conversation */}
          {/* User List Modal */}
        {showUserList && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">New Conversation</h2>
                <button onClick={() => setShowUserList(false)}>×</button>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search users..."
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <div className="space-y-2">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => handleCreateNewConversation(user.name)}
                  >
                    <Image
                      src="https://via.placeholder.com/40"
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Sheet */}
        <Sheet open={showProfile} onOpenChange={setShowProfile}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Profile Information</SheetTitle>
            </SheetHeader>
            {currentConversation && (
              <div className="mt-6 space-y-6">
                <div className="flex justify-center">
                  <Image
                    src={currentConversation.profilePic}
                    alt={currentConversation.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold">{currentConversation.name}</h3>
                  <p className="text-gray-500">Online</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p>{currentConversation.name.toLowerCase()}@example.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Role</h4>
                    <p>Employee</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Department</h4>
                    <p>Engineering</p>
                  </div>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </SidebarProvider>
  );
};