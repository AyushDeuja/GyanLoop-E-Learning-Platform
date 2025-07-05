import { mockCourses } from "../helpers/mockCourses";
import { useSelector } from "react-redux";
import CertificateCard from "../components/CertificateCard";
import DashboardCard from "../components/DashboardCard";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const completedLessons = useSelector(
    (state) => state.course.completedLessons[user.email] || {}
  );
  const enrolledByUser = useSelector(
    (state) => state.enrollment.enrolledByUser
  );
  const enrolledCourseIds = enrolledByUser[user.email] || [];
  const enrolledCourses = mockCourses.filter((course) =>
    enrolledCourseIds.includes(course.id)
  );

  const completedCertificates = enrolledCourses
    .filter((course) =>
      course.modules.every((module) =>
        module.lessons
          .filter((lesson) => lesson.type === "video")
          .every((lesson) =>
            (completedLessons[course.id] || []).includes(lesson.id)
          )
      )
    )
    .map((course) => ({
      id: `cert-${course.id}`,
      courseId: course.id,
      title: course.title,
      instructor: course.instructor,
      date: new Date().toLocaleDateString(),
    }));

  const getCompletedCourseCount = () => completedCertificates.length;

  return (
    <div className="p-4 md:p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">Welcome back, {user.name}!</h1>
      <p className="text-gray-400 mb-6">Continue your learning journey</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p>Enrolled Courses</p>
          <h2 className="text-xl font-bold">{enrolledCourses.length}</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p>Completed Courses</p>
          <h2 className="text-xl font-bold">{getCompletedCourseCount()}</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p>Certificates</p>
          <h2 className="text-xl font-bold">{completedCertificates.length}</h2>
        </div>
      </div>

      {/* My Courses */}
      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {enrolledCourses.map((course) => {
          const videoLessons = course.modules.flatMap((m) =>
            m.lessons.filter((l) => l.type === "video")
          );
          const totalLessons = videoLessons.length;
          const completed = videoLessons.filter((l) =>
            (completedLessons[course.id] || []).includes(l.id)
          ).length;
          const progress =
            totalLessons === 0
              ? 0
              : Math.floor((completed / totalLessons) * 100);

          return (
            <DashboardCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={progress}
              duration={course.duration}
              image={course.image}
              courseId={course.id}
              firstLessonId={course.modules[0].lessons[0]?.id}
            />
          );
        })}
      </div>

      {/* Certificates */}
      {completedCertificates.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {completedCertificates.map((cert) => (
              <div key={cert.id} className="bg-gray-800 p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Certificate</h3>
                <CertificateCard
                  title={cert.title}
                  instructor={cert.instructor}
                  date={cert.date}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* Quick Action */}
      <div className="bg-gray-800 p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 text-center">Quick Action</h3>
        <CustomButton
          className="bg-white !text-black px-4 py-2 rounded-lg w-full"
          label={"View All Courses"}
          onClick={() => navigate("/courses")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
