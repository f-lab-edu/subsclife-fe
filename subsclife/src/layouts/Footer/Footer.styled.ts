import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.green};
`;

const NaviButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 70%;
  background: none;
  border: none;
  border-left: 2px;
  border-left-style: solid;

  &:not(:first-of-type) {
    border-left-color: ${({ theme }) => theme.color.white};
  }
`;

const AddTask = styled.div`
  position: absolute;
  right: 20px;
  bottom: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  border: 3px solid ${({ theme }) => theme.color.green};
`;

export { Container, NaviButton, AddTask };
