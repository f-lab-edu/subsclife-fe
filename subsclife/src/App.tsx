import { PropsWithChildren } from "react";
import styled from "styled-components";

//* styled-components theme 사용 예시
const Container = styled.div`
  background: ${({ theme }) => theme.color.green};
`;

const App = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Container>App</Container>
      {children}
    </main>
  );
};

export default App;
