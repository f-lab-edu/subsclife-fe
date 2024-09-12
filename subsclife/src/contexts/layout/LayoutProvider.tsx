import { PropsWithChildren, ReactNode, useState } from "react";

import { LayoutContext } from "./LayoutContext";

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [header, setHeader] = useState<ReactNode>();
  const [footer, setFooter] = useState<ReactNode>();

  const changeHeader = (component: ReactNode) => setHeader(component);
  const changeFooter = (component: ReactNode) => setFooter(component);

  return (
    <LayoutContext.Provider
      value={{ header, footer, changeHeader, changeFooter }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider };
