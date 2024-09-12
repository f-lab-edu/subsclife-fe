import useWriteTaskPage from "./hooks/useWriteTaskPage";

import * as Styled from "./WriteTask.styled";

export type TaskForWritingType = {
  title: string;
  simpleInfo: string;
  detail: string;
  startDate: string;
  endDate: string;
};

export type WriteTaskPageType = {
  task: TaskForWritingType;
  movePrev: (task: Partial<TaskForWritingType>) => void;
  moveNext: (task: Partial<TaskForWritingType>) => void;
};

const WriteTask = () => {
  const { pages: Pages, task } = useWriteTaskPage();

  return (
    <Styled.Main>
      <Pages.Page
        task={task}
        movePrev={(task) => Pages.prev(task)}
        moveNext={(task) => Pages.next(task)}
      />
    </Styled.Main>
  );
};

export default WriteTask;
