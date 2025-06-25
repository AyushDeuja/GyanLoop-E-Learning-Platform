import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router";

const CourseProgress = ({ course, activeLessonId }) => {
  const navigate = useNavigate();

  if (!course) return <div className="text-white">No course data</div>;

  return (
    <div className="bg-gray-950 p-6 my-41 rounded-lg h-fit">
      <h2 className="text-white text-xl font-bold mb-6">Course Progress</h2>

      {course.modules.map((module) => (
        <div key={module.id} className="mb-6">
          <h3 className="text-white font-semibold mb-3">{module.title}</h3>
          <div className="space-y-2">
            {module.lessons.map((lesson) => {
              const isActive = lesson.id === activeLessonId;

              return (
                <div
                  key={lesson.id}
                  onClick={() =>
                    navigate(`/courses/${course.id}/lessons/${lesson.id}`)
                  }
                  className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors
                    ${
                      lesson.isCompleted
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                    }
                    ${isActive ? "border-blue-500 bg-blue-600" : ""}
                  `}
                  title={lesson.title}
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
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseProgress;
