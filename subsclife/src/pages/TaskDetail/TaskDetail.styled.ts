import styled from "styled-components";

const Container = styled.div`
  padding: 60px 32px;
  color: ${({ theme }) => theme.color.black};

  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 38px;
    word-break: keep-all;
    color: ${({ theme }) => theme.color.green};
    margin-bottom: 10px;
  }

  .simple_desc {
    margin-bottom: 20px;
  }

  .gauge {
    margin-bottom: 15px;
  }

  .period {
    font-size: 16px;
    margin-bottom: 5px;

    span {
      font-weight: bold;
      margin-right: 10px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;

    span {
      font-weight: 400;
    }

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  .desc {
    background-color: ${({ theme }) => theme.color.white};
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 10px;
    line-height: 24px;
    white-space: pre-wrap;
  }

  .users {
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;

    .user {
      width: 50%;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
      gap: 10px;

      svg {
        width: 34px;
        height: 34px;
      }
    }
  }

  .caution {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.black};
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.color["yellow-1"]};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  border-radius: 10px;
`;

const SubscribeButton = styled(Button)<{ $subscribed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 40px;
  padding: 10px 24px;
  font-size: 18px;
  background-color: ${({ $subscribed, theme }) =>
    $subscribed ? theme.color.green : theme.color["yellow-1"]};
  color: ${({ $subscribed, theme }) =>
    $subscribed ? theme.color.white : theme.color.black};
`;

export { Container, Button, SubscribeButton };
