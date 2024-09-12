import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 15px;

  button {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      font-size: 18px;
      color: ${({ theme }) => theme.color.black};
    }
  }
`;

export { Container };
