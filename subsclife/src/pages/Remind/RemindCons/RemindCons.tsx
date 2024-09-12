import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox"
import { Outlet, useNavigate } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import ConsImage from "@/assets/cons.svg"; // 이미지 불러오기
import styled from "styled-components"; 

const remindId = 1;
const persent = 50;
// 이미지 스타일
const ImageContainer = styled.img`
  width: 150px;
  height: auto;
  display: block; 
  margin: 20px auto 0;
`;

const RemindCons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={[persent + "% 는", "왜 부족했을 까요"]}/>
      <InputBox maxLength={500}/>
      <ImageContainer src={ConsImage} alt="cons" /> 
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${remindId}/improve`}/>      
    </RemindContainer>
  );
};

export default RemindCons;