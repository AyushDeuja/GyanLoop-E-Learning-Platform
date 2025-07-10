import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInterceptor";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { LucideArrowLeft } from "lucide-react";
import { object, string } from "yup";

const signupSchema = object({
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  mobile: string().required("Mobile is required"),
  email: string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a valid email address"
    ),
  name: string()
    .required("Name is required")
    .matches(
      /^[A-Za-z\s]+$/,
      "Name must not contain numbers or special characters"
    ),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const validated = await signupSchema.validate(values, {
        abortEarly: true,
      });

      const response = await axiosInstance.post(`/auth/register`, validated);
      dispatch(login(response.data.token));
      navigate("/dashboard");
      toast.success("Account created successfully");
    } catch (err) {
      if (err.name === "ValidationError") {
        setErrorMessage(err.errors.join(" | "));
      } else {
        setErrorMessage(
          err.response?.data?.message || "Signup failed, please try again"
        );
        toast.error("Signup failed, please try again");
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
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Sign Up
          </h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <CustomInput name="name" type="text" id="name" label="Full Name" />
          <CustomInput name="email" type="text" id="email" label="Email" />
          <CustomInput name="mobile" type="tel" id="mobile" label="Mobile" />
          <CustomInput
            name="password"
            type="password"
            id="password"
            label="Password"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <CustomButton label="Sign Up" type="submit" />
        </form>
        <p className="text-sm sm:text-md text-center text-gray-800 mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
