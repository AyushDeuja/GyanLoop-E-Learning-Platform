import React from "react";
import { useParams, useNavigate } from "react-router";
import { mockCourses } from "../helpers/mockCourses";
import CustomButton from "../components/CustomButton";
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  Circle,
  ChevronDown,
} from "lucide-react";
import { Line } from "rc-progress";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = mockCourses.find((c) => c.id.toString() === id);
  console.log(course);

  if (!course) return <div className="text-white">Course not found</div>;

  const totalLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );
  const completedLessons = course.modules.reduce(
    (acc, module) =>
      acc + module.lessons.filter((lesson) => lesson.isCompleted).length,
    0
  );
  const progress = Math.floor((completedLessons / totalLessons) * 100);

  return (
    <div className="text-white flex flex-col lg:flex-row gap-8 p-8  min-h-screen">
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-gray-400 text-lg">{course.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} />
            {course.enrolledStudents} students
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            {course.rating} ({course.reviews.length} reviews)
          </span>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 pt-3">Taught by</h3>
          <p className="text-white font-semibold">{course.instructor}</p>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 pt-3">Prerequisites</h3>
          <div className="flex flex-wrap gap-2 pt-1">
            {course.prerequisites.map((item) => (
              <span
                key={item}
                className="bg-gray-700 text-xs px-2 py-1 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-xl font-bold">Course Content</h2>
          <p className="text-sm text-gray-400">
            {course.modules.length} modules • {totalLessons} lessons
          </p>

          <div className="mt-2">
            <p className="text-sm text-gray-400 mb-1">Course Progress</p>
            <Line
              percent={progress}
              strokeWidth={1}
              strokeColor="#ffffff"
              trailColor="#374151"
            />
            <p className="text-sm text-gray-400 mt-1">
              {completedLessons} of {totalLessons} lessons completed ({progress}
              %)
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {course.modules.map((module) => (
              <details
                key={module.id}
                className="rounded-lg bg-gray-800/60 p-4 shadow transition-all"
              >
                <summary className="cursor-pointer font-semibold flex items-center gap-2 text-lg text-white">
                  {module.isCompleted ? (
                    <CheckCircle className="text-green-400 w-5 h-5" />
                  ) : (
                    <Circle className="text-gray-400 w-5 h-5" />
                  )}
                  {module.title}
                  <ChevronDown className="ml-auto w-5 h-5 text-gray-400" />
                </summary>
                <ul className="text-sm text-gray-300 mt-3 space-y-2">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id} className="flex items-center gap-4 p-2">
                      {lesson.isCompleted ? (
                        <CheckCircle className="text-green-400 w-4 h-4" />
                      ) : (
                        <Circle className="text-gray-400 w-4 h-4" />
                      )}
                      <span className="flex-1">{lesson.title}</span>
                      <span className="text-xs text-gray-400">
                        {lesson.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[320px] bg-[#111827] p-6 rounded-xl shadow-md h-fit">
        <img
          src={course.image}
          alt={course.title}
          className="h-[180px] w-full object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-white mb-2">${course.price}</h2>

        <CustomButton
          label="Continue Learning"
          className="mb-3 bg-white !text-black"
          onClick={() => navigate(`/courses/${id}`)}
        />
        <CustomButton
          label="View in Dashboard"
          className="bg-black border border-gray-700 hover:opacity-90"
          onClick={() => navigate("/dashboard")}
        />

        <div className="text-sm text-gray-400 mt-6 space-y-1">
          <p>
            <b className="text-white">Duration:</b> {course.duration}
          </p>
          <p>
            <b className="text-white">Students:</b> {course.enrolledStudents}
          </p>
          <p className="flex items-center gap-1">
            <b className="text-white">Rating:</b>
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            {course.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
