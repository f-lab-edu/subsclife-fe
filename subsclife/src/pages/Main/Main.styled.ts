import styled from "styled-components";

const Container = styled.div`
  padding: 40px 32px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
  }
`;

export { Container };
