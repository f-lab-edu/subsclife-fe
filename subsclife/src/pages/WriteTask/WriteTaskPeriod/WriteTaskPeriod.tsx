import dayjs, { Dayjs } from "dayjs";

import Layout from "@/layouts/Layout";
import Header from "@/layouts/Header";
import NaviHeader from "@/layouts/NaviHeader";
import useWriteTaskCalendar from "../hooks/useWriteTaskCalendar";
import { WriteTaskPageType } from "../WriteTask";

import * as Icons from "@/assets/icons";
import * as Styled from "./WriteTaskPeriod.styled";
import PeriodImg from "@/assets/imgs/period.png";

const dateFormatter = (date: string | Date | Dayjs) =>
  dayjs(date).format("YYYY년 M월 D일 H시");

const WriteTaskPeriod = ({ task, movePrev, moveNext }: WriteTaskPageType) => {
  const { startDate, endDate, openStartCalendar, openEndCalender } =
    useWriteTaskCalendar(task);

  const nextTask = {
    startDate,
    endDate,
  };

  const prevHandler = () => movePrev(nextTask);
  const nextHandler = () => moveNext(nextTask);

  return (
    <>
      <Header>
        <NaviHeader>
          <button onClick={prevHandler}>
            <Icons.ChevronLeftIcon />
            <p>이전</p>
          </button>
        </NaviHeader>
      </Header>
      <Layout.Content>
        <Styled.Title>
          시작 기간과 종료 기간을
          <br /> 정해볼까요?
        </Styled.Title>

        <Styled.SubTitle>시작 기간</Styled.SubTitle>
        <Styled.CalendarButton onClick={openStartCalendar}>
          {startDate ? dateFormatter(startDate) : "시작 기간 선택"}
        </Styled.CalendarButton>

        <Styled.SubTitle>종료 기간</Styled.SubTitle>
        <Styled.CalendarButton onClick={openEndCalender}>
          {endDate ? dateFormatter(endDate) : "종료 기간 선택"}
        </Styled.CalendarButton>
        <Styled.ImageWrapper>
          <img src={PeriodImg} alt="period_img" />
        </Styled.ImageWrapper>
      </Layout.Content>
      <Layout.Bottom>
        <button disabled={!startDate && !endDate} onClick={nextHandler}>
          완료
        </button>
      </Layout.Bottom>
    </>
  );
};

export default WriteTaskPeriod;
