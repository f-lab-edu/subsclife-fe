import { PropsWithChildren } from "react";

import * as Styled from "./NaviHeader.styled";

const NaviHeader = ({ children }: PropsWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default NaviHeader;
