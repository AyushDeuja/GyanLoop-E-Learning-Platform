import React from "react";
import { Check } from "lucide-react";

const ProgressSection = ({ title, lessons }) => {
  return (
    <div className="mb-6">
      <h3 className="text-white font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
              lesson.completed
                ? "bg-gray-800 border border-gray-700"
                : lesson.title === "Introduction to React"
                ? "bg-blue-600 border border-blue-500"
                : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            <span
              className={`text-sm ${
                lesson.completed ? "text-gray-300" : "text-white"
              }`}
            >
              {lesson.title}
            </span>
            {lesson.completed && <Check size={16} className="text-green-400" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseProgress = () => {
  const fundamentalsLessons = [
    { title: "Introduction to React", completed: false },
    { title: "Components and JSX", completed: true },
  ];

  const quizLessons = [{ title: "React Basics Quiz", completed: false }];

  const stateAndPropsLessons = [
    { title: "Understanding State", completed: false },
    { title: "Props Deep Dive", completed: false },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg h-fit">
      <h2 className="text-white text-xl font-bold mb-6">Course Progress</h2>

      <ProgressSection
        title="React Fundamentals"
        lessons={fundamentalsLessons}
      />
      <ProgressSection title="" lessons={quizLessons} />
      <ProgressSection title="State and Props" lessons={stateAndPropsLessons} />
    </div>
  );
};

export default CourseProgress;
