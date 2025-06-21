import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const tokenFromStorage = localStorage.getItem("token");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: tokenFromStorage || null,
    user: tokenFromStorage ? jwtDecode(tokenFromStorage) : null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.user = jwtDecode(action.payload);
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
