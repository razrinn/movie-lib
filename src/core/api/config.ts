import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.omdbapi.com",
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["apiKey"] = process.env.REACT_APP_API_KEY;
  return config;
});

export default axiosInstance;
