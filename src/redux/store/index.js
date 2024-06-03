import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import formSlice from "../slices/formSlice";
import userSlice from "../slices/userSlice";
import teacherSlice from "../slices/teacherSlice";
import studentSlice from "../slices/studentSlice";

const store = configureStore({
  reducer: {
    api: apiSlice,
    user: userSlice,
    form: formSlice,
    teacher: teacherSlice,
    student: studentSlice,
  },
});

export default store;
