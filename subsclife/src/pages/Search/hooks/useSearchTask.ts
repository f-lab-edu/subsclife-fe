import { KeyboardEvent, useEffect, useRef, useState } from "react";

import SearchTaskStore from "@/store/tasks";
import { getTasksByPage, TaskByPageParams } from "@/api/task";

const useSearchTask = () => {
  const { tasks, setTasks, hasNextPage, changeHasNextPage, scrollHeight } =
    SearchTaskStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const keyboardHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      setIsLoading(true);
      const { value: keyword } = inputRef.current;
      const result = await getTasksByPage({ keyword });

      if (result) {
        const { items, hasNext } = result.data;
        setTasks([...items]);
        setSearchKeyword(keyword);
        changeHasNextPage(hasNext);
      }
      setIsLoading(false);
    }
  };

  const getTasks = async (params?: TaskByPageParams) => {
    setIsLoading(true);
    const result = await getTasksByPage(params);
    console.log(result);
    if (result) {
      const { items, hasNext } = result.data;
      setTasks([...tasks, ...items]);
      changeHasNextPage(hasNext);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (tasks.length <= 0) {
      getTasks();
    }
  }, []);

  useEffect(() => {
    if (scrollHeight) {
      const main = document.querySelector("main")!;
      main.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }
  }, []);

  return {
    inputRef,
    tasks,
    scrollHeight,
    hasNextPage,
    searchKeyword,
    isLoading,
    getTasks,
    setTasks,
    changeHasNextPage,
    keyboardHandler,
  };
};

export default useSearchTask;
