import { TaskType } from "@/components/TaskCard/TaskCard";
import instance from "./instance";

export const getTasks = async (): Promise<TaskType[]> => {
  try {
    const result = await instance.get("/api/v1/users/1/subscribes");

    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
