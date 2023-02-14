import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/",
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;
  return config;
});
instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `${"http://localhost:5000"}/api/auth/refresh`,
          {
            withCredentials: true,
          }
        );
        window.localStorage.setItem("token", response.data.accessToken);
        return instance.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);

export default instance;
