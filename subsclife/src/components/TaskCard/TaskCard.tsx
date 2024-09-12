import dayjs from "dayjs";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import TaskCardContent from "../TaskCardContent";
import * as Icons from "@/assets/icons";

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

const TaskCard = ({ cardData }: TaskCardProps) => {
  const navigate = useNavigate();
  const { taskId, title, subscriberCount, startDate, endDate } = cardData;

  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const current = dayjs();

  const isReadyTask = current.isBefore(start);
  const isStartTask = current.isAfter(start) && current.isBefore(end);
  const isFinishedTask = current.isAfter(end);

  const taskCardClickHandler = () => {
    console.log("click TaskCardContent");
    navigate(`/task/${taskId}`);
  };

  return (
    <TaskCardContent
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
          taskId={taskId}
          startDate={startDate}
          endDate={endDate}
        />
      )}
      {isStartTask && (
        <TaskCardContent.Gauge
          startDate={startDate.toString()}
          endDate={endDate.toString()}
        />
      )}
      {isFinishedTask && (
        <TaskCardContent.Remind
          taskId={taskId}
          startDate={startDate.toString()}
          endDate={endDate.toString()}
        />
      )}
    </TaskCardContent>
  );
};

export default TaskCard;
