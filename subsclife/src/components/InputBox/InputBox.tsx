import React, { useState } from 'react';
import styled from 'styled-components';

interface InputBoxProps {
  maxLength: number;
  question: string; 
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 100%;
  max-width: 390px;
  padding: 20px;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-top: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.color["gray-1"]};
  border-radius: 10px;
  resize: none;
  overflow-y: auto;
`;

const CharCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color["gray-1"]};
  align-self: flex-end;
`;

const InputBox: React.FC<InputBoxProps> = ({ maxLength, question }) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <InputContainer>
      <p>{question}</p>
      <TextArea
        value={text}
        onChange={handleTextChange}
        maxLength={maxLength}
        placeholder="여기에 내용을 입력하세요"
      />
      <CharCount>
        {text.length} / {maxLength}
      </CharCount>
    </InputContainer>
  );
};

export default InputBox;
