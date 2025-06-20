import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom"; // <-- fix here

const AppLayout = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default AppLayout;
