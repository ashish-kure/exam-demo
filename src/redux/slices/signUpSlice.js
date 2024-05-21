import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../utils/javascript";
import { setLoggedIn } from "../../utils/authentication";
import signUp from "../actions/signUpAction";

const initialState = {
  data: {},
  token: null,
  loading: false,
  error: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        const { token } = action.payload?.data ?? "";

        state.loading = false;
        state.data = action.payload;
        state.error = "";

        if (token) {
          setLoggedIn();
          setLocalStorage("token", token);

          state.token = token;
        }
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default signUpSlice.reducer;
