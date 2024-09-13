import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
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

export { Container, NaviButton };
