import VideoPlayer from "../components/VideoPlayer";
import CourseProgress from "../components/CourseProgress";
import CustomButton from "../components/CustomButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LessonPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Lesson Header */}
            <div className="mb-6">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4">
                <ArrowLeft size={20} />
                <span>Back to Course</span>
              </button>

              <div>
                <h1 className="text-white text-2xl font-bold mb-2">
                  Introduction to React
                </h1>
                <p className="text-gray-400 mb-4">Complete React Development</p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Duration: 15 min</span>
                  <span>Type: video</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400">Completed</span>
                  </div>
                </div>
              </div>
            </div>

            <VideoPlayer />

            {/* Lesson Navigation */}
            <div className="mt-6 flex justify-end">
              <div className="w-48">
                <CustomButton
                  label="Next Lesson"
                  buttonIcon={<ArrowRight size={16} />}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => console.log("Next lesson clicked")}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
