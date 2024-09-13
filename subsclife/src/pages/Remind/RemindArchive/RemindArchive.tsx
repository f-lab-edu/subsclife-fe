import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import { Outlet, useNavigate } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import NextButton from "@/components/NextButton/NextButton";
import SliderComponent from "./SliderComponent";
import styled from "styled-components";
import ArchiveImage from "@/assets/archive.svg?url"; // 이미지 불러오기

const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block; 
  margin: 0 auto 0;
`;

interface RemindAchieveProps {
  taskId: number;
}
const RemindAchieve: React.FC = (taskId) => {
  const navigate = useNavigate();
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={["스스로 생각할 때", "얼마나 목표를", "달성했나요?"]} />
      <SliderComponent />
      <ImageContainer src={ArchiveImage} alt="archive" />
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${taskId}/pros`} />
    </RemindContainer>
  );
};

export default RemindAchieve;
