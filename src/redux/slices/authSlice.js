import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../utils/javascript";
import { setLoggedIn } from "../../utils/authentication";
import auth from "../actions/authAction";

const initialState = {
  data: {},
  id: null,
  token: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(auth.fulfilled, (state, action) => {
        const { token, id } = action.payload?.data ?? "";

        state.loading = false;
        state.data = action.payload;
        state.error = "";

        id && (state.id = id);

        if (token) {
          setLoggedIn();
          setLocalStorage("token", token);

          state.token = token;
        }
      })
      .addCase(auth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
