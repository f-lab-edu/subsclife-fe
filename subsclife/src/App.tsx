import { PropsWithChildren } from "react";
import styled from "styled-components";

import { useLayoutContext } from "./contexts/layout/LayoutContext";
import globalStore from "./store/global";

//* styled-components theme 사용 예시
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  outline: 1px solid black;
`;

const Main = styled.main`
  flex: 1;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = ({ children }: PropsWithChildren) => {
  const { modal: Modal } = globalStore();
  const { header: Header, footer: Footer } = useLayoutContext();

  return (
    <Container>
      {Header}
      <Main>{children}</Main>
      {Footer}
      <Modal />
    </Container>
  );
};

export default App;
