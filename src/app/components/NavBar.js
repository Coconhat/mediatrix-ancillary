"use client"; // Marking the file as client-side

import Link from "next/link";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons
import { useState, useRef, useEffect } from 'react';
import useSearch from '../hooks/useSearch'; // Import the custom hook

const Navbar = () => {
  const items = [
    "Announcement 1",
    "Memo 2",
    "Important Update",
    "Meeting Reminder",
    "New Policy Announcement",
    "Event Notice",
    "System Maintenance",
  ]; // Example items for search

  const { searchTerm, setSearchTerm, filteredItems, handleSearch } = useSearch(items);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [showNoResults, setShowNoResults] = useState(false); // State to track "No results"
  const [notifications, setNotifications] = useState({
    dashboard: 1, // Example: 3 new notifications for Dashboard
    inbox: 2, // Example: 5 new notifications for Inbox
  }); // State for notifications
  const modalRef = useRef(null); // Ref for modal
  const inputRef = useRef(null); // Ref for search input

  // Close the modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
        setIsModalOpen(false); // Close modal if clicked outside
        setSearchTerm(""); // Clear search term
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle search
  const onSearchClick = () => {
    if (searchTerm.trim() !== "") {
      handleSearch();
      setIsModalOpen(true); // Open the modal after searching
      setShowNoResults(filteredItems.length === 0); // Show "No results found" if filteredItems is empty
    }
  };

  // Update modal visibility when filtered items change
  useEffect(() => {
    if (searchTerm === "") {
      setIsModalOpen(false); // Close modal if no search term
      setShowNoResults(false); // Reset "No results found" state
    }
  }, [searchTerm]);

  return (
    <nav className="bg-white text-gray-700 px-6 py-4 font-semibold shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-bold">Ancillary Communication and Updates Platform</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link href="/dashboard" className="hover:text-blue-800">
                Dashboard
              </Link>
              {notifications.dashboard > 0 && (
                <span className="absolute top-[-11px] right-[-10px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
                  {notifications.dashboard}
                </span>
              )}
            </li>

            <li className="relative">
              <Link href="/inbox" className="hover:text-blue-800">
                Inbox
              </Link>
              {notifications.inbox > 0 && (
                <span className="absolute top-[-11px] right-[-10px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
                  {notifications.inbox}
                </span>
              )}
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 relative">
          <input
            ref={inputRef} // Attach ref to input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            onFocus={() => setIsModalOpen(true)} // Open modal when focused
            className="px-8 py-2 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm w-64"
          />
          <button
            onClick={onSearchClick} // Trigger search function on click
            className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900 absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>
      </div>

      {/* Search Results Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="absolute top-16 right-0 w-64 bg-white shadow-lg p-4 rounded-lg z-10"
        >
          <div className="max-h-80 overflow-y-auto">
            {/* Show "No results found" only if user has searched */}
            {searchTerm && (
              <>
                {showNoResults ? (
                  <p className="text-center text-gray-500">No results found</p>
                ) : (
                  <ul className="space-y-2">
                    {filteredItems.map((item, index) => (
                      <li key={index} className="p-2 bg-blue-50 rounded-lg border border-blue-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
