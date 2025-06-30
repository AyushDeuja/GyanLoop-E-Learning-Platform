import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ search, category, level, onChange }) => {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="w-full flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center flex-grow bg-gray-900 border border-[#1f1f1f] rounded-md px-4 py-3 text-sm text-white min-w-0">
          <Search className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search courses or instructors"
            className="bg-transparent focus:outline-none w-full placeholder:text-gray-400 min-w-0"
            value={search}
            onChange={(e) => onChange("search", e.target.value)}
          />
        </div>

        <select
          className="flex-shrink-0 bg-gray-900 border border-[#1f1f1f] text-white text-sm px-3 py-3 rounded-md focus:outline-none w-full sm:w-auto"
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

        <select
          className="flex-shrink-0 bg-gray-900 border border-[#1f1f1f] text-white text-sm px-3 py-3 rounded-md focus:outline-none w-full sm:w-auto"
          value={level}
          onChange={(e) => onChange("level", e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
