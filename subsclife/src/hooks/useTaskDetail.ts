import { useEffect, useState } from "react";

import {
  getTaskByTaskId,
  postTaskForSubscribeById,
  postTaskForUnsubscribeById,
} from "@/api/task";
import { TaskDetailType } from "@/pages/TaskDetail/TaskDetail";

const SUCESS_RESULT_CODE = 200;

const useTaskDetail = (taskId: string) => {
  const [task, setTask] = useState<TaskDetailType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [subscribeIsLoading, setSubscribeIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getSingleTask = async () => {
    setIsLoading(true);
    setIsError(false);
    const result = await getTaskByTaskId(taskId);
    if (result) {
      setTask(result);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const subscribeByTaskId = async () => {
    setSubscribeIsLoading(true);
    if (task) {
      const result = await postTaskForSubscribeById(task.taskId);
      if (result === SUCESS_RESULT_CODE) {
        getSingleTask();
      }
    }
    setSubscribeIsLoading(false);
  };

  const unsubscribeByTaskId = async () => {
    setSubscribeIsLoading(true);
    if (task) {
      const result = await postTaskForUnsubscribeById(task.taskId);
      if (result === SUCESS_RESULT_CODE) {
        getSingleTask();
      }
    }
    setSubscribeIsLoading(false);
  };

  useEffect(() => {
    getSingleTask();
  }, []);

  return {
    task,
    isLoading,
    subscribeIsLoading,
    isError,
    subscribe: subscribeByTaskId,
    unsubscribe: unsubscribeByTaskId,
  };
};

export default useTaskDetail;
