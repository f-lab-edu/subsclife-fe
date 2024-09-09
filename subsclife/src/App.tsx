import styled from "styled-components";

//* styled-components theme 사용 예시
const Container = styled.div`
  background: ${({ theme }) => theme.color.green};
`;

function App() {
  return (
    <>
      <main>
        <Container>main</Container>
      </main>
    </>
  );
}

export default App;
