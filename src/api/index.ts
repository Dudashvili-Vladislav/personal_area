import axios from "axios";
import User from "../services/User";


const $api = axios.create({
  baseURL: "https://piar.meew.me/",
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers!["user-jwt"] = token;
  return config;
});

$api.interceptors.response.use(
  (response) => {
      console.log("response",response);
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    console.log("originalRequest",originalRequest);
    if (error.response.status === 403 && !originalRequest._retry) {
    console.log("originalRequest-2",originalRequest);
      originalRequest._retry = true;
      const login = localStorage.getItem("login");
      const password = localStorage.getItem("password");
      if (login && password) {
        const token = await User.login({
          login,
          password,
        });
        axios.defaults.headers.common["Authorization"] = token.data.user_jwt;
        localStorage.setItem("token", token.data.user_jwt);
      }
      else {
        localStorage.removeItem("token");
        window.location.reload();
      }

      return $api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default $api;
