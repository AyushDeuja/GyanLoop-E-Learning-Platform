// store/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedLessons: {}, // { userEmail: { courseId: [lessonId, lessonId...] } }
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    markLessonCompleted: (state, action) => {
      const { userEmail, courseId, lessonId } = action.payload;

      if (!state.completedLessons[userEmail]) {
        state.completedLessons[userEmail] = {};
      }

      if (!state.completedLessons[userEmail][courseId]) {
        state.completedLessons[userEmail][courseId] = [];
      }

      if (!state.completedLessons[userEmail][courseId].includes(lessonId)) {
        state.completedLessons[userEmail][courseId].push(lessonId);
      }
    },
  },
});

export const { markLessonCompleted } = courseSlice.actions;
export default courseSlice.reducer;
