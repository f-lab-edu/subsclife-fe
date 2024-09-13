import { PropsWithChildren, useEffect } from "react";

import { useLayoutContext } from "@/contexts/layout/LayoutContext";

const Header = ({ children }: PropsWithChildren) => {
  const { changeHeader } = useLayoutContext();

  useEffect(() => {
    changeHeader(children);
  }, [children]);

  return <></>;
};

export default Header;
