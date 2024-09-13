import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
});

instance.interceptors.request.use((config) => {
  // const randomUserId = Math.floor(Math.random() * 10);
  config.headers["user-id"] = 1;
  // console.log(randomUserId, config);

  return config;
});

export default instance;
