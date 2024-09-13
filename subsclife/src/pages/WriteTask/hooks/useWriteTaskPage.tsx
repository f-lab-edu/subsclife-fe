import { css } from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Modal from "@/components/Modal";
import WriteTaskGoal from "../WriteTaskGoal";
import WriteTaskDetail from "../WriteTaskDetail";
import WriteTaskPeriod from "../WriteTaskPeriod";
import { TaskForWritingType } from "../WriteTask";
import { postTask } from "@/api/task";
import globalStore from "@/store/global";

const useWriteTaskPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { toggleModal, changeModal } = globalStore();
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

  const createNewTask = async (newTask: Partial<TaskForWritingType>) => {
    setTask((prev) => ({ ...prev, ...newTask }));
    const completedTask = { ...task, ...newTask };
    const result = await postTask(completedTask);

    const isSuccess = result === 200;

    changeModal(() => (
      <Modal
        size="fit-content"
        css={css`
          div {
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            padding: 20px 10px;
          }
        `}
      >
        {isSuccess ? (
          <div>활동이 등록되었습니다!</div>
        ) : (
          <div>활동 제목을 입력해주세요!</div>
        )}
      </Modal>
    ));
    toggleModal(true);
    navigate(isSuccess ? "/" : "/task?page=0");
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
