import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox"
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import ImproveImage from "@/assets/improve.svg?url";
import styled from "styled-components"; 

const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block; 
  margin: 0 auto 0;
`;

const RemindImprove: React.FC = () => {
  const navigate = useNavigate();
  const { taskId } = useParams<{taskId: string}>(); 
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={["어떻게 하면", "더 잘할 수 있을 까요?"]}/>
      <InputBox question="개선할 점을 작성 해 봅시다." maxLength={500}/>
      <ImageContainer src={ ImproveImage } alt="improve" /> 
      <Outlet />
      <NextButton mode="complete" />      
    </RemindContainer>
  );
};

export default RemindImprove;