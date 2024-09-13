import { ChangeEvent, useState } from "react";

import Layout from "@/layouts/Layout";
import Header from "@/layouts/Header";
import NaviHeader from "@/layouts/NaviHeader";
import { WriteTaskPageType } from "../WriteTask";

import * as Icons from "@/assets/icons";
import * as Styled from "./WriteTaskDetail.styled";

const WriteTaskDetail = ({ task, movePrev, moveNext }: WriteTaskPageType) => {
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
          <button onClick={prevHandler}>
            <Icons.ChevronLeftIcon />
            <p>이전</p>
          </button>
        </NaviHeader>
      </Header>
      <Layout.Content>
        <Styled.Title>
          한 줄 소개 및 설명을
          <br />
          작성 해 볼까요?
        </Styled.Title>
        <Styled.SubTitle>목표 활동을 적어주세요.</Styled.SubTitle>
        <Styled.TextareaWrapper>
          <textarea
            value={simpleInfo}
            onChange={changeSimpleInfoHandler}
            maxLength={50}
          />
          <p>
            <em>{simpleInfo.length}</em> / 50
          </p>
        </Styled.TextareaWrapper>

        <Styled.SubTitle>부가 설명을 작성 해 주세요.</Styled.SubTitle>
        <Styled.TextareaWrapper>
          <textarea
            value={detail}
            onChange={changeDetailHandler}
            maxLength={100}
          />
          <p>
            <em>{detail.length}</em> / 100
          </p>
        </Styled.TextareaWrapper>
      </Layout.Content>
      <Layout.Bottom>
        <button onClick={nextHandler}>다음</button>
      </Layout.Bottom>
    </>
  );
};

export default WriteTaskDetail;
