import styled from "styled-components";

const Container = styled.div`
  padding: 40px 32px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.green};
`;

const loginButtonColors = {
  black: "#45474B",
  green: "#03C75A",
  yellow: "#F3D902",
} as const;

const ButtonWrapper = styled.button<{ color: "black" | "green" | "yellow" }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${({ color }) => loginButtonColors[color]};

  svg {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme, color }) =>
      color === "yellow" ? theme.color.black : theme.color.white};
  }
`;

export { Container, Title, ButtonWrapper };
