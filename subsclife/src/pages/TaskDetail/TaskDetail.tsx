import dayjs from "dayjs";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "@/layouts/Footer";
import NaviHeader from "@/layouts/NaviHeader";
import useTaskDetail from "@/hooks/useTaskDetail";
import TaskCardContent from "@/components/TaskCardContent";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";

import * as Icons from "@/assets/icons";
import * as Styled from "./TaskDetail.styled";

export type UserType = {
  userId: 0;
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
  const { task, isLoading, isError } = useTaskDetail(taskDetailId);

  const now = dayjs();
  const isBeforeStart = dayjs(task?.startDate).isAfter(now);
  const isBetweenRemindPeriod =
    now.isAfter(dayjs(task?.endDate)) &&
    now.isBefore(dayjs(task?.endDate).add(3, "day"));

  useEffect(() => {
    changeHeader(
      <NaviHeader>
        <button onClick={() => navigate(-1)}>
          <Icons.ChevronLeftIcon />
          <p>이전</p>
        </button>

        {!isError && !task?.isSubscribed && isBeforeStart && (
          <Styled.SubscribeButton $subscribed={task?.isSubscribed}>
            구독
          </Styled.SubscribeButton>
        )}

        {!isError && task?.isSubscribed && isBeforeStart && (
          <Styled.SubscribeButton $subscribed={task?.isSubscribed}>
            구독 취소
          </Styled.SubscribeButton>
        )}
      </NaviHeader>
    );
    changeFooter(<Footer />);
  }, [isBeforeStart, task]);

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
        {!isBetweenRemindPeriod && (
          <TaskCardContent.Gauge
            startDate={startDate}
            endDate={endDate}
            guageColor="yellow"
          />
        )}

        {isBetweenRemindPeriod && (
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
