import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/javascript";
import { isLoggedIn } from "../../utils/authentication";

const initialState = {
  token: getLocalStorage("token") || "",
  isLoggedIn: isLoggedIn() || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },

    removeAuth: (state, action) => {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const { setAuth, removeAuth } = authSlice.actions;
