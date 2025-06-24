import React from "react";
import { useParams } from "react-router";
import { mockCourses } from "../helpers/mockCourses";
import VideoPlayer from "../components/VideoPlayer";
import CourseProgress from "../components/CourseProgress";

const LessonPage = () => {
  const { courseId, lessonId } = useParams();

  const course = mockCourses.find((c) => c.id === courseId);
  const module = course?.modules.find((m) =>
    m.lessons.some((l) => l.id === lessonId)
  );
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  if (!course || !module || !lesson)
    return <div className="text-white p-6">Lesson not found</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-gray-400 mb-4">{course.title}</p>
          <VideoPlayer videoUrl={lesson.videoUrl} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CourseProgress modules={course.modules} />
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
