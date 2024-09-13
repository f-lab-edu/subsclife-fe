import Footer from "@/layouts/Footer";
import LogoHeader from "@/layouts/LogoHeader";
import Header from "@/layouts/Header";
import Loader from "@/components/Loader";
import TaskCard from "@/components/TaskCard";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useSearchTask from "./hooks/useSearchTask";

import * as Icons from "@/assets/icons";
import * as Styled from "./Search.styled";

const Search = () => {
  const {
    tasks,
    hasNextPage,
    inputRef,
    searchKeyword,
    isLoading,
    getTasks,
    keyboardHandler,
  } = useSearchTask();

  const { targetRef } = useIntersectionObserver({
    condition: hasNextPage,
    callback: observedGetTasks,
  });

  function observedGetTasks() {
    const { taskId, startDate, endDate } = tasks[tasks.length - 1];
    getTasks({ taskId, start_date: startDate, end_date: endDate });
  }

  if (isLoading) {
    return (
      <Loader>
        <Loader.Loading />
      </Loader>
    );
  }

  return (
    <Styled.Container>
      <Header>
        <LogoHeader>
          <Styled.SerachInput>
            <Icons.SearchIcon />
            <input ref={inputRef} onKeyUp={keyboardHandler} />
          </Styled.SerachInput>
        </LogoHeader>
      </Header>
      <h1>{searchKeyword ? `"${searchKeyword}" 검색 결과` : "전체"}</h1>

      {tasks.map((card, index) => (
        <TaskCard
          key={card.taskId}
          cardData={card}
          ref={index === tasks.length - 1 ? targetRef : null}
        />
      ))}
      <Footer />
    </Styled.Container>
  );
};

export default Search;
