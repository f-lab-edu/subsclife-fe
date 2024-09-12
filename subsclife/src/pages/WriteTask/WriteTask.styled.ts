import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 70px 35px;
  color: ${({ theme }) => theme.color.black};

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Bottom = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color["yellow-1"]};
    font-size: 20px;
    font-weight: bold;

    :disabled {
      background-color: ${({ theme }) => theme.color["gray-6"]};
      color: ${({ theme }) => theme.color["gray-5"]};
    }
  }
`;

export { Main, Content, Bottom };
