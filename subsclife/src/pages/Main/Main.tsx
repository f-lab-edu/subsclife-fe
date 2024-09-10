import { useEffect } from "react";

import LogoHeader from "@/layouts/LogoHeader";
import Footer from "@/layouts/Footer";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";

import * as Styled from "./Main.styled";

const Main = () => {
  const { changeHeader, changeFooter } = useLayoutContext();

  useEffect(() => {
    changeHeader(<LogoHeader />);
    changeFooter(<Footer />);
  }, []);

  return (
    <Styled.Container>
      <h1>작성할 회고</h1>
    </Styled.Container>
  );
};

export default Main;
