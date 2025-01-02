"use client";

import { useState } from "react";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    "Announcement 1",
    "Memo 2",
    "Important Update",
    "Meeting Reminder",
    "New Policy Announcement",
    "Event Notice",
    "System Maintenance",
  ]; // Example data for search

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setFilteredItems([]);
    } else {
      setFilteredItems(
        items.filter((item) => item.toLowerCase().includes(term))
      );
    }
  };

  return (
    <div className="h-screen bg-[#F1F8FF] flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Search Announcements and Memos
        </h2>
        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Search for announcements or memos..."
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 right-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 4a7 7 0 1114 0 7 7 0 01-14 0zM16.293 16.293l3.682 3.682a1 1 0 001.415-1.414l-3.682-3.682a9 9 0 111.414-1.415l3.682 3.682"
            />
          </svg>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {filteredItems.length === 0 && searchTerm !== "" ? (
            <p className="text-center text-gray-500">No results found</p>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-blue-50 rounded-lg border border-blue-200"
              >
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
