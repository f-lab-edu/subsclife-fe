import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  width: 350px;
  padding: 70px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(100px);
  box-shadow: 0 8px 20px 10px ${({ theme }) => theme.color["gray-6"]};
  border: 1px solid rgba(255, 255, 255, 0.18);

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
  }
`;

export { Container };
