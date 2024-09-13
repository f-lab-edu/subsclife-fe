import styled, { css, RuleSet } from "styled-components";

const Container = styled.div<{
  $size: "full" | "fit-content";
  $css: RuleSet<object>;
}>`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 350px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(100px);
  box-shadow: 0 8px 20px 10px ${({ theme }) => theme.color["gray-6"]};
  border: 1px solid rgba(255, 255, 255, 0.18);

  p {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 20px 10px;
  }

  ${({ $size }) =>
    $size === "full"
      ? css`
          top: 20px;
          bottom: 20px;
          padding: 70px 10px;
        `
      : css`
          top: 100px;
          padding: 40px 10px;
        `}

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
  }

  ${({ $css }) => $css}
`;

export { Container };
