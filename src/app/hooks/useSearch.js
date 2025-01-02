"use client";  // Marking this file as client-side

import { useState } from 'react';

const useSearch = (items) => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredItems([]);
    } else {
      setFilteredItems(
        items.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
    handleSearch
  };
};

export default useSearch;
