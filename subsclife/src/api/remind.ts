import { TaskType } from "@/components/TaskCard";
import instance from "./instance";
import { AxiosError } from "axios";

export type RemindDetailType = {
  remindId: number;
  achievementRate: number;
  achieveReason: string;
  failReason: string;
  improvementPlan: string;
  taskInfo: TaskType;
};

export type TerminatedRemindType = {
  taskId: number;
  title: string;
  simpleInfo: string;
  detail: string;
  startDate: string;
  endDate: string;
  reminds: [
    {
      userInfo: {
        userId: string;
        name: string;
        nickname: string;
      };
      remindContent: {
        remindId: string;
        achievementRate: string;
        achieveReason: string;
        failReason: string;
        improvementPlan: string;
      };
    }
  ];
};

export const getRemindById = async (
  remindId: string
): Promise<RemindDetailType | null> => {
  try {
    const result = await instance.get<RemindDetailType>(
      `/api/v1/reminds/${remindId}`
    );

    return result.data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);
    return null;
  }
};

export const getTerminatedRemindById = async (
  remindId: string
): Promise<TerminatedRemindType | null> => {
  try {
    const result = await instance.get<TerminatedRemindType>(
      `/api/v1/tasks/${remindId}/history`
    );

    return result.data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err);
    return null;
  }
};
