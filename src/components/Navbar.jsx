import { use } from "react";
import { LOGO_URL } from "../utils/constants";
import CustomButton from "./CustomButton";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between p-4 px-20 shadow-lg text-white">
      <div className="cursor-pointer">
        <NavLink to="/">
          <img src={LOGO_URL} alt="Logo Img" className="h-13 w-15" />
        </NavLink>
      </div>
      <div>
        <ul className="flex items-center space-x-5 h-full">
          <li className="flex items-center">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 after:duration-300 hover:after:w-full ${
                  isActive ? "after:w-full text-amber-500" : ""
                }`
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 after:duration-300 hover:after:w-full ${
                  isActive ? "after:w-full text-amber-500" : ""
                }`
              }
            >
              DashBoard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <CustomButton
          label={"Sign Up"}
          className={"p-5 !bg-blue-500"}
          onClick={() => navigate("/signup")}
        />
        <CustomButton
          label={"Log In"}
          className={"p-5"}
          onClick={() => navigate("/login")}
        />
      </div>
    </nav>
  );
};

export default NavBar;
