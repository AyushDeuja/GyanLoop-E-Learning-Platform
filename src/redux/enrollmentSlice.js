import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledByUser: {},
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollmentsForUser: (state, action) => {
      const { email, courses } = action.payload;
      state.enrolledByUser[email] = courses;
    },
    enrollInCourse: (state, action) => {
      const { email, courseId } = action.payload;
      if (!state.enrolledByUser[email]) {
        state.enrolledByUser[email] = [];
      }
      if (!state.enrolledByUser[email].includes(courseId)) {
        state.enrolledByUser[email].push(courseId);
      }
    },
  },
});

export const { setEnrollmentsForUser, enrollInCourse } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;
