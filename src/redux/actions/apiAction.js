import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";
import { addUserInfo } from "../slices/userSlice";

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

      if (["signIn", "signUp"].includes(name)) {
        dispatch(addUserInfo(response?.data?.data));
      }

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

      return rejectWithValue({ name, message: errorMessage });
    }
  }
);

export default api;
