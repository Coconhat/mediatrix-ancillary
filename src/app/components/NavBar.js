"use client"; // Marking the file as client-side

import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import { useState, useRef, useEffect } from "react";
import useSearch from "../hooks/useSearch"; // Import the custom hook

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

  const { searchTerm, setSearchTerm, filteredItems, handleSearch } =
    useSearch(items);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [showNoResults, setShowNoResults] = useState(false); // State to track "No results"
  const [notifications, setNotifications] = useState({
    dashboard: 1, // Example: 1 new notification for Dashboard
    inbox: 2, // Example: 2 new notifications for Inbox
  }); // State for notifications
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu visibility state
  const modalRef = useRef(null); // Ref for modal
  const inputRef = useRef(null); // Ref for search input

  // Close the modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsModalOpen(false); // Close modal if clicked outside
        setSearchTerm(""); // Clear search term
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearchTerm]); // Add setSearchTerm to the dependency array

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-700 px-4 lg:px-6 py-4 font-semibold shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-20">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-lg lg:text-xl">
            <Link
              href="/home"
              className="hover:text-blue-800 transition duration-300"
            >
              <span className="lg:hidden">ACUP</span>{" "}
            </Link>

            <Link
              href="/home"
              className="hover:text-blue-800 transition duration-300"
            >
              <span className="hidden lg:inline">
                Ancillary Communication and Updates Platform
              </span>{" "}
            </Link>
          </h1>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-12">
          <Link
            href="/dashboard"
            className="hover:text-blue-800 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/news"
            className="hover:text-blue-800 transition duration-300"
          >
            News & Announcements
          </Link>
          <Link
            href="/inbox"
            className="hover:text-blue-800 transition duration-300"
          >
            Inbox
          </Link>

          <Link
            href="/edit"
            className="hover:text-blue-800 transition duration-300"
          >
            Edit
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsModalOpen(true)}
            className="px-8 py-2 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm w-48 lg:w-64"
            aria-label="Search"
          />
          <button
            onClick={onSearchClick}
            className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900 transition duration-300 absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Search"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li className="relative">
              <Link
                href="/dashboard"
                className="hover:text-blue-800 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              {notifications.dashboard > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                  {notifications.dashboard}
                </span>
              )}
            </li>
            <li>
              <Link
                href="/news"
                className="hover:text-blue-800 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Announcements
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/inbox"
                className="hover:text-blue-800 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inbox
              </Link>

              {notifications.inbox > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                  {notifications.inbox}
                </span>
              )}
            </li>

            <li>
              <Link
                href="/edit"
                className="hover:text-blue-800 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Edit
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Search Results Modal */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="absolute top-full mt-2 right-0 w-64 bg-white shadow-lg p-4 rounded-lg z-10"
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
                      <li
                        key={index}
                        className="p-2 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition duration-300"
                      >
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
