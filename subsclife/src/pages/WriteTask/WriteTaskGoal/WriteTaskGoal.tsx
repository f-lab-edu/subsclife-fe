import { ChangeEvent, useState } from "react";

import Layout from "@/layouts/Layout";
import Header from "@/layouts/Header";
import NaviHeader from "@/layouts/NaviHeader";
import { WriteTaskPageType } from "../WriteTask";

import * as Icons from "@/assets/icons";
import * as Styled from "./WriteTaskGoal.styled";

const WriteTaskGoal = ({ task, movePrev, moveNext }: WriteTaskPageType) => {
  const [title, setTitle] = useState<string>(task.title || "");

  const prevHandler = () =>
    movePrev({
      title,
    });
  const nextHandler = () =>
    moveNext({
      title,
    });

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTitle(value);
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
          어떤 활동을
          <br /> 목표로 해 볼까요?
        </Styled.Title>
        <Styled.SubTitle>목표 활동을 적어주세요.</Styled.SubTitle>
        <Styled.TextareaWrapper>
          <textarea value={title} onChange={changeHandler} maxLength={30} />
          <p>
            <em>{title.length}</em> / 30
          </p>
        </Styled.TextareaWrapper>
      </Layout.Content>
      <Layout.Bottom>
        <button disabled={!title.length} onClick={nextHandler}>
          다음
        </button>
      </Layout.Bottom>
    </>
  );
};

export default WriteTaskGoal;
