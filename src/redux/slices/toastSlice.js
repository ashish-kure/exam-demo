import { createSlice } from "@reduxjs/toolkit";
import { SUCCESS_CODE } from "../../constants/apiConstants";

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
      const { type, message, statusCode } = action.payload;

      state.open = true;
      state.message = message ?? "Something Went Wrong!";
      state.severity = type
        ? type
        : statusCode === SUCCESS_CODE
        ? "success"
        : "error";
    },

    closeToast: () => {
      return initialState;
    },
  },
});

export default toastSlice.reducer;
export const { showToast, closeToast } = toastSlice.actions;
