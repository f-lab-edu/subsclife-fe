import { useEffect } from "react";

import Footer from "@/layouts/Footer";
import LogoHeader from "@/layouts/LogoHeader";
import { useLayoutContext } from "@/contexts/layout/LayoutContext";
import TaskCard, { TaskType } from "@/components/TaskCard/TaskCard";

import * as Styled from "./Main.styled";

const cards: TaskType[] = [
  {
    taskId: 1,
    title: "매일 한강 공원 2km 달리기 하실 분!",
    simpleInfo: "간단히 뛰고 얘기도 나눠요!",
    detail: "Lorem ipsum dolor sit amet.",
    subscriberCount: 4,
    startDate: new Date(2024, 8, 12, 3),
    endDate: new Date(2024, 8, 12, 10),
  },
  {
    taskId: 2,
    title: "매일 한강 공원 10km 달리기 하실 분!",
    simpleInfo: "간단히 뛰고 얘기도 나눠요!",
    detail: "Lorem ipsum dolor sit amet.",
    subscriberCount: 5,
    startDate: new Date(2024, 8, 11, 6),
    endDate: new Date(2024, 8, 12, 2),
  },
  {
    taskId: 3,
    title: "매일 한강 공원 10km 달리기 하실 분!",
    simpleInfo: "간단히 뛰고 얘기도 나눠요!",
    detail: "Lorem ipsum dolor sit amet.",
    subscriberCount: 5,
    startDate: new Date(2024, 8, 9, 6),
    endDate: new Date(2024, 8, 11, 2),
  },
];

const Main = () => {
  const { changeHeader, changeFooter } = useLayoutContext();

  useEffect(() => {
    changeHeader(<LogoHeader />);
    changeFooter(<Footer />);
  }, []);

  return (
    <Styled.Container>
      <h1>작성할 회고</h1>

      {cards.map((card) => (
        <TaskCard key={card.taskId} cardData={card} />
      ))}
    </Styled.Container>
  );
};

export default Main;
