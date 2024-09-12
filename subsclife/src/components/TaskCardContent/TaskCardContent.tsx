import dayjs, { Dayjs } from "dayjs";
import { css as cssStyle, RuleSet } from "styled-components";
import { MouseEvent, PropsWithChildren, ReactNode, useState } from "react";

import useTaskHourTimer from "./hooks/useTaskHourTimer";
import useTaskMinuteGuage from "./hooks/useTaskMinuteTimer";
import { isBeforeActiveTask } from "@/utils/date";
import { postTaskForSubscribeById } from "@/api/task";

import * as Icons from "@/assets/icons";
import * as Styled from "./TaskCardContent.styled";

interface CSSComponentType {
  children?: ReactNode;
  css?: RuleSet<object>;
}

interface TaskCardContentProps extends CSSComponentType {
  type?: "yellow" | "green";
  onClick?: () => void;
}

const TaskCardContent = ({
  type = "yellow",
  icon: Icon,
  onClick,
  children,
  css = cssStyle``,
}: TaskCardContentProps & { icon: ReactNode }) => {
  return (
    <Styled.Container type={type} $css={css} onClick={onClick}>
      <i>{Icon}</i>
      {children}
    </Styled.Container>
  );
};

const TaskCardContentSubscriber = ({
  children,
  prefix: Prefix,
  css = cssStyle``,
}: CSSComponentType & { prefix?: ReactNode }) => {
  return (
    <Styled.Subscriber $css={css}>
      {Prefix}
      <p>{children}</p>
    </Styled.Subscriber>
  );
};

const TaskCardContentTitle = ({
  children,
  css = cssStyle``,
}: CSSComponentType) => {
  return <Styled.Title $css={css}>{children}</Styled.Title>;
};

const TaskCardContentSimpleInfo = ({
  children,
  css = cssStyle``,
}: CSSComponentType) => {
  return <Styled.SimpleInfo $css={css}>{children}</Styled.SimpleInfo>;
};

type TaskCardContentDateType = {
  taskId: number;
  startDate: string | Date | Dayjs;
  endDate: string | Date | Dayjs;
};

const TaskCardContentDate = ({
  taskId,
  startDate,
  endDate,
  css = cssStyle``,
}: CSSComponentType & TaskCardContentDateType) => {
  const now = dayjs();
  const taskStartDate = dayjs(startDate).format("YYYY년 M월 D일 H시");
  const taskEndDate = dayjs(endDate).format("YYYY년 M월 D일 H시");

  const isBeforeStart = isBeforeActiveTask({ current: now, start: startDate });

  const clickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const result = await postTaskForSubscribeById(taskId);
    if (result === 200) {
      console.log("구독 성공");
    }
  };

  return (
    <Styled.Date $css={css}>
      <div className="date">
        <p>
          <span>시작</span>
          {taskStartDate}
        </p>
        <p>
          <span>종료</span>
          {taskEndDate}
        </p>
      </div>
      {!isBeforeStart && <button onClick={clickHandler}>구독</button>}
    </Styled.Date>
  );
};

const TaskCardContentNotStartTask = ({
  startDate,
}: TaskCardContentDateType) => {
  const { leftTime } = useTaskHourTimer({
    start: dayjs(),
    end: dayjs(startDate),
  });

  return <Styled.NotStart>시작 {leftTime}</Styled.NotStart>;
};

const TaskCardContentGauge = ({
  startDate,
  endDate,
  guageColor = "white",
}: Omit<TaskCardContentDateType, "taskId"> & {
  guageColor?: "white" | "yellow";
}) => {
  const { percent, leftTime } = useTaskMinuteGuage({
    start: startDate,
    end: endDate,
  });

  return (
    <Styled.Gauge $percent={percent} $gaugecolor={guageColor}>
      <div className="gauge" />
      <p>{leftTime}</p>
    </Styled.Gauge>
  );
};

const TaskCardContentRemind = ({
  taskId,
  startDate,
  endDate,
}: TaskCardContentDateType) => {
  const { leftTime } = useTaskHourTimer({
    start: startDate,
    end: dayjs(endDate).add(3, "day"),
  });

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("회고");
  };

  return (
    <Styled.ReadyToRemind>
      <button onClick={clickHandler}>회고</button>
      <p>회고를 작성하지 않으면 사라져요! ({leftTime})</p>
    </Styled.ReadyToRemind>
  );
};

const TaskCardContentToggle = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Styled.ToggleContent $open={isOpen}>{children}</Styled.ToggleContent>
      <Styled.ToggleButton onClick={toggleHandler}>
        {isOpen ? <Icons.ChevronUpIcon /> : <Icons.ChevronDownIcon />}
      </Styled.ToggleButton>
    </>
  );
};

const TaskCard = Object.assign(TaskCardContent, {
  Subscriber: TaskCardContentSubscriber,
  Title: TaskCardContentTitle,
  SimpleInfo: TaskCardContentSimpleInfo,
  Date: TaskCardContentDate,
  NotStart: TaskCardContentNotStartTask,
  Gauge: TaskCardContentGauge,
  Remind: TaskCardContentRemind,
  Toggle: TaskCardContentToggle,
});

export default TaskCard;
