import { useEffect } from "react";

import Footer from "@/layouts/Footer";
import LogoHeader from "@/layouts/LogoHeader";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";
import useTasks from "@/hooks/useTasks";
import TaskCard from "@/components/TaskCard";

import * as Styled from "./Main.styled";

const Main = () => {
  const { changeHeader, changeFooter } = useLayoutContext();
  const { activeTasks, remindTasks } = useTasks();

  useEffect(() => {
    changeHeader(<LogoHeader />);
    changeFooter(<Footer />);
  }, []);

  return (
    <Styled.Container>
      <h1>작성할 회고</h1>

      <div className="task-box">
        {remindTasks.map((card) => (
          <TaskCard key={card.taskId} cardData={card} />
        ))}
      </div>

      <h1>
        진행중인 활동{" "}
        <span>
          (<em>{activeTasks.length}</em> / 10)
        </span>
      </h1>

      <div className="task-box">
        {activeTasks.map((card) => (
          <TaskCard key={card.taskId} cardData={card} />
        ))}
      </div>
    </Styled.Container>
  );
};

export default Main;
