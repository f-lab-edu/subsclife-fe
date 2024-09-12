import instance from "./instance";
import { TaskType } from "@/components/TaskCard/TaskCard";
import { TaskDetailType } from "@/pages/TaskDetail/TaskDetail";
import { AxiosResponse } from "axios";

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
interface TaskByPageParams {
  keyword?: string;
  taskId?: number;
  start_date?: string;
  end_date?: string;
  page_size?: number;
  start_from?: string;
  end_to?: string;
}

export const getTasksByPage = async (
  params?: TaskByPageParams
): Promise<AxiosResponse<SearchedTaskResultType> | null> => {
  if (!params) {
    try {
      const result = await instance.get<SearchedTaskResultType>(
        "/api/v1/tasks"
      );

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  } else {
    try {
      const query = Object.entries(params)
        .filter(([key]) => !!key)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      const endPoint = `/api/v1/tasks?${query}`;
      console.log(endPoint);

      const result = await instance.get<SearchedTaskResultType>(endPoint);

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
