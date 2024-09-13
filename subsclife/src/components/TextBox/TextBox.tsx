import TextContainer from "@/components/TextContainer/TextContainer.styled";
import React from "react";
import styled from "styled-components";

const HighlightNumber = styled.span`
  color: ${({ theme }) => theme.color["yellow-1"]};
  font-weight: bold;
`;

interface TextBoxProps {
  textLines: string[];
}

const TextBox: React.FC<TextBoxProps> = ({ textLines }) => {
  const renderLine = (line: string, index: number) => {
    const regex = /(\d+)([^\d]*)/g;
    const parts = [];

    let match;
    let lastIndex = 0;

    while ((match = regex.exec(line)) !== null) {
      const number = match[1];
      const restOfText = match[2];

      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }

      parts.push(
        <HighlightNumber key={index + '-number'}>
          {number}%
        </HighlightNumber>
      );

      if (restOfText) {
        parts.push(restOfText);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    return parts;
  };

  return (
    <TextContainer>
      {textLines.map((line, index) => (
        <div key={index}>
          {renderLine(line, index)}
        </div>
      ))}
    </TextContainer>
  );
};

export default TextBox;
