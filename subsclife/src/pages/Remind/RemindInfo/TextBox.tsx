import TextContainer from "@/components/TextContainer/TextContainer.styled";
import React from "react";

interface TextBoxProps {
  textName: string;
}

const TextBox: React.FC<TextBoxProps> = ({ textName }) => {
  return (
    <TextContainer>
      {textName}
      <br />
      회고를 작성해볼까요?
    </TextContainer>
  );
};

export default TextBox;
