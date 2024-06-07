import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "",
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      const { type, message } = action.payload;
      state.open = true;
      state.severity = type;
      state.message = message ?? "Something Went Wrong!";
    },

    closeToast: () => {
      return initialState;
    },
  },
});

export default toastSlice.reducer;
export const { showToast, closeToast } = toastSlice.actions;
