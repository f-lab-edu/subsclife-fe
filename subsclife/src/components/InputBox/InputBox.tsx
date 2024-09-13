import React, { forwardRef, Ref, useState } from "react";
import styled from "styled-components";

interface InputBoxProps {
  maxLength: number;
  question: string;
  value: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 60px;

  background-color: none;
  color: ${({ theme }) => theme.color.black};

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }

  div {
    width: 100%;
    height: 270px;
    margin-top: 5px;
    padding: 15px 10px;
    box-sizing: border-box;
    font-size: 16px;

    border-radius: 10px;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.color.white};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 44px);
  background-color: transparent;
  border: none;
  resize: none;
  outline: none;
  font-size: 18px;
  line-height: 24px;
  white-space: pre-wrap;
`;

const CharCount = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color["gray-1"]};
  text-align: right;
  padding: 15px 10px;

  em {
    font-weight: bold;
  }
`;

const InputBox = (
  { maxLength, question, value }: InputBoxProps,
  ref: Ref<HTMLTextAreaElement>
) => {
  const [text, setText] = useState<string>(value);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <InputContainer>
      <p>{question}</p>
      <div>
        <TextArea
          ref={ref}
          value={text}
          onChange={handleTextChange}
          maxLength={maxLength}
        />
        <CharCount>
          <em>{text.length}</em> / {maxLength}
        </CharCount>
      </div>
    </InputContainer>
  );
};

export default forwardRef(InputBox);
