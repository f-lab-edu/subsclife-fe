import dayjs from "dayjs";
import { useEffect, useState } from "react";

import {
  isActiveTask,
  isInRemindPeriod,
  isUnsubscribeToNeedTask,
} from "@/utils/date";
import { getTasks, postTaskForUnsubscribeById } from "@/api/task";
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
      isInRemindPeriod({ current: now, end: endDate })
    );

    const activeTasks = result.filter(({ endDate }) =>
      isActiveTask({ current: now, end: endDate })
    );

    setCards({ activeTasks, remindTasks });

    const needUnsubscribeTasks = result.filter(({ endDate }) =>
      isUnsubscribeToNeedTask({ current: now, end: endDate })
    );

    if (0 < needUnsubscribeTasks.length) {
      const unsubscribeResult = await Promise.all(
        needUnsubscribeTasks.map(({ taskId }) =>
          postTaskForUnsubscribeById(taskId)
        )
      );

      if (unsubscribeResult.some((res) => res !== 200)) {
        alert("알 수 없는 에러가 발생했습니다.\n새로 고침을 실행 해주세요.");
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return cards;
};

export default useTasks;
