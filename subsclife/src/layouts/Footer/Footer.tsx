import { Link, useLocation } from "react-router-dom";
import { PropsWithChildren, useEffect } from "react";

import { useLayoutContext } from "@/contexts/layout/LayoutContext";

import * as Icons from "@/assets/icons";
import * as Styled from "./Footer.styled";

const FooterIcons = [
  {
    url: "/",
    icon: <Icons.HomeIcon />,
    activeIcon: <Icons.FilledHomeIcon />,
  },
  {
    url: "/search",
    icon: <Icons.SearchIcon />,
    activeIcon: <Icons.FilledSearchIcon />,
  },
  {
    url: "/history",
    icon: <Icons.DocsIcon />,
    activeIcon: <Icons.FilledDocsIcon />,
  },
];

const FooterContent = () => {
  const { pathname } = useLocation();

  return (
    <Styled.Container>
      {FooterIcons.map(({ url, icon: Icon, activeIcon: ActiveIcon }) => (
        <Styled.NaviButton key={url}>
          <Link to={url}>{pathname === url ? ActiveIcon : Icon}</Link>
        </Styled.NaviButton>
      ))}
    </Styled.Container>
  );
};

const Footer = () => {
  const { changeFooter } = useLayoutContext();

  useEffect(() => {
    changeFooter(<FooterContent />);
  }, []);

  return <></>;
};

export default Footer;
