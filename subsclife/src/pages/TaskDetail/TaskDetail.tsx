import dayjs from "dayjs";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "@/layouts/Footer";
import NaviHeader from "@/layouts/NaviHeader";
import useTaskDetail from "@/hooks/useTaskDetail";
import TaskCardContent from "@/components/TaskCardContent";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";
import { isActiveTask, isInRemindPeriod } from "@/utils/date";

import * as Icons from "@/assets/icons";
import * as Styled from "./TaskDetail.styled";

export type UserType = {
  userId: number;
  name: string;
  nickname: string;
};

export type TaskDetailType = {
  taskId: number;
  title: string;
  simpleInfo: string;
  detail: string;
  startDate: string;
  endDate: string;
  subscribers: UserType[];
  isSubscribed: boolean;
};

const TaskDetail = () => {
  const navigate = useNavigate();
  const { changeHeader, changeFooter } = useLayoutContext();
  const { taskId: taskDetailId } = useParams() as { taskId: string };
  const { task, isLoading, isError, subscribe, unsubscribe } =
    useTaskDetail(taskDetailId);

  const now = dayjs();
  const isBeforeStart = now.isBefore(dayjs(task?.startDate));
  const isTaskStart = isActiveTask({ current: now, end: task?.endDate });
  const isBetweenRemindPeriod = isInRemindPeriod({
    current: now,
    end: task?.endDate,
  });

  useEffect(() => {
    changeHeader(
      <NaviHeader>
        <button onClick={() => navigate(-1)}>
          <Icons.ChevronLeftIcon />
          <p>이전</p>
        </button>

        {!isError && !task?.isSubscribed && isTaskStart && (
          <Styled.SubscribeButton
            $subscribed={task?.isSubscribed}
            onClick={subscribe}
          >
            구독
          </Styled.SubscribeButton>
        )}

        {!isError && task?.isSubscribed && isTaskStart && (
          <Styled.SubscribeButton
            $subscribed={task?.isSubscribed}
            onClick={unsubscribe}
          >
            구독 취소
          </Styled.SubscribeButton>
        )}
      </NaviHeader>
    );
    changeFooter(<Footer />);
  }, [isTaskStart, task]);

  if (isLoading) {
    return <>로딩 중</>;
  }

  if (!task || isError) {
    return (
      <Styled.Container>
        <p className="caution">알 수 없는 에러가 발생했습니다.</p>
        <Styled.Button onClick={() => navigate(-1)}>뒤로 가기</Styled.Button>
      </Styled.Container>
    );
  }

  const { taskId, title, simpleInfo, startDate, endDate, detail, subscribers } =
    task;
  const start = dayjs(startDate).format("YYYY년 M월 D일 H시");
  const end = dayjs(endDate).format("YYYY년 M월 D일 H시");

  return (
    <Styled.Container>
      <h1>{title}</h1>
      <p className="simple_desc">{simpleInfo}</p>
      <div className="gauge">
        {isBeforeStart && (
          <TaskCardContent.NotStart
            taskId={taskId}
            startDate={startDate}
            endDate={endDate}
          />
        )}
        {!isBeforeStart && isTaskStart && (
          <TaskCardContent.Gauge
            startDate={startDate}
            endDate={endDate}
            guageColor="yellow"
          />
        )}

        {!isTaskStart && isBetweenRemindPeriod && (
          <TaskCardContent.Remind
            taskId={taskId}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </div>
      <p className="period">
        <span>시작 기간</span>
        {start}
      </p>
      <p className="period">
        <span>종료 기간</span>
        {end}
      </p>
      <h2>활동 목표 설명</h2>
      <div className="desc">{detail ?? "작성된 내용이 없습니다"}</div>
      <h2>
        참여 인원 <span>({subscribers.length} / 10)</span>
      </h2>
      <div className="users">
        {subscribers?.map(({ userId, nickname }) => (
          <div className="user" key={userId}>
            <Icons.AvatarCircleIcon />
            {nickname}
          </div>
        ))}
      </div>
    </Styled.Container>
  );
};

export default TaskDetail;
