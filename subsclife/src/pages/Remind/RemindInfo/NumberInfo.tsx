import React from "react";
import styled from "styled-components";

interface NumberInfoProps {
  number: number;
}

const NumberContainer = styled.div`
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
`;

const NumberInfo: React.FC<NumberInfoProps> = ({ number }) => {
  return <NumberContainer>{number}명이 함께 하고 있어요!</NumberContainer>;
};

export default NumberInfo;
