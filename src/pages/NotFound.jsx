import React from "react";
import { useNavigate } from "react-router";
import CustomButton from "../components/CustomButton";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoToCourses = () => {
    navigate("/courses");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 ">
      <h1 className="text-9xl font-extrabold mb-6">404</h1>
      <p className="text-2xl mb-8 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <div className="w-48">
        <CustomButton
          label="Go to Courses"
          onClick={handleGoToCourses}
          className=""
          noRounded={false}
          buttonIcon={null}
        />
      </div>
    </div>
  );
};

export default NotFound;
