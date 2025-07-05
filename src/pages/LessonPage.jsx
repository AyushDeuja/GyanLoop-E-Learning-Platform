import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { mockCourses } from "../helpers/mockCourses";
import VideoPlayer from "../components/VideoPlayer";
import CustomButton from "../components/CustomButton";
import QuizLesson from "../components/QuizLesson";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CourseChapter from "../components/CourseChapter";
import { markLessonCompleted } from "../redux/courseSlice";

const LessonPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.user.email);

  const courseId = params.id;
  const lessonId = params.lessonId;

  const [localCourse, setLocalCourse] = useState(null);
  const [autoMarked, setAutoMarked] = useState(false);

  const course = mockCourses.find((c) => c.id === courseId);

  useEffect(() => {
    if (!course) return;

    const firstLesson = course.modules[0]?.lessons[0];

    if (!lessonId && firstLesson) {
      navigate(`/courses/${courseId}/lessons/${firstLesson.id}`, {
        replace: true,
      });
    } else {
      setLocalCourse(JSON.parse(JSON.stringify(course)));
    }
  }, [courseId, lessonId]);

  useEffect(() => {
    if (!localCourse) return;

    const firstLesson = localCourse.modules[0]?.lessons[0];
    const isFirst = firstLesson?.id === lessonId;

    if (isFirst && firstLesson?.type === "video" && !autoMarked) {
      dispatch(
        markLessonCompleted({
          userEmail,
          courseId,
          lessonId: firstLesson.id,
        })
      );
      setAutoMarked(true);
    }
  }, [localCourse, lessonId]);

  if (!course || !lessonId || !localCourse) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-3xl">
        Loading...
      </div>
    );
  }

  const allLessons = localCourse.modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  const nextLesson = allLessons[currentIndex + 1];
  const previousLesson = allLessons[currentIndex - 1];

  const module = localCourse.modules.find((m) =>
    m.lessons.some((l) => l.id === lessonId)
  );
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  const markLessonCompletedLocal = () => {
    setLocalCourse((prevCourse) => {
      const updated = JSON.parse(JSON.stringify(prevCourse));
      for (const m of updated.modules) {
        const found = m.lessons.find((l) => l.id === lessonId);
        if (found) {
          found.isCompleted = true;
          break;
        }
      }
      return updated;
    });

    if (lesson.type === "video") {
      dispatch(
        markLessonCompleted({
          userEmail,
          courseId,
          lessonId: lesson.id,
        })
      );
    }
  };

  const markLessonCompletedById = (lessonIdToMark) => {
    setLocalCourse((prevCourse) => {
      const updated = JSON.parse(JSON.stringify(prevCourse));
      for (const m of updated.modules) {
        const found = m.lessons.find((l) => l.id === lessonIdToMark);
        if (found) {
          found.isCompleted = true;
          break;
        }
      }
      return updated;
    });

    dispatch(
      markLessonCompleted({
        userEmail,
        courseId,
        lessonId: lessonIdToMark,
      })
    );
  };

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
                <span>Back</span>
              </button>

              <div>
                <h1 className="text-white text-2xl font-bold mb-2">
                  {lesson.title}
                </h1>
                <p className="text-gray-400 mb-4">{localCourse.title}</p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Duration: {lesson.duration}</span>
                  <span>Type: {lesson.type}</span>
                </div>
              </div>
            </div>

            {lesson.type === "video" ? (
              <VideoPlayer
                key={lesson.id}
                videoUrl={lesson.videoUrl}
                onEnd={markLessonCompletedLocal}
              />
            ) : (
              <QuizLesson
                lesson={lesson}
                onComplete={markLessonCompletedLocal}
              />
            )}

            <div className="mt-6 flex justify-between sm:flex-row flex-col gap-4">
              <div className="w-48">
                {previousLesson && (
                  <CustomButton
                    label="Previous Lesson"
                    buttonIcon={<ArrowLeft size={16} />}
                    className="!bg-gray-800"
                    onClick={() => {
                      navigate(
                        `/courses/${courseId}/lessons/${previousLesson.id}`
                      );
                      markLessonCompletedById(previousLesson.id);
                    }}
                  />
                )}
              </div>

              <div className="w-48 text-right">
                {nextLesson && (
                  <CustomButton
                    label="Next Lesson "
                    buttonIcon={<ArrowRight size={16} />}
                    className="bg-white !text-black"
                    onClick={() => {
                      navigate(`/courses/${courseId}/lessons/${nextLesson.id}`);
                      markLessonCompletedById(nextLesson.id);
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <CourseChapter course={localCourse} activeLessonId={lessonId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
