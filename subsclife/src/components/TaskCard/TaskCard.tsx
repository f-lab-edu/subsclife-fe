import dayjs from "dayjs";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import TaskCardContent from "../TaskCardContent";
import { isActiveTask, isBeforeActiveTask } from "@/utils/date";
import * as Icons from "@/assets/icons";
import { forwardRef, Ref } from "react";
import SearchTaskStore from "@/store/tasks";

export interface TaskType {
  taskId: number;
  title: string;
  simpleInfo?: string;
  subscriberCount: number;
  startDate: string;
  endDate: string;
}

interface TaskCardProps {
  cardData: TaskType;
}

const TaskCard = ({ cardData }: TaskCardProps, ref: Ref<HTMLDivElement>) => {
  const { changeScrollHeight } = SearchTaskStore();
  const navigate = useNavigate();
  const { taskId, title, subscriberCount, startDate, endDate } = cardData;

  const end = dayjs(endDate);
  const now = dayjs();

  const isReadyTask = isBeforeActiveTask({ current: now, start: startDate });
  const isStartTask = isActiveTask({ current: now, end: endDate });
  const isFinishedTask = now.isAfter(end);

  const taskCardClickHandler = () => {
    const mainScrollHeight = document.querySelector("main")!.scrollHeight;
    changeScrollHeight(mainScrollHeight);
    navigate(`/task/${taskId}`);
  };

  return (
    <TaskCardContent
      ref={ref}
      icon={<Icons.UpRightArrowIcon />}
      css={css`
        margin-bottom: 20px;
      `}
      onClick={taskCardClickHandler}
    >
      <TaskCardContent.Subscriber prefix={<Icons.AvatarCircleIcon />}>
        {subscriberCount || 1}
      </TaskCardContent.Subscriber>
      <TaskCardContent.Title
        css={css`
          margin-bottom: 10px;
        `}
      >
        {title}
      </TaskCardContent.Title>

      {isReadyTask && (
        <TaskCardContent.Date
          css={css`
            margin-bottom: 10px;
          `}
          taskId={taskId}
          startDate={startDate}
          endDate={endDate}
        />
      )}
      {!isReadyTask && isStartTask && (
        <TaskCardContent.Gauge startDate={startDate} endDate={endDate} />
      )}
      {!isStartTask && isFinishedTask && (
        <TaskCardContent.Remind
          taskId={taskId}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </TaskCardContent>
  );
};

export default forwardRef(TaskCard);
