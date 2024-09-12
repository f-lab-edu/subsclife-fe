import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { getTasks } from "@/api/task";
import { TaskType } from "@/components/TaskCard";

const useTasks = () => {
  const [cards, setCards] = useState<{
    activeTasks: TaskType[];
    remindTasks: TaskType[];
  }>({ activeTasks: [], remindTasks: [] });

  const fetchTasks = async () => {
    const result = await getTasks();
    const now = dayjs();

    const remindTasks = result.filter(({ endDate }) =>
      dayjs(endDate).isBefore(now)
    );
    const activeTasks = result.filter(({ endDate }) =>
      dayjs(endDate).isAfter(now)
    );

    setCards({ activeTasks, remindTasks });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return cards;
};

export default useTasks;
