import React from "react";
import CustomButton from "../components/CustomButton";
import FeatureCard from "../components/FeatureCard";
import { Video, UserCheck, LineChart, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-white flex justify-center flex-col">
      <div className="flex flex-col justify-center w-full max-w-2xl px-6 py-10 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-4">
          Learn Anything, Anytime, Anywhere
        </h1>
        <p className="text-base md:text-lg text-center text-gray-300 mt-4">
          Join thousands of learners worldwide and master new skills with our
          comprehensive online learning platform.
        </p>
        <div className="mt-8 w-full flex justify-center">
          <CustomButton
            label="Get Started"
            className="p-5"
            onClick={() => navigate("/courses")}
          />
        </div>
      </div>

      <div className="py-10 px-4 sm:px-6 lg:px-20 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose GyanLoop?</h2>
          <p className="mt-2 text-gray-600">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Video className="w-6 h-6 text-blue-500" />}
            title="Interactive Lessons"
            description="Engaging video content with quizzes and hands-on exercises"
          />
          <FeatureCard
            icon={<UserCheck className="w-6 h-6 text-blue-500" />}
            title="Expert Instructors"
            description="Learn from industry professionals and certified educators"
          />
          <FeatureCard
            icon={<LineChart className="w-6 h-6 text-blue-500" />}
            title="Progress Tracking"
            description="Monitor your learning journey with detailed analytics"
          />
          <FeatureCard
            icon={<BadgeCheck className="w-6 h-6 text-blue-500" />}
            title="Certificates"
            description="Earn verified certificates upon course completion"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-blue-600">10,000+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Expert Courses</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
