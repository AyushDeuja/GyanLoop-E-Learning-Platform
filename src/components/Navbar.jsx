import { LOGO_URL } from "../utils/constants";
import CustomButton from "./CustomButton";
import { NavLink, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { LogOutIcon, Menu, X, UserIcon } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
    setMenuOpen(false);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setIsModalOpen(false);
    navigate("/login");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between py-4 px-6 lg:px-20 shadow-lg text-white sticky top-0 z-20 backdrop-blur-sm bg-gray-900/10">
        <div className="cursor-pointer z-30">
          <NavLink to="/">
            <img src={LOGO_URL} alt="Logo Img" className="h-10 w-auto" />
          </NavLink>
        </div>

        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `text-lg font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 hover:after:w-full ${
                isActive ? "after:w-full text-amber-500" : ""
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 hover:after:w-full ${
                isActive ? "after:w-full text-amber-500" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center space-x-4 z-30">
          {user ? (
            <>
              <span className="flex items-center gap-2 text-lg font-medium text-white">
                <UserIcon className="w-5 h-5" />
                {user.name || "User"}
              </span>
              <CustomButton
                buttonIcon={<LogOutIcon className="w-5 h-5" />}
                label="Logout"
                className="p-5 bg-red-800"
                onClick={handleLogoutClick}
              />
            </>
          ) : (
            <>
              <CustomButton
                label="Sign Up"
                className="p-5 !bg-blue-600"
                onClick={() => navigate("/signup")}
              />
              <CustomButton
                label="Log In"
                className="p-5"
                onClick={() => navigate("/login")}
              />
            </>
          )}
        </div>

        <div className="lg:hidden z-30" onClick={toggleMenu}>
          {menuOpen ? (
            <X className="w-7 h-7 cursor-pointer" />
          ) : (
            <Menu className="w-7 h-7 cursor-pointer" />
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 bg-gray-900 text-white px-6 py-4">
          <NavLink
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "text-amber-500" : ""}`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "text-amber-500" : ""}`
            }
          >
            Dashboard
          </NavLink>

          <hr className="border-gray-700 my-2" />

          {user ? (
            <>
              <span className="flex items-center gap-2 text-lg font-medium">
                <UserIcon className="w-5 h-5" />
                {user.name || "User"}
              </span>
              <CustomButton
                buttonIcon={<LogOutIcon className="w-5 h-5" />}
                label="Logout"
                className="p-5 bg-red-800 w-full"
                onClick={handleLogoutClick}
              />
            </>
          ) : (
            <>
              <CustomButton
                label="Sign Up"
                className="p-5 !bg-blue-600 w-full"
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
              />
              <CustomButton
                label="Log In"
                className="p-5 w-full"
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
              />
            </>
          )}
        </div>
      )}

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
