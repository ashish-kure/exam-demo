import axios from "axios";
import { BASE_URL } from "../../constants/apiConstants";
import { getLocalStorage } from "../../utils/javascript";

// Instance of Axios
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Axios Interceptors!
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorage("token");
    token && (config.headers["access-token"] = token);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
