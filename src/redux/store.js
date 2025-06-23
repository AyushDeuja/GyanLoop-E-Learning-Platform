import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import enrollmentReducer from "./enrollmentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    enrollment: enrollmentReducer,
  },
});

export default store;
