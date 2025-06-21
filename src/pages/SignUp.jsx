import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInterceptor";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    try {
      const response = await axiosInstance.post(`/auth/register`, values);
      dispatch(login(response.data.token));
      navigate("/courses");
      toast.success("Welcome");
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "Registration failed, Please try again"
      );
      toast.error("Registration failed, Please try again");
    }
  };

  return (
    <div className="min-h-screen flex gap-50 flex-row items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div>
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <CustomInput name="name" type="text" id="name" label="Name" />
          <CustomInput name="email" type="email" id="email" label="Email" />
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
        <p className="text-md text-center text-gray-800 mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
