import React from "react";
import ProgressBar from "./ProgressBar";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router";
import { Clock } from "lucide-react";

const DashboardCard = ({
  title,
  instructor,
  progress,
  duration,
  courseId,
  image,
  firstLessonId,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 p-4 rounded-xl flex flex-col justify-between h-full">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded-lg shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <p className="text-sm text-gray-400 truncate">by {instructor}</p>
        </div>
        <span className="text-sm text-green-400 sm:ml-auto mt-2 sm:mt-0 shrink-0">
          In Progress
        </span>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <p className="text-sm mb-1">Progress</p>
        <ProgressBar progress={progress} />
        <p className="text-xs text-right mt-1">{progress}%</p>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-1 text-sm text-gray-400 mt-2">
        <Clock className="w-4 h-4" />
        <span>{duration}</span>
      </div>

      {/* Button */}
      <CustomButton
        className="mt-4 w-full bg-white !text-black py-2 rounded-lg"
        label={"Continue Learning"}
        onClick={() =>
          navigate(`/courses/${courseId}/lessons/${firstLessonId}`)
        }
      />
    </div>
  );
};

export default DashboardCard;
