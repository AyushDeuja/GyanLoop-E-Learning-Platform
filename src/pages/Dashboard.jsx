import { mockCourses } from "../helpers/mockCourses";
import { useSelector } from "react-redux";
import CertificateCard from "../components/CertificateCard";
import DashboardCard from "../components/DashboardCard";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const enrolledByUser = useSelector(
    (state) => state.enrollment.enrolledByUser
  );

  const enrolledCourseIds = enrolledByUser[user.email] || [];
  const enrolledCourses = mockCourses.filter((course) =>
    enrolledCourseIds.includes(course.id)
  );

  const completedCertificates = [
    {
      id: "c1",
      courseId: "1",
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      date: "2/15/2024",
    },
  ];

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
      <p className="text-gray-400 mb-6">Continue your learning journey</p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-xl">
          <p>Enrolled Courses</p>
          <h2 className="text-xl font-bold">{enrolledCourses.length}</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <p>Completed Courses</p>
          <h2 className="text-xl font-bold">0</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <p>Learning Time</p>
          <h2 className="text-xl font-bold">14h</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <p>Certificates</p>
          <h2 className="text-xl font-bold">{completedCertificates.length}</h2>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {enrolledCourses.map((course) => (
          <DashboardCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            progress={Math.floor(
              (course.modules.reduce((acc, module) => {
                const total = module.lessons.length;
                const completed = module.lessons.filter(
                  (l) => l.isCompleted
                ).length;
                return acc + completed / total;
              }, 0) /
                course.modules.length) *
                100
            )}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Certificates</h3>
          {completedCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              title={cert.title}
              instructor={cert.instructor}
              date={cert.date}
            />
          ))}
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Quick Action</h3>

          <CustomButton
            className="bg-white !text-black px-4 py-2 rounded-lg w-full"
            label={"View All Courses"}
            onClick={() => navigate("/courses")}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
