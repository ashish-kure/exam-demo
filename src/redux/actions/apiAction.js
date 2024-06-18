import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";
import { addUserInfo } from "../slices/userSlice";
import { SIGN_IN, SIGN_UP } from "../../constants/nameConstants";
import { SUCCESS_CODE } from "../../constants/apiConstants";
import { showToast } from "../slices/toastSlice";
import { capitalize, equal } from "../../utils/javascript";

const api = createAsyncThunk(
  "api",
  async ({ name, config, toast = true }, { rejectWithValue, dispatch }) => {
    try {
      const { method, url, params = {}, data = {}, signal, ...rest } = config;

      const response = await axiosInstance({
        method,
        url,
        params,
        data,
        signal,
        ...rest,
      });
      const { statusCode, message } = response?.data ?? {};

      if (!equal(statusCode, SUCCESS_CODE)) {
        throw new Error(message);
      }

      // Storing User's Data!
      if ([SIGN_IN, SIGN_UP].includes(name)) {
        equal(statusCode, SUCCESS_CODE) &&
          dispatch(addUserInfo(response?.data?.data));
      }

      toast &&
        dispatch(showToast({ type: "success", message: capitalize(message) }));
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

      toast &&
        dispatch(
          showToast({ type: "error", message: capitalize(errorMessage) })
        );
      return rejectWithValue({ name, message: errorMessage });
    }
  }
);

export default api;
