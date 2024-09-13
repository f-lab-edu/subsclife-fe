import instance from "./instance";
import { TaskType } from "@/components/TaskCard/TaskCard";
import { TaskDetailType } from "@/pages/TaskDetail/TaskDetail";
import { TaskForWritingType } from "@/pages/WriteTask/WriteTask";
import { AxiosResponse, AxiosError } from "axios";

export type SearchedTaskType = {
  taskId: number;
  title: string;
  simpleInfo: string;
  startDate: string;
  endDate: string;
  subscriberCount: number;
};

type SearchedTaskResultType = {
  items: SearchedTaskType[];
  hasNext: boolean;
};
export type TaskByPageParams = {
  keyword?: string;
  taskId?: number;
  start_date?: string;
  end_date?: string;
  page_size?: number;
  start_from?: string;
  end_to?: string;
};

export const getTasks = async (): Promise<TaskType[]> => {
  try {
    const result = await instance.get("/api/v1/users/1/subscribes");

    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const postTask = async (task: TaskForWritingType) => {
  try {
    const result = await instance.post("/api/v1/tasks", task);
    return result.status;
  } catch (error) {
    const err = error as AxiosError;
    return err.status;
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

export const getTasksByPage = async (
  params?: TaskByPageParams
): Promise<AxiosResponse<SearchedTaskResultType> | null> => {
  const convertedQuery = {
    ...params,
    task_id: params?.taskId,
  };
  const query = Object.entries(convertedQuery || "")
    .filter(([, value]) => !!value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const endPoint = `/api/v1/tasks?${query}`;
  console.log(endPoint);

  try {
    const result = await instance.get<SearchedTaskResultType>(endPoint);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
  // }
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
