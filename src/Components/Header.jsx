import React, { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [search, setSearch] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (which would refresh the page).

    if (search.trim()) {
      // Check if the search input is not empty or just whitespace. The 'trim()' method removes any surrounding spaces.

      setInputValue(search);
      setSearch("");
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(search);
      setSearch("");
    }
  };

  return (
    <div className="bg-gray-700">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Simple Dictionary
        </h1>
        <p className="text-center mt-1 mb-10 text-slate-300 text-lg">
          Find definition of terms
        </p>
        <div className="flex items-center justify-center mt-5">
          <div className="flex border-2 border-gray-200 rounded">
            <input
              className="px-4 py-2 md:w-80"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleInputKeyDown}
              value={search}
            />

            <button
              className="px-4 py-2 border-l border-l-gray-300 bg-blue-400 text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>

        {/* Conditionally display the result if 'inputValue' exists */}
        {inputValue && (
          <h3 className="text-gray-50 text-center mt-4">
            Result for: <span>{inputValue}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
