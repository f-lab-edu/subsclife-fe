import { PropsWithChildren } from "react";
import * as Styled from "./Layout.styled";

const Main = ({ children }: PropsWithChildren) => {
  return <Styled.Main>{children}</Styled.Main>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <Styled.Content>{children}</Styled.Content>;
};

const Bottom = ({ children }: PropsWithChildren) => {
  return <Styled.Bottom>{children}</Styled.Bottom>;
};

const Layout = Object.assign(Main, { Main, Content, Bottom });

export default Layout;
