import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInterceptor";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

//validation using Yup

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async () => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const values = await registerSchema.validate(formValues);
      console.log(values);
      const response = await axiosInstance(`/auth/register`, {
        method: "POST",
        data: values,
      });
      localStorage.setItem("token", response.data.token);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-700 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <CustomInput name="name" type="text" id="name" label="Name" />
          <CustomInput name="email" type="email" id="email" label="Email" />
          <CustomInput name="mobile" type="tel" id="mobile" label="mobile" />
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
