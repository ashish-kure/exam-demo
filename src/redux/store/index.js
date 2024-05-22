import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import formSlice from "../slices/formSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: {
    api: apiSlice,
    form: formSlice,
    user: userSlice,
  },
});

export default store;
