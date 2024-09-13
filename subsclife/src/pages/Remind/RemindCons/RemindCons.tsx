import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox"
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import ConsImage from "@/assets/cons.svg?url";
import styled from "styled-components"; 

const persent = 50;
// 이미지 스타일
const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block; 
  margin: 0 auto 0;
`;

const RemindCons: React.FC = () => {
  const navigate = useNavigate();
  const { taskId } = useParams<{taskId: string}>(); 
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={[persent + " 는", "왜 부족했을 까요?"]}/>
      <InputBox question="아쉬웠던 점을 작성 해 봅시다." maxLength={500}/>
      <ImageContainer src={ConsImage} alt="cons" /> 
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${taskId}/improve`}/>      
    </RemindContainer>
  );
};

export default RemindCons;