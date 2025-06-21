import React, { useState } from "react";
import { mockCourses } from "../helpers/mockCourses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses((prev) => [...prev, courseId]);
    }
  };

  return (
    <div>
      <div className="text-white py-8">
        <h1 className="font-bold text-4xl">Course Catalog</h1>
        <p className="text-base text-gray-400 pt-3">
          Discover and enroll in courses that match your interests and skill
          level.
        </p>
      </div>

      <div>{/*search bars here*/}</div>

      <div className="flex flex-wrap gap-8 my-5">
        {mockCourses.map((course) => {
          const isEnrolled = enrolledCourses.includes(course.id);

          return (
            <CourseCard
              key={course.id}
              {...course}
              isEnrolled={isEnrolled}
              onEnroll={() => handleEnroll(course.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
