import { ChangeEvent, useState } from "react";

import Layout from "@/layouts/Layout";
import Header from "@/layouts/Header";
import NaviHeader from "@/layouts/NaviHeader";
import { WriteTaskPageType } from "../WriteTask";

import * as Icons from "@/assets/icons";
import * as Styled from "./WriteTaskPeriod.styled";

const WriteTaskPeriod = ({ task, movePrev, moveNext }: WriteTaskPageType) => {
  const [simpleInfo, setSimpleInfo] = useState<string>(task.simpleInfo || "");
  const [detail, setDetail] = useState<string>(task.detail || "");

  const nextTask = {
    simpleInfo,
    detail,
  };

  const prevHandler = () => movePrev(nextTask);
  const nextHandler = () => moveNext(nextTask);

  const changeSimpleInfoHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setSimpleInfo(value);
  };

  const changeDetailHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDetail(value);
  };

  return (
    <>
      <Header>
        <NaviHeader>
          <button onClick={() => movePrev("메롱롱롱")}>
            <Icons.ChevronLeftIcon />
            <p>이전</p>
          </button>
        </NaviHeader>
      </Header>
      <Layout.Content>
        <Styled.Title>
          어떤 활동을
          <br /> 목표로 해 기간
        </Styled.Title>
        <Styled.SubTitle>목표 활동을 적어주세요.</Styled.SubTitle>
        <input type="date" />
      </Layout.Content>
      <Layout.Bottom>
        <button onClick={() => moveNext("메롱롱롱")}>완료</button>
      </Layout.Bottom>
    </>
  );
};

export default WriteTaskPeriod;
