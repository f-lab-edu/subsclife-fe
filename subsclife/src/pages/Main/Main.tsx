import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import LogoHeader from "@/layouts/LogoHeader";
import TaskCard from "@/components/TaskCard";
import useTasks from "@/hooks/useTasks";

import * as Styled from "./Main.styled";

const Main = () => {
  const { activeTasks, remindTasks } = useTasks();

  return (
    <Styled.Container>
      <Header>
        <LogoHeader />
      </Header>
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
      <Footer />
    </Styled.Container>
  );
};

export default Main;
