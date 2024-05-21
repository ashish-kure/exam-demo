import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "../../constants/apiConstants";
import axiosInstance from "../api";

const auth = createAsyncThunk("auth", async (config, { rejectWithValue }) => {
  try {
    const { url, data = {}, ...rest } = config;

    const response = await axiosInstance({
      method: POST,
      url,
      data,
      ...rest,
    });

    return response?.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export default auth;
