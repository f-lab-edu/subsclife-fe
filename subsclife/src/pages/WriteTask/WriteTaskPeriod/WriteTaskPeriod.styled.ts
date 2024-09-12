import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.green};
  line-height: 48px;
  word-break: keep-all;
`;

const SubTitle = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
`;
const TextareaWrapper = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  textarea {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    background-color: transparent;
    border: none;
    resize: none;
    outline: none;
    font-size: 18px;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    text-align: right;

    em {
      font-weight: bold;
    }
  }
`;

const CalendarButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

export { Title, SubTitle, TextareaWrapper, CalendarButton };
