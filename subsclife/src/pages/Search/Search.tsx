import { useEffect } from "react";

import Footer from "@/layouts/Footer";
import LogoHeader from "@/layouts/LogoHeader";
import TaskCard from "@/components/TaskCard";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";
import useSearchTask from "./hooks/useSearchTask";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import * as Icons from "@/assets/icons";
import * as Styled from "./Search.styled";

const Search = () => {
  const {
    tasks,
    hasNextPage,
    inputRef,
    searchKeyword,
    getTasks,
    keyboardHandler,
  } = useSearchTask();

  const { targetRef } = useIntersectionObserver({
    condition: hasNextPage,
    callback: observedGetTasks,
  });

  const { changeHeader, changeFooter } = useLayoutContext();

  function observedGetTasks() {
    const { taskId, startDate, endDate } = tasks[tasks.length - 1];
    getTasks({ taskId, start_date: startDate, end_date: endDate });
  }

  useEffect(() => {
    changeHeader(
      <LogoHeader>
        <Styled.SerachInput>
          <Icons.SearchIcon />
          <input ref={inputRef} onKeyUp={keyboardHandler} />
        </Styled.SerachInput>
      </LogoHeader>
    );
    changeFooter(<Footer />);
  }, []);

  return (
    <Styled.Container>
      <h1>{searchKeyword ? `"${searchKeyword}" 검색 결과` : "전체"}</h1>

      {tasks.map((card, index) => (
        <TaskCard
          key={card.taskId}
          cardData={card}
          ref={index === tasks.length - 1 ? targetRef : null}
        />
      ))}
    </Styled.Container>
  );
};

export default Search;
