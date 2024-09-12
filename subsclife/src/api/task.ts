import instance from "./instance";
import { TaskType } from "@/components/TaskCard/TaskCard";
import { TaskDetailType } from "@/pages/TaskDetail/TaskDetail";
import { AxiosError } from "axios";

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

export const postTaskForUnsubscribeById = async (taskId: number) => {
  try {
    const result = await instance.post(
      `/api/v1/users/unsubscribe?task_id=${taskId}`
    );

    return result.status;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);
    return err.status;
  }
};

export const postTaskForSubscribeById = async (taskId: number) => {
  try {
    const result = await instance.post(
      `/api/v1/users/subscribe?task_id=${taskId}`
    );

    return result.status;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);
    return err.status;
  }
};
