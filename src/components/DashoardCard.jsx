import React from "react";
import ProgressBar from "./ProgressBar";

const DashboardCard = ({ title, instructor, progress, duration }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-600 rounded-lg" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-400">by {instructor}</p>
        </div>
        <span className="text-sm text-green-400">In Progress</span>
      </div>
      <div className="mt-4">
        <p className="text-sm mb-1">Progress</p>
        <ProgressBar progress={progress} />
        <p className="text-xs text-right mt-1">{progress}%</p>
      </div>
      <div className="text-sm text-gray-400 mt-2">⏱ {duration}</div>
      <button className="mt-4 w-full bg-white text-black py-2 rounded-lg">
        Continue
      </button>
    </div>
  );
};

export default DashboardCard;
