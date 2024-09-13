import styled from "styled-components";

const Container = styled.div`
  padding: 70px 0px 0px 0px;
  *,
  & * {
    color: ${({ theme }) => theme.color.black};
  }
`;

const Title = styled.p<{ $align?: "left" | "right" }>`
  font-size: 32px;
  font-weight: bold;
  text-align: ${({ $align = "left" }) => $align};
  color: ${({ theme }) => theme.color.black};
  line-height: 48px;

  em {
    color: ${({ theme }) => theme.color["yellow-1"]};
  }

  strong {
    color: ${({ theme }) => theme.color.green};
  }

  u {
    color: ${({ theme }) => theme.color["yellow-1"]};
    text-decoration-color: ${({ theme }) => theme.color.green};
    text-decoration-thickness: 5px;
  }
`;

const Block = styled.div<{ $backclr?: "white" }>`
  padding: 70px 35px 100px 35px;
  background-color: ${({ theme, $backclr }) => $backclr && theme.color.white};
`;

const ImageWrapper = styled.div<{ $width: number }>`
  display: flex;
  justify-content: center;

  img {
    width: ${({ $width }) => $width}px;
    margin-top: 40px;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0px 35px 130px 35px;

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
  }
`;

const Footer = styled.footer`
  padding: 30px 35px 60px 35px;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};

  p {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
  }

  em {
    display: block;
    font-size: 24px;
    color: ${({ theme }) => theme.color["yellow-1"]};
    margin: 20px 0px;
  }

  div {
    font-size: 22px;
    margin-bottom: 30px;

    p {
      font-size: 20px;
      font-weight: bold;
      margin: 16px 0;
    }
    em {
      font-size: 20px;
      margin: 16px 0;
    }
  }
`;

export { Container, Title, Block, ImageWrapper, ButtonWrapper, Footer };
