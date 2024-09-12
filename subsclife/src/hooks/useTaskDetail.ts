import { useEffect, useState } from "react";

import { getTaskByTaskId } from "@/api/task";
import { TaskDetailType } from "@/pages/TaskDetail/TaskDetail";

const useTaskDetail = (taskId: string) => {
  const [task, setTask] = useState<TaskDetailType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  useEffect(() => {
    getSingleTask();
  }, []);

  return { task, isLoading, isError };
};

export default useTaskDetail;
