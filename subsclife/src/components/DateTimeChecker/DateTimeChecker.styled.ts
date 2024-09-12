import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  height: 100%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.green};
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 20px;
`;

const SelectedDate = styled.p<{ $confirmed?: boolean }>`
  margin-bottom: ${({ $confirmed }) => ($confirmed ? "65px" : "10px")};
  font-size: 16px;
  text-align: center;
`;

export { Container, Title, ConfirmButton, SelectedDate };
