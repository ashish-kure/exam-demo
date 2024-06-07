import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";
import { addUserInfo } from "../slices/userSlice";
import { SIGN_IN, SIGN_UP } from "../../constants/nameConstants";
import { SUCCESS_CODE } from "../../constants/apiConstants";
import { showToast } from "../slices/toastSlice";

const api = createAsyncThunk(
  "api",
  async ({ name, config }, { rejectWithValue, dispatch }) => {
    try {
      const { method, url, params = {}, data = {}, ...rest } = config;

      const response = await axiosInstance({
        method,
        url,
        params,
        data,
        ...rest,
      });
      const { statusCode, message } = response?.data ?? {};

      if (statusCode !== SUCCESS_CODE) {
        throw new Error(message);
      }

      // Storing User's Data!
      if ([SIGN_IN, SIGN_UP].includes(name)) {
        statusCode === SUCCESS_CODE &&
          dispatch(addUserInfo(response?.data?.data));
      }

      dispatch(showToast({ type: "success", message }));
      return { name, data: response?.data };
    } catch (error) {
      let errorMessage = "Unknown Error Occurred!";

      if (error.response) {
        errorMessage = error.response?.data?.message;
      } else if (error.request) {
        errorMessage = "Network Problem!";
      } else {
        errorMessage = error.message;
      }

      dispatch(showToast({ type: "error", message: errorMessage }));
      return rejectWithValue({ name, message: errorMessage });
    }
  }
);

export default api;
