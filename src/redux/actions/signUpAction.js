import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, POST } from "../../constants/apiConstants";

const signUp = createAsyncThunk(
  "signUp",
  async (config, { rejectWithValue }) => {
    try {
      const { url, data = {}, ...rest } = config;

      const response = await axios({
        baseURL: BASE_URL,
        method: POST,
        url,
        data,
        ...rest,
      });

      console.log(response?.data);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default signUp;
