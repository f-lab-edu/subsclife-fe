import React from "react";
import TextBox from "../../../components/TextBox/TextBox";
import NextButton from "../../../components/NextButton/NextButton";
import InputBox from "../../../components/InputBox/InputBox"
import { Outlet, useNavigate , useParams} from "react-router-dom";
import { RemindContainer, BackButton } from "../Remind.styled"; 
import ProsImage from "assets/pros.svg?url"; // 이미지 불러오기
import styled from "styled-components"; 

const persent = 50;
// 이미지 스타일
const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block; 
  margin: 0 auto 0;
`;

const RemindPros: React.FC = () => {
  const { taskId } = useParams<{taskId: string}>(); 
  const navigate = useNavigate();
  return (
    <RemindContainer>
      <BackButton onClick={() => navigate(-1)}>{"< 이전"}</BackButton>
      <TextBox textLines={["왜 " + persent + "만큼", "달성 했다고 생각하시나요?"]}/>
      <InputBox question="왜 그렇게 생각하는 지 이유를 써 봅시다." maxLength={500}/>
      <ImageContainer src={ ProsImage } alt="probs" /> 
      <Outlet />
      <NextButton mode="next" nextPage={`/remind/${taskId}/cons`}/>      
    </RemindContainer>
  );
};

export default RemindPros;