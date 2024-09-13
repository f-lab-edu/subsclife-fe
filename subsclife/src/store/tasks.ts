import { create } from "zustand";

import { SearchedTaskType } from "@/api/task";

interface SearchTaskStoreType {
  tasks: SearchedTaskType[];
  hasNextPage: boolean;
  scrollHeight: number;
  setTasks: (tasks: SearchedTaskType[]) => void;
  changeHasNextPage: (boolean: boolean) => void;
  changeScrollHeight: (scrollHeight: number) => void;
}

const SearchTaskStore = create<SearchTaskStoreType>((set) => ({
  tasks: [],
  hasNextPage: false,
  scrollHeight: 0,
  setTasks: (tasks) => set({ tasks }),
  changeHasNextPage: (boolean) => set({ hasNextPage: boolean }),
  changeScrollHeight: (scrollHeight) => set({ scrollHeight }),
}));

export default SearchTaskStore;
