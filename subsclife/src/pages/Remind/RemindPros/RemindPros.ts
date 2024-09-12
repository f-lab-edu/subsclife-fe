import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import { Outlet, useNavigate } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import NextButton from "@/components/NextButton/NextButton";
import styled from "styled-components";
import ProsImage from "@/assets/pros.svg"; // 이미지 불러오기

const remindId = 1;

const RemindPros: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={["스스로 생각할 때", "얼마나 목표를", "달성했나요?"]} />
      <ImageContainer src={ProsImage} alt="pros" /> {/* 이미지 배치 */}
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${remindId}/cons`} />
    </RemindContainer>
  );
};

export default RemindPros;