import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mockCourses } from "../helpers/mockCourses";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import {
  enrollInCourse,
  setEnrollmentsForUser,
} from "../redux/enrollmentSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const enrolledCourses = useSelector(
    (state) => state.enrollment.enrolledByUser[user?.email] || []
  );

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    level: "",
  });

  useEffect(() => {
    if (user?.email) {
      const stored = localStorage.getItem(`enrolledCourses_${user.email}`);
      const parsed = stored ? JSON.parse(stored) : [];
      dispatch(setEnrollmentsForUser({ email: user.email, courses: parsed }));
    }
  }, [user, dispatch]);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      dispatch(enrollInCourse({ email: user.email, courseId }));
      const updated = [...enrolledCourses, courseId];
      localStorage.setItem(
        `enrolledCourses_${user.email}`,
        JSON.stringify(updated)
      );
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
