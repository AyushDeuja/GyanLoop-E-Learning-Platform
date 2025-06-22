import React from "react";

const SearchBar = ({ search, category, level, onChange }) => {
  return (
    <div className=" p-4 flex flex-col md:flex-row items-center gap-4">
      {/* Search */}
      <div className="flex items-center w-full md:max-w-xl bg-[#0f0f0f] border border-[#1f1f1f] rounded-md px-4 py-2 text-sm text-white">
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search courses, instructors, or topics..."
          className="bg-transparent focus:outline-none w-full placeholder:text-gray-400"
          value={search}
          onChange={(e) => onChange("search", e.target.value)}
        />
      </div>

      {/* Category */}
      <select
        className="bg-[#0f0f0f] border border-[#1f1f1f] text-white text-sm px-3 py-2 rounded-md focus:outline-none"
        value={category}
        onChange={(e) => onChange("category", e.target.value)}
      >
        <option value="">All Categories</option>
        <option>Programming</option>
        <option>Web Development</option>
        <option>Design</option>
        <option>Computer Science</option>
        <option>Data Analysis</option>
      </select>

      {/* Level */}
      <select
        className="bg-[#0f0f0f] border border-[#1f1f1f] text-white text-sm px-3 py-2 rounded-md focus:outline-none"
        value={level}
        onChange={(e) => onChange("level", e.target.value)}
      >
        <option value="">All Levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default SearchBar;
