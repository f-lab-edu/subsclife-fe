import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 93px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color.green};
`;

export { Container };
