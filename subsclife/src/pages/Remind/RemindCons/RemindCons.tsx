import React, { useRef } from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox";
import { useNavigate, useParams } from "react-router-dom";
import { RemindContainer } from "../Remind.styled";
import ConsImage from "@/assets/cons.svg?url";
import styled from "styled-components";
import { remindStore } from "@/store/remind";

// 이미지 스타일
const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block;
  margin: 0 auto;
`;

const RemindCons: React.FC = () => {
  const navigate = useNavigate();
  const { remind, updateRemind } = remindStore();
  const { taskId } = useParams<{ taskId: string }>();
  const textRef = useRef<HTMLTextAreaElement>(null);

  const nextHandler = () => {
    if (textRef.current) {
      const { value } = textRef.current;
      updateRemind({ ...remind, failReason: value });
      navigate(`/remind/${taskId}/improve`);
    }
  };

  return (
    <RemindContainer>
      <div className="divider">
        <TextBox
          textLines={[100 - remind.achievementRate + "는", "왜 부족했을까요?"]}
        />
        <InputBox
          ref={textRef}
          question="아쉬웠던 점을 작성 해 봅시다."
          maxLength={500}
          value={remind.failReason}
        />
        <ImageContainer src={ConsImage} alt="cons" />
      </div>
      <div className="button_wrapper">
        <NextButton
          mode="next"
          nextPage={`/remind/${taskId}/improve`}
          callback={nextHandler}
        />
      </div>
    </RemindContainer>
  );
};

export default RemindCons;
