import { createContext, ReactNode, useContext } from "react";

interface LayoutContextType {
  header?: ReactNode;
  footer?: ReactNode;
  changeHeader: (component: ReactNode) => void;
  changeFooter: (component: ReactNode) => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("Not in scope of LayoutContext");
  }

  return context;
};

export { useLayoutContext, LayoutContext };
