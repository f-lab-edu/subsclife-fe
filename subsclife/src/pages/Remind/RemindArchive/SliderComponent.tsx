import { theme } from "@/styles/theme";
import React, { forwardRef, Ref, useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  margin-bottom: 60px;
`;

const Slider = styled.input`
  -webkit-appearance: none; /* 브라우저 기본 스타일 없애기 */
  appearance: none;
  width: 100%;
  max-width: 330px;
  height: 10px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color["yellow-1"]} 50%,
    ${({ theme }) => theme.color["yellow-6"]} 50%
  );
  outline: none;
  border-radius: 5px;
  margin: 10px 0;

  /* Chrome, Safari */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px; /* 네모 크기 */
    height: 20px;
    background-color: #c1c1c1;
    border-radius: 0px; /* 네모 모양 */
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.color["gray-2"]}; /* 테두리 */
  }

  /* Firefox */
  ::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: #c1c1c1;
    border-radius: 0px; /* 네모 모양 */
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.color["gray-2"]}; /* 테두리 */
  }

  /* Internet Explorer */
  ::-ms-thumb {
    width: 20px;
    height: 20px;
    background-color: #c1c1c1;
    border-radius: 0px; /* 네모 모양 */
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.color["gray-2"]}; /* 테두리 */
  }
`;

const PercentageDisplay = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color["yellow-1"]};
`;

const RangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 330px;
  font-size: 24px; /* 폰트 크기를 24px로 설정 */
  font-weight: bold; /* 굵게 표시 */
  color: ${({ theme }) =>
    theme.color["green-1"]}; /* theme의 green-1 색상 적용 */
`;

const Label = styled.span`
  font-size: 24px; /* 폰트 크기 24px */
  font-weight: bold; /* 글자 굵기 bold */
  color: ${({ theme }) => theme.color["green-1"]}; /* 색상을 theme에서 적용 */
`;

interface SliderComponentProps {
  value: number;
}

const SliderComponent = (
  { value }: SliderComponentProps,
  ref: Ref<HTMLInputElement>
) => {
  const [percentage, setPercentage] = useState(value);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(e.target.value));
  };

  return (
    <SliderContainer>
      <PercentageDisplay>{percentage}%</PercentageDisplay>
      <Slider
        ref={ref}
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={handleSliderChange}
        style={{
          background: `linear-gradient(to right, ${theme.color["yellow-1"]} ${percentage}%, ${theme.color["yellow-6"]} ${percentage}%)`,
        }}
      />
      <RangeLabels>
        <Label>0%</Label> {/* 왼쪽 라벨 */}
        <Label>100%</Label> {/* 오른쪽 라벨 */}
      </RangeLabels>
    </SliderContainer>
  );
};

export default forwardRef(SliderComponent);
