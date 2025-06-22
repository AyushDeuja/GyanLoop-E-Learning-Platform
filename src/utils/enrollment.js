export const getEnrolledCourses = () => {
  return JSON.parse(localStorage.getItem("enrolledCourses")) || [];
};

export const enrollCourses = (courseIds) => {
  const current = getEnrolledCourses();
  const updated = Array.from(new Set([...current, ...courseIds]));
  localStorage.setItem("enrolledCourses", JSON.stringify(updated));
};
