import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import authSlice from "../slices/authSlice";
import formSlice from "../slices/formSlice";

const store = configureStore({
  reducer: {
    api: apiSlice,
    auth: authSlice,
    form: formSlice,
  },
});

export default store;
