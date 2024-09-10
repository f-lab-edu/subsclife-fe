import { PropsWithChildren } from "react";
import styled from "styled-components";

//* styled-components theme 사용 예시
const Container = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.green};
`;

const App = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default App;
