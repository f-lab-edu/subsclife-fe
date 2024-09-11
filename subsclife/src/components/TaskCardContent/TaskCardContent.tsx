import dayjs from "dayjs";
import { css as cssStyle, RuleSet } from "styled-components";
import { MouseEvent, PropsWithChildren, ReactNode, useState } from "react";

import useTaskHourTimer from "./hooks/useTaskHourTimer";
import useTaskMinuteGuage from "./hooks/useTaskMinuteTimer";

import * as Styled from "./TaskCardContent.styled";
import * as Icons from "@/assets/icons";

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
  onClick,
  children,
  css = cssStyle``,
}: TaskCardContentProps) => {
  return (
    <Styled.Container type={type} $css={css} onClick={onClick}>
      {children}
    </Styled.Container>
  );
};

const TaskCardContentSubscriber = ({
  children,
  icon: Icon,
  prefix: Prefix,
  css = cssStyle``,
}: CSSComponentType & { icon: ReactNode; prefix?: ReactNode }) => {
  return (
    <Styled.Subscriber $css={css}>
      <i>{Icon}</i>
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
  startDate: string | Date;
  endDate: string | Date;
};

const TaskCardContentDate = ({
  taskId,
  startDate,
  endDate,
  css = cssStyle``,
}: CSSComponentType & TaskCardContentDateType) => {
  const taskStartDate = dayjs(startDate).format("YYYY년 M월 D일 H시");
  const taskEndDate = dayjs(endDate).format("YYYY년 M월 D일 H시");

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("구독");
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
      <button onClick={clickHandler}>구독</button>
    </Styled.Date>
  );
};

const TaskCardContentGuage = ({
  startDate,
  endDate,
}: Omit<TaskCardContentDateType, "taskId">) => {
  const { percent, leftTime } = useTaskMinuteGuage({
    start: startDate,
    end: endDate,
  });

  return (
    <Styled.Guage $percent={percent}>
      <div className="gauge" />
      <p>{leftTime}</p>
    </Styled.Guage>
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

  const toggleHandler = () => setIsOpen((prev) => !prev);

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
  Guage: TaskCardContentGuage,
  Remind: TaskCardContentRemind,
  Toggle: TaskCardContentToggle,
});

export default TaskCard;
