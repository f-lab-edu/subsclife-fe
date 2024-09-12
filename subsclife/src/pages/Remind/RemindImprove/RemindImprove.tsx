import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox"
import { Outlet, useNavigate } from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
// import ArchiveImage from "../../../assets"; // 이미지 불러오기
// import styled from "styled-components"; 

const remindId = 1;
const persent = 50;
// 이미지 스타일
// const ImageContainer = styled.img`
//   width: 150px;
//   height: auto;
//   display: block; 
//   margin: 20px auto 0;
// `;

const RemindCons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={["어떻게 하면", "더 잘할 수 있을 까요"]}/>
      <InputBox maxLength={500}/>
      {/* <ImageContainer src=pro alt="probs" />  */}
      <Outlet />
      <NextButton mode="complete" />      
    </RemindContainer>
  );
};

export default RemindCons;