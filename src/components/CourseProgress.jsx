import { Check } from "lucide-react";

const ProgressSection = ({ title, lessons }) => {
  return (
    <div className="mb-6">
      {title && <h3 className="text-white font-semibold mb-3">{title}</h3>}
      <div className="space-y-2">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
              lesson.isCompleted
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            <span
              className={`text-sm ${
                lesson.isCompleted ? "text-gray-300" : "text-white"
              }`}
            >
              {lesson.title}
            </span>
            {lesson.isCompleted && (
              <Check size={16} className="text-green-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseProgress = ({ modules }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg h-fit">
      <h2 className="text-white text-xl font-bold mb-6">Course Progress</h2>
      {modules.map((module) => (
        <ProgressSection
          key={module.id}
          title={module.title}
          lessons={module.lessons}
        />
      ))}
    </div>
  );
};

export default CourseProgress;
