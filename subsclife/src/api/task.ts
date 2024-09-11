import instance from "./instance";
import { TaskType } from "@/components/TaskCard/TaskCard";
import { TaskDetailType } from "@/pages/TaskDetail/TaskDetail";

export const getTasks = async (): Promise<TaskType[]> => {
  try {
    const result = await instance.get("/api/v1/users/1/subscribes");

    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTaskByTaskId = async (
  taskId?: string
): Promise<TaskDetailType | null> => {
  try {
    const result = await instance.get<TaskDetailType>(
      `/api/v1/tasks/${taskId}`
    );

    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
