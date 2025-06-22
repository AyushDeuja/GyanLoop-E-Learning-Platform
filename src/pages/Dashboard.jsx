import { getEnrolledCourses } from "../utils/enrollment";
import CourseCard from "../components/CourseCard";
import { mockCourses } from "../helpers/mockCourses";

const Dashboard = () => {
  const enrolledIds = getEnrolledCourses();
  const enrolledCourses = mockCourses.filter((c) => enrolledIds.includes(c.id));

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      {enrolledCourses.length === 0 ? (
        <p>You haven't enrolled in any courses yet.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {enrolledCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
