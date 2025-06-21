import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInterceptor";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { LOGO_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      console.log(values);
      const response = await axiosInstance(`/auth/login`, {
        method: "POST",
        data: values,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/courses");
      toast.success("Welcome");
    } catch (errorMessage) {
      setErrorMessage(
        errorMessage.response?.data?.message || "Login failed, Please try again"
      );
      toast.error("Login failed, Please try again");
    }
  };
  return (
    <div className="min-h-screen flex gap-50 flex-row items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div>
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>
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
        <p className="text-md text-center text-gray-800 mt-6">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-600 hover:underline">
            SignUp here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
