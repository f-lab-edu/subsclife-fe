import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { getTasksByPage, SearchedTaskType } from "@/api/task";
import Footer from "@/layouts/Footer";
import LogoHeader from "@/layouts/LogoHeader";
import TaskCard from "@/components/TaskCard";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";

import * as Icons from "@/assets/icons";
import * as Styled from "./Search.styled";

const Search = () => {
  const { changeHeader, changeFooter } = useLayoutContext();
  const [tasks, setTasks] = useState<SearchedTaskType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>("");
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const keyboardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      const { value: keyword } = inputRef.current;
      getTasks({ keyword });
      setSearchKeyword(keyword);
    }
  };

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

  useEffect(() => {
    (async () => {
      const result = await getTasksByPage();
      if (result) {
        setTasks(result.data.items);
        setHasNextPage(result.data.hasNext);
      }
    })();
  }, []);

  const getTasks = async ({ keyword }: { keyword?: string }) => {
    const result = await getTasksByPage({ keyword });
    if (result) {
      const { items, hasNext } = result.data;
      setTasks(items);
      setHasNextPage(hasNext);
      console.log(result.data);
    }
  };

  return (
    <Styled.Container>
      <h1>{searchKeyword ? `"${searchKeyword}" 검색 결과` : "전체"}</h1>

      {tasks.map((card) => (
        <TaskCard key={card.taskId} cardData={card} />
      ))}
    </Styled.Container>
  );
};

export default Search;
