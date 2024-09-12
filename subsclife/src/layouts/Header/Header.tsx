import { PropsWithChildren } from "react";

import * as Styled from "./Header.styled";

const Header = ({ children }: PropsWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Header;
