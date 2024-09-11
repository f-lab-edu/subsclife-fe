import styled from "styled-components";

const Container = styled.div`
  padding: 40px 32px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 5px;

    span {
      font-weight: 400;
    }

    em {
      font-weight: bold;
    }
  }

  .task-box {
    margin-bottom: 40px;
  }
`;

export { Container };
