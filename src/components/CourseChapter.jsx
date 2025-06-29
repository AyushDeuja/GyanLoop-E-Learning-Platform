// components/CourseChapter.jsx
import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { markLessonCompleted } from "../redux/courseSlice";

const CourseChapter = ({ course, activeLessonId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.user.email);
  const completedLessons =
    useSelector(
      (state) => state.course.completedLessons[userEmail]?.[course.id]
    ) || [];

  if (!course) return <div className="text-white">No course data</div>;

  const handleLessonClick = (lesson) => {
    navigate(`/courses/${course.id}/lessons/${lesson.id}`);
    dispatch(
      markLessonCompleted({
        userEmail,
        courseId: course.id,
        lessonId: lesson.id,
      })
    );
  };

  return (
    <div className="bg-gray-950 p-6 my-41 rounded-lg h-fit">
      <h2 className="text-white text-xl font-bold mb-6">Course Progress</h2>
      {course.modules.map((module) => (
        <div key={module.id} className="mb-6">
          <h3 className="text-white font-semibold mb-3">{module.title}</h3>
          <div className="space-y-2">
            {module.lessons.map((lesson) => {
              const isActive = lesson.id === activeLessonId;
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson)}
                  className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors
                    ${
                      isActive
                        ? "bg-blue-600 border border-blue-500"
                        : isCompleted
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                    }`}
                >
                  <span
                    className={`text-sm truncate ${
                      isActive
                        ? "text-white font-semibold"
                        : isCompleted
                        ? "text-gray-300"
                        : "text-white"
                    }`}
                  >
                    {lesson.title}
                  </span>
                  {isCompleted && (
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

export default CourseChapter;
