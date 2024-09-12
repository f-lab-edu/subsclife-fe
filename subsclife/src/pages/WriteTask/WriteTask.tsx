import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

import WriteTaskGoal from "./WriteTaskGoal";
import WriteTaskDetail from "./WriteTaskDetail";
import WriteTaskPeriod from "./WriteTaskPeriod";

import * as Styled from "./WriteTask.styled";

export type TaskForWritingType = {
  title: string;
  simpleInfo: string;
  detail: string;
  startDate: string;
  endDate: string;
};

export type WriteTaskPageType = {
  task: TaskForWritingType;
  movePrev: (task: Partial<TaskForWritingType>) => void;
  moveNext: (task: Partial<TaskForWritingType>) => void;
};

const WriteTask = () => {
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

  const movePrevPage = (newTask: TaskForWritingType) => {
    const page = Number(new URLSearchParams(search).get("page"));

    if (page === 0) {
      navigate("/", { replace: true, preventScrollReset: true });
    } else {
      navigate(`/task?page=${page - 1}`, { state: newTask });
    }
    console.log(newTask);
    setTask((prev) => ({ ...prev, ...newTask }));
  };

  const moveNextPage = (newTask: TaskForWritingType) => {
    const page = Number(new URLSearchParams(search).get("page"));
    navigate(`/task?page=${page + 1}`, { state: newTask });
    console.log(newTask);
    setTask((prev) => ({ ...prev, ...newTask }));
  };

  const PageComponents = [
    { Page: WriteTaskGoal, prev: movePrevPage, next: moveNextPage },
    { Page: WriteTaskDetail, prev: movePrevPage, next: moveNextPage },
    {
      Page: WriteTaskPeriod,
      prev: movePrevPage,
      next: moveNextPage,
    },
  ];

  const Current = useMemo(() => PageComponents, [page])[page];

  return (
    <>
      <Styled.Main>
        <Current.Page
          task={task}
          movePrev={(task) => Current.prev(task)}
          moveNext={(task) => Current.next(task)}
        />
      </Styled.Main>
    </>
  );
};

export default WriteTask;
