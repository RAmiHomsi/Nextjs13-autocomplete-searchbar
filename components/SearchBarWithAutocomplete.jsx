"use client";
import React, { useState } from "react";

const SearchBarWithAutocomplete = ({ suggestions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    // Filter suggestions based on the input
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(input.toLowerCase())
    );

    if (input !== "") {
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([""]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <div className="absolute py-3 right-4 flex items-center justify-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        className="bg-yellow-50 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        required
      />
      {showSuggestions && (
        <div className="absolute z-50 left-0 mt-2 py-2 bg-slate-500 border border-gray-300 rounded-lg w-full">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBarWithAutocomplete;
