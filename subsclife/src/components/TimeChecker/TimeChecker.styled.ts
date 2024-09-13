import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px)
  }
  
  100% {
    opacity: 1;
    transform: translateY(-160px)

  }
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 10px;
  border-radius: 20px 20px 0px 0px;
  background-color: ${({ theme }) => theme.color.white};
  backdrop-filter: blur(100px);
  box-shadow: 0 -10px 10px 0px ${({ theme }) => theme.color["gray-6"]};
  /* transform: translateY(-100px); */
  /* transition: all 0.5s ease-in-out forward; */
  animation: ${slideUp} 0.7s ease-in-out forwards;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.green};
`;

const List = styled.ul`
  height: 300px;
  overflow: scroll;
`;

const Item = styled.li<{ $active: boolean }>`
  button {
    font-size: 16px;
    width: 100%;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: ${({ theme, $active }) =>
      $active && theme.color["green-6"]};

    &:hover {
      background-color: ${({ theme }) => theme.color["green-6"]};
    }
  }
`;

export { Backdrop, Container, Title, List, Item };
