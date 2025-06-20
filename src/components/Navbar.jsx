import { LOGO_URL } from "../utils/constants";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 px-20 shadow-lg text-white">
      <div className="cursor-pointer">
        <img src={LOGO_URL} alt="Logo Img" className="h-13 w-15" />
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <a
              href="/"
              className="text-lg font-medium transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 after:duration-300 hover:after:w-full"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg font-medium transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-amber-500 after:bottom-[-4px] after:left-0 after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <CustomButton label={"Sign Up"} className={"p-5 !bg-blue-500"} />
        <CustomButton label={"Log In"} className={"p-5"} />
      </div>
    </nav>
  );
};

export default NavBar;
