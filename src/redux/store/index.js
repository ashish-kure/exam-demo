import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import formSlice from "../slices/formSlice";
import userSlice from "../slices/userSlice";
import teacherSlice from "../slices/teacherSlice";
import studentSlice from "../slices/studentSlice";
import toastSlice from "../slices/toastSlice";
import { equal } from "../../utils/javascript";

const rootReducer = combineReducers({
  api: apiSlice,
  user: userSlice,
  form: formSlice,
  toast: toastSlice,
  teacher: teacherSlice,
  student: studentSlice,
});

const appReducer = (state, action) => {
  if (equal(action.type, "LOGOUT")) {
    state = undefined;
  }
  return rootReducer(state, action);
};

const store = configureStore({
  reducer: appReducer,
});

export default store;
