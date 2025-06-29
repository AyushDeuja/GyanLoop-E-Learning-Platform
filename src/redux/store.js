// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import courseReducer from "./courseSlice";
import enrollmentReducer from "./enrollmentSlice";

const savedCourse = localStorage.getItem("courseState")
  ? JSON.parse(localStorage.getItem("courseState"))
  : undefined;

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    enrollment: enrollmentReducer,
  },
  preloadedState: {
    course: savedCourse || undefined,
  },
});

store.subscribe(() => {
  localStorage.setItem("courseState", JSON.stringify(store.getState().course));
});

export default store;
