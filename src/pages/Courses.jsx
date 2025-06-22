import React, { useState } from "react";
import { mockCourses } from "../helpers/mockCourses";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    level: "",
  });

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses((prev) => [...prev, courseId]);
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory = filters.category
      ? course.category === filters.category
      : true;
    const matchesLevel = filters.level
      ? course.difficulty === filters.level
      : true;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div>
      <div className="text-white py-8">
        <h1 className="font-bold text-3xl md:text-4xl text-white">
          Course Catalog
        </h1>

        <p className="text-base text-gray-400 pt-3">
          Discover and enroll in courses that match your interests and skill
          level.
        </p>
      </div>

      <SearchBar
        search={filters.search}
        category={filters.category}
        level={filters.level}
        onChange={handleFilterChange}
      />

      <div className="flex flex-wrap gap-8 my-5">
        {filteredCourses.map((course) => {
          const isEnrolled = enrolledCourses.includes(course.id);
          return (
            <CourseCard
              key={course.id}
              id={course.id}
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
