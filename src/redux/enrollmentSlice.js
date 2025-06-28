import { createSlice } from "@reduxjs/toolkit";

// load from localStorage if available
const savedEnrollments = localStorage.getItem("enrolledByUser");

const initialState = {
  enrolledByUser: savedEnrollments ? JSON.parse(savedEnrollments) : {},
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollmentsForUser: (state, action) => {
      const { email, courses } = action.payload;
      state.enrolledByUser[email] = courses;
      localStorage.setItem(
        "enrolledByUser",
        JSON.stringify(state.enrolledByUser)
      );
    },
    enrollInCourse: (state, action) => {
      const { email, courseId } = action.payload;
      if (!state.enrolledByUser[email]) {
        state.enrolledByUser[email] = [];
      }
      if (!state.enrolledByUser[email].includes(courseId)) {
        state.enrolledByUser[email].push(courseId);
        localStorage.setItem(
          "enrolledByUser",
          JSON.stringify(state.enrolledByUser)
        );
      }
    },
  },
});

export const { setEnrollmentsForUser, enrollInCourse } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;
