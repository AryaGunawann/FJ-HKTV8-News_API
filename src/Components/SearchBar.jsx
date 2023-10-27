import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <div className="search-bar flex items-center">
      <input
        type="text"
        placeholder="Search Category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none ml-2"
      >
        Cari
      </button>
    </div>
  );
};

export default SearchBar;
