import React, { useState } from "react";
import styled from "styled-components";

interface InputBoxProps {
  maxLength: number;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 390px;
  background-color: ${({ theme }) => theme.color["gray-3"]}; /* 배경을 회색으로 설정 */
  padding: 20px; /* 추가된 패딩으로 텍스트 영역과 외부 간격 추가 */
  border-radius: 10px; /* 배경 테두리 모양 둥글게 설정 */
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 10px;
  resize: none;
  overflow-y: auto;
`;

const CharCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color["gray-1"]};
`;

const InputBox: React.FC<InputBoxProps> = ({ maxLength }) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <InputContainer>
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
