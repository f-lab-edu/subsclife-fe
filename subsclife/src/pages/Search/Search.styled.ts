import styled from "styled-components";

const SerachInput = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  gap: 5px;
  margin: 0px 10px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 9999px;
  padding: 12px 20px 12px 12px;

  svg {
    width: 28px;
    height: 28px;
    fill: ${({ theme }) => theme.color.green};
  }

  input {
    width: 100%;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 24px;
  }
`;

const Container = styled.div`
  padding: 30px 32px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export { SerachInput, Container };
