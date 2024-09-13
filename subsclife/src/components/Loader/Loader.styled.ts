import styled, { CSSProperties, keyframes } from "styled-components";

const infiniteRotate = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}`;

const Wrapper = styled.div<{
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

const size = {
  lg: 48,
  md: 24,
  sm: 12,
} as const;

const LoadingSpan = styled.span<{ $size: "lg" | "md" | "sm" }>`
  position: relative;
  display: inline-block;
  min-width: ${({ $size }) => size[$size]}px;
  min-height: ${({ $size }) => size[$size]}px;
  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;
  animation: ${infiniteRotate} 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 0;
    background: ${({ theme }) => theme.color["yellow-1"]};
    width: 3px;
    height: ${({ $size }) => size[$size] / 2}px;
    transform: translateX(-50%);
  }
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 45%;
    top: 0;
    background: ${({ theme }) => theme.color.green};
    width: 3px;
    height: ${({ $size }) => size[$size] / 2}px;
    transform: translateX(-50%);
  }
`;

export { Wrapper, LoadingSpan };
