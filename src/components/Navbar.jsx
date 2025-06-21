import { LOGO_URL } from "../utils/constants";
import CustomButton from "./CustomButton";
import { NavLink, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setIsModalOpen(false);
    navigate("/login");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between py-4 px-20 shadow-lg text-white relative">
        <div className="cursor-pointer">
          <NavLink to="/">
            <img src={LOGO_URL} alt="Logo Img" className="h-13 w-15" />
          </NavLink>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center space-x-5 h-full ">
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `text-lg font-medium relative transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 hover:after:w-full ${
                    isActive ? "after:w-full text-amber-500" : ""
                  }`
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-lg font-medium relative transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 hover:after:w-full ${
                    isActive ? "after:w-full text-amber-500" : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-8">
          {user ? (
            <>
              <span className="text-lg font-medium text-white">
                {user.name || "User"}
              </span>
              <CustomButton
                buttonIcon={<LogOutIcon className="w-5 h-5" />}
                label={"Logout"}
                className={"p-5 bg-red-800"}
                onClick={handleLogoutClick}
              />
            </>
          ) : (
            <>
              <CustomButton
                label={"Sign Up"}
                className={"p-5 !bg-blue-600"}
                onClick={() => navigate("/signup")}
              />
              <CustomButton
                label={"Log In"}
                className={"p-5"}
                onClick={() => navigate("/login")}
              />
            </>
          )}
        </div>
      </nav>

      <Modal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
        content="Are you sure you want to logout?"
        primaryButtonLabel="Logout"
      />
    </>
  );
};

export default NavBar;
