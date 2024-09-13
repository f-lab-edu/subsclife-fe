import React, { useRef } from "react";
import TextBox from "../../../components/TextBox/TextBox";
import { useNavigate, useParams } from "react-router-dom";
import { RemindContainer } from "../Remind.styled";
import NextButton from "@/components/NextButton/NextButton";
import SliderComponent from "./SliderComponent";
import styled from "styled-components";
import ArchiveImage from "@/assets/archive.svg?url"; // 이미지 불러오기
import { remindStore } from "@/store/remind";

const ImageContainer = styled.img`
  width: 238px;
  height: 211px;
  display: block;
  margin: 0 auto 55px auto;
`;

const RemindAchieve: React.FC = () => {
  const navigate = useNavigate();
  const { remind, updateRemind } = remindStore();
  const { taskId } = useParams<{ taskId: string }>();
  const sliderRef = useRef<HTMLInputElement>(null);

  const nextHandler = () => {
    if (sliderRef.current) {
      const { value } = sliderRef.current;
      navigate(`/remind/${taskId}/pros`);
      updateRemind({ ...remind, achievementRate: +value });
    }
  };

  return (
    <RemindContainer>
      <div className="divider">
        <TextBox
          textLines={["스스로 생각했을 때", "얼마나 목표를", "달성했나요?"]}
        />
        <SliderComponent ref={sliderRef} value={remind.achievementRate} />
        <ImageContainer src={ArchiveImage} alt="archive" />
      </div>
      <div className="button_wrapper">
        <NextButton
          mode="next"
          nextPage={`/remind/${taskId}/pros`}
          callback={nextHandler}
        />
      </div>
    </RemindContainer>
  );
};

export default RemindAchieve;
