import { createSlice } from "@reduxjs/toolkit";
import api from "../actions/apiAction";

const initialState = {
  data: [],
  loading: {},
  error: {},
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(api.pending, (state, action) => {
        state.loading[action.payload] = true;
      })
      .addCase(api.fulfilled, (state, action) => {
        const { name, data } = action.payload;

        state.loading[name] = false;
        state.data = data;
        state.error[name] = "";
      })
      .addCase(api.rejected, (state, action) => {
        const { name, message } = action.payload;

        state.loading[name] = false;
        state.error[name] = message;
      });
  },
});

export default apiSlice.reducer;
