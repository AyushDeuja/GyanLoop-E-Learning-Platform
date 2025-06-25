import { useParams, useNavigate } from "react-router";
import { mockCourses } from "../helpers/mockCourses";
import VideoPlayer from "../components/VideoPlayer";
import CourseProgress from "../components/CourseProgress";
import CustomButton from "../components/CustomButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LessonPage = () => {
  const { id: courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-3xl">
        Course not found
      </div>
    );
  }

  const module = course.modules.find((m) =>
    m.lessons.some((l) => l.id === lessonId)
  );

  if (!module) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-3xl">
        Lesson not found
      </div>
    );
  }

  const lesson = module.lessons.find((l) => l.id === lessonId);

  const allLessons = course.modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  const nextLesson = allLessons[currentIndex + 1];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                onClick={() => navigate(`/courses/${courseId}`)}
              >
                <ArrowLeft size={20} />
                <span>Back </span>
              </button>

              <div>
                <h1 className="text-white text-2xl font-bold mb-2">
                  {lesson.title}
                </h1>
                <p className="text-gray-400 mb-4">{course.title}</p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Duration: {lesson.duration}</span>
                  <span>Type: {lesson.type}</span>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        lesson.isCompleted ? "bg-green-400" : "bg-gray-600"
                      }`}
                    ></div>
                    <span
                      className={`${
                        lesson.isCompleted ? "text-green-400" : "text-gray-600"
                      }`}
                    >
                      {lesson.isCompleted ? "Completed" : "Not completed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <VideoPlayer videoUrl={lesson.videoUrl} />

            <div className="mt-6 flex justify-end">
              <div className="w-48">
                {nextLesson && (
                  <CustomButton
                    label="Next Lesson"
                    buttonIcon={<ArrowRight size={16} />}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() =>
                      navigate(`/courses/${courseId}/lessons/${nextLesson.id}`)
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <CourseProgress course={course} activeLessonId={lessonId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
