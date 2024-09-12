import TextContainer from "@/components/TextContainer/TextContainer.styled";
import React from "react";


interface TextBoxProps {
  textLines: string[];
}

const TextBox: React.FC<TextBoxProps> = ({ textLines }) => {
  return (
    <TextContainer>
      {textLines.map((line, index) => (
        <div key={index}>{line}</div> // 각 줄을 div로 나눠서 렌더링
      ))}
    </TextContainer>
  );
};

export default TextBox;
