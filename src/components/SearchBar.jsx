// src/SearchBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing the search icon

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false); // State to manage visibility of input
  const navigate = useNavigate();
  const menuRef = useRef(null); // Ref for the search bar container

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to the search results page with the search term
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // Clear the input after searching
      setIsActive(false); // Hide input after searching
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className={`border-gray-300 bg-gray rounded transition-all duration-300 ease-in-out p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isActive || window.innerWidth < 768
              ? "md:w-[12rem] h-[30px] opacity-100 -bg-gray"
              : "w-0 opacity-0"
          }`}
          style={{
            transition: "width 300ms ease-in-out, opacity 300ms ease-in-out",
            overflow: "hidden",
            width: isActive
              ? searchTerm.length > "0"
                ? "12rem"
                : "6rem"
              : "0" | window.innerWidth < 768 ? "90vw" : "0" | window.innerWidth > 768 ? "0" : "0",
          }}
          onBlur={() => setIsActive(false)} // Hide input when it loses focus
        />
        <button
          type="submit"
          className={`ml-2 bg-blue-500 text-white rounded p-2 ${
            isActive || window.innerWidth < 768 ? "block" : "hidden"
          }`}
        >
          <FaSearch className="md:text-[20px]" />
        </button>
        {!isActive && window.innerWidth >= 768 && (
          <button
            type="button"
            onClick={() => setIsActive(true)}
            className="flex items-center ml-2"
          >
            <FaSearch className="md:text-[20px]" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
