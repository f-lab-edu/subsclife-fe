import { AxiosError } from "axios";
import instance from "./instance";

export const getAuth = async () => {
  try {
    const result = await instance.post("/api/v1/users/login");
    return result.status;
  } catch (error) {
    const err = error as AxiosError;
    return err.status;
  }
};
