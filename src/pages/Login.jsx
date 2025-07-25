import { NavLink, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInterceptor";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { LucideArrowLeft } from "lucide-react";
import { object, string } from "yup";

const loginSchema = object({
  password: string().required("Password is required"),
  username: string().required("Username is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      toast.info(message, { autoClose: 3000 });
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const validated = await loginSchema.validate(values, {
        abortEarly: true,
      });

      const response = await axiosInstance.post(`/auth/login`, validated);
      dispatch(login(response.data.token));
      navigate("/dashboard");
      toast.success("Welcome");
    } catch (err) {
      if (err.name === "ValidationError") {
        setErrorMessage(err.errors.join(" | "));
      } else {
        setErrorMessage(
          err.response?.data?.message || "Login failed, Please try again"
        );
        toast.error("Login failed, Please try again");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-10">
      <div className="mb-8 md:mb-0 md:mr-40">
        <img src={LOGO_URL} alt="Logo" className="w-48 md:w-100 mx-auto" />
      </div>

      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <LucideArrowLeft
            className="h-6 w-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Login</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <CustomInput
            name="username"
            type="text"
            id="username"
            label="Email or Mobile"
          />
          <CustomInput
            name="password"
            type="password"
            id="password"
            label="Password"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <CustomButton label="Login" type="submit" />
        </form>
        <p className="text-sm sm:text-md text-center text-gray-800 mt-6">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-600 hover:underline">
            SignUp
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
