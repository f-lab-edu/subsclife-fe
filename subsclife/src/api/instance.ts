import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});

instance.interceptors.request.use((config) => {
  let userId = localStorage.getItem("subsclife_token");
  if (!userId) {
    userId = (1 + Math.floor(Math.random() * 5)).toString();
    localStorage.setItem("subsclife_token", userId);
  }
  config.headers["user-id"] = userId;

  return config;
});

export default instance;
