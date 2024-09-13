import { PropsWithChildren } from "react";

import { Logo } from "@/assets/icons";
import * as Styled from "./LogoHeader.styled";

const LogoHeader = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Container>
      <Styled.LogoWrapper>
        <Logo />
      </Styled.LogoWrapper>
      {children}
    </Styled.Container>
  );
};

export default LogoHeader;
