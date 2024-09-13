import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
    outline: none;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
  }

  html, body, #root, body * {
    font-family: 'Pretendard';
  }
`;

export default GlobalStyles;
