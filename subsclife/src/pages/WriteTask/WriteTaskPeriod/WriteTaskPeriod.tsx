import { useState } from "react";

import Layout from "@/layouts/Layout";
import Header from "@/layouts/Header";
import NaviHeader from "@/layouts/NaviHeader";
import Modal from "@/components/Modal";
import globalStore from "@/store/global";
import { WriteTaskPageType } from "../WriteTask";

import * as Icons from "@/assets/icons";
import * as Styled from "./WriteTaskPeriod.styled";

const WriteTaskPeriod = ({ task, movePrev, moveNext }: WriteTaskPageType) => {
  const { toggleModal, changeModal } = globalStore();
  const [startDate, setStartDate] = useState<string>(task.startDate || "");
  const [endDate, setEndDate] = useState<string>(task.endDate || "");

  const nextTask = {
    startDate,
    endDate,
  };

  const prevHandler = () => movePrev(nextTask);
  const nextHandler = () => moveNext(nextTask);

  const closeModal = () => {
    toggleModal(false);
    changeModal(() => <></>);
  };

  const openStartCalendar = () => {
    changeModal(() => (
      <Modal>
        <A />
      </Modal>
    ));
    toggleModal(true);
  };

  const openEndCalender = () => {
    changeModal(() => (
      <Modal>
        <B />
      </Modal>
    ));
    toggleModal(true);
  };

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
          {startDate || "시작 기간 선택"}
        </Styled.CalendarButton>

        <Styled.SubTitle>종료 기간</Styled.SubTitle>
        <Styled.CalendarButton onClick={openEndCalender}>
          {endDate || "종료 기간 선택"}
        </Styled.CalendarButton>
      </Layout.Content>
      <Layout.Bottom>
        <button onClick={() => moveNext("메롱롱롱")}>완료</button>
      </Layout.Bottom>
    </>
  );
};

export default WriteTaskPeriod;
