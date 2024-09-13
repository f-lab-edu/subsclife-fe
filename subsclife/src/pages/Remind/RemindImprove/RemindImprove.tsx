import React, { useRef } from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox";
import { RemindContainer } from "../Remind.styled";
import ImproveImage from "@/assets/improve.svg?url";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { remindStore } from "@/store/remind";
import instance from "@/api/instance";

const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block;
  margin: 0 auto;
`;

const RemindImprove: React.FC = () => {
  const navigate = useNavigate();
  const { remind, updateRemind } = remindStore();
  const { taskId } = useParams<{ taskId: string }>();
  const textRef = useRef<HTMLTextAreaElement>(null);

  const nextHandler = async () => {
    if (textRef.current) {
      const { value } = textRef.current;
      const newRemind = { ...remind, improvementPlan: value };
      updateRemind(newRemind);

      console.log(newRemind);

      const sendRemind = { taskId, ...newRemind };
      const response = await instance.post("/api/v1/reminds", sendRemind);
      console.log(response);
      if (response.status === 201) {
        console.log("회고 작성 완료했습니다");
      } else {
        console.log("완료 중 오류가 발생했습니다.");
      }

      navigate(`/`);
    }
  };

  return (
    <RemindContainer>
      <div className="divider">
        <TextBox textLines={["어떻게 하면", "더 잘할 수 있을까요?"]} />
        <InputBox
          ref={textRef}
          question="개선할 점을 작성 해 봅시다."
          maxLength={500}
          value={remind.improvementPlan}
        />
        <ImageContainer src={ImproveImage} alt="improve" />
      </div>
      <div className="button_wrapper">
        <NextButton mode="complete" callback={nextHandler} />
      </div>
    </RemindContainer>
  );
};

export default RemindImprove;
