import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`,
  },
});

export default axiosInstance;
