import { Outlet } from "react-router";
import NavBar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen  flex flex-col bg-gradient-to-b from-gray-800 to-gray-900">
      <NavBar />

      <main className="flex-grow px-10 ">
        <Outlet />
      </main>

      <footer className="w-full py-3 text-center bg-gray-800 shadow-lg">
        <p className="text-sm text-white">
          © 2025 Online Learning Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AppLayout;
