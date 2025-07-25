import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
