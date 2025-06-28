import CertificateCard from "../components/CertificateCard";
import DashboardCard from "../components/DashoardCard";

const Dashboard = () => {
  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome back, Alex Student!</h1>
      <p className="text-gray-400 mb-6">Continue your learning journey</p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-xl">
          <p>Enrolled Courses</p>
          <h2 className="text-xl font-bold">2</h2>
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
          <h2 className="text-xl font-bold">1</h2>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <DashboardCard
          title="Complete React Development"
          instructor="Sarah Johnson"
          progress={45}
          duration="24 hours"
        />
        <DashboardCard
          title="Python for Data Science"
          instructor="Dr. Michael Chen"
          progress={20}
          duration="18 hours"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Certificates</h3>
          <CertificateCard
            title="Complete React Development"
            instructor="Sarah Johnson"
            date="2/15/2024"
          />
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
          <button className="bg-white text-black px-4 py-2 rounded-lg block mb-2 w-full">
            Browse New Courses
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-lg w-full">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
