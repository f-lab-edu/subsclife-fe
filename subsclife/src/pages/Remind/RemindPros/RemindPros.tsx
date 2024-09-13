import React, { useRef } from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox";
import { useNavigate, useParams } from "react-router-dom";
import { RemindContainer } from "../Remind.styled";
import ProsImage from "assets/pros.svg?url"; // 이미지 불러오기
import styled from "styled-components";
import { remindStore } from "@/store/remind";

// 이미지 스타일
const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block;
  margin: 0 auto;
`;

const RemindPros: React.FC = () => {
  const navigate = useNavigate();
  const { remind, updateRemind } = remindStore();
  const { taskId } = useParams<{ taskId: string }>();
  const textRef = useRef<HTMLTextAreaElement>(null);

  const nextHandler = () => {
    if (textRef.current) {
      const { value } = textRef.current;
      updateRemind({ ...remind, achieveReason: value });
      navigate(`/remind/${taskId}/cons`);
    }
  };

  return (
    <RemindContainer>
      <div className="divider">
        <TextBox
          textLines={[
            "왜 " + remind.achievementRate + "만큼",
            "달성 했다고 생각하나요?",
          ]}
        />
        <InputBox
          ref={textRef}
          question="왜 그렇게 생각하는 지 이유를 써 봅시다."
          maxLength={500}
          value={remind.achieveReason}
        />
        <ImageContainer src={ProsImage} alt="probs" />
      </div>
      <div className="button_wrapper">
        <NextButton
          mode="next"
          nextPage={`/remind/${taskId}/cons`}
          callback={nextHandler}
        />
      </div>
    </RemindContainer>
  );
};

export default RemindPros;
