import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px 10px 0px;
  background-color: ${({ theme }) => theme.color.green};

  svg {
    height: 53px;
  }
`;

const LogoWrapper = styled.div`
  padding: 20px 30px;
`;

export { Container, LogoWrapper };
