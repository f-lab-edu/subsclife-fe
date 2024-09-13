import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLayoutContext } from "@/contexts/layout/LayoutContext";

import * as Icons from "@/assets/icons";
import * as Styled from "./Footer.styled";
import SearchTaskStore from "@/store/tasks";

const PATH = {
  HOME: "/",
  SEARCH: "/search",
  HISTORY: "/history",
};

const FooterContent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { changeFooter } = useLayoutContext();
  const { changeScrollHeight, setTasks } = SearchTaskStore();

  const moveToCreateTask = () => {
    changeFooter(<></>);
    navigate("/task?page=0");
  };

  const clearScrollHeight = () => {
    changeScrollHeight(0);
    setTasks([]);
  };

  return (
    <Styled.Container>
      <Styled.NaviButton
        to={PATH.HOME}
        onClick={clearScrollHeight}
        className="footer-link"
      >
        {pathname === PATH.HOME ? <Icons.FilledHomeIcon /> : <Icons.HomeIcon />}
      </Styled.NaviButton>
      <Styled.NaviButton to={PATH.SEARCH} className="footer-link">
        {pathname === PATH.SEARCH ? (
          <Icons.FilledSearchIcon />
        ) : (
          <Icons.SearchIcon fill="#F5F7F8" />
        )}
      </Styled.NaviButton>
      <Styled.NaviButton to={PATH.HISTORY} className="footer-link">
        {pathname === PATH.HISTORY ? (
          <Icons.FilledDocsIcon />
        ) : (
          <Icons.DocsIcon />
        )}
      </Styled.NaviButton>
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
