import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import WriteTaskGoal from "../WriteTaskGoal";
import WriteTaskDetail from "../WriteTaskDetail";
import WriteTaskPeriod from "../WriteTaskPeriod";
import { TaskForWritingType } from "../WriteTask";

const useWriteTaskPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const page = Number(new URLSearchParams(search).get("page"));
  const [task, setTask] = useState<TaskForWritingType>({
    title: "",
    simpleInfo: "",
    detail: "",
    startDate: "",
    endDate: "",
  });

  const movePrevPage = (newTask: Partial<TaskForWritingType>) => {
    setTask((prev) => ({ ...prev, ...newTask }));
    const page = Number(new URLSearchParams(search).get("page"));

    if (page === 0) {
      navigate("/", { replace: true });
    } else {
      navigate(`/task?page=${page - 1}`);
    }
  };

  const moveNextPage = (newTask: Partial<TaskForWritingType>) => {
    setTask((prev) => ({ ...prev, ...newTask }));

    if (page < 2) {
      const page = Number(new URLSearchParams(search).get("page"));
      navigate(`/task?page=${page + 1}`);
    }
  };

  const createNewTask = (newTask: Partial<TaskForWritingType>) => {
    const completedTask = { ...task, ...newTask };
    console.log(completedTask);
  };

  const pages = [
    { Page: WriteTaskGoal, prev: movePrevPage, next: moveNextPage },
    { Page: WriteTaskDetail, prev: movePrevPage, next: moveNextPage },
    {
      Page: WriteTaskPeriod,
      prev: movePrevPage,
      next: createNewTask,
    },
  ][page];

  return { pages, task };
};

export default useWriteTaskPage;
