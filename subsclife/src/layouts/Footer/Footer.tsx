import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const { changeFooter } = useLayoutContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const moveToCreateTask = () => {
    changeFooter(<></>);
    navigate("/task?page=0");
  };

  return (
    <Styled.Container>
      {FooterIcons.map(({ url, icon: Icon, activeIcon: ActiveIcon }) => (
        <Styled.NaviButton key={url}>
          <Link to={url}>{pathname === url ? ActiveIcon : Icon}</Link>
        </Styled.NaviButton>
      ))}
      <Styled.AddTask onClick={moveToCreateTask}>
        <Icons.PlusIcon />
      </Styled.AddTask>
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
