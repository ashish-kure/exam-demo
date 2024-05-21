import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import authSlice from "../slices/authSlice";
import signUpSlice from "../slices/signUpSlice";

const store = configureStore({
  reducer: {
    api: apiSlice,
    auth: authSlice,
    signUp: signUpSlice,
  },
});

export default store;
