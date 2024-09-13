import { Dayjs } from "dayjs";
import { forwardRef, Ref } from "react";

import { getEveryHoursUntilMidnight } from "@/utils/calculateDate";
import * as Styled from "./TimeChecker.styled";

interface TimeCheckerProps {
  title: string;
  selectedDate: string | Date | Dayjs;
  selectedTime: string;
  changeTime: (time: string) => void;
}

const TimeChecker = (
  { title, selectedDate, selectedTime, changeTime }: TimeCheckerProps,
  ref: Ref<HTMLDivElement>
) => {
  const timeList = getEveryHoursUntilMidnight(selectedDate);

  const clickHandler = (time: string) => {
    changeTime(time);
  };

  return (
    <>
      <Styled.Backdrop />
      <Styled.Container ref={ref}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.List>
          {timeList.map((time) => (
            <Styled.Item key={time} $active={selectedTime === time}>
              <button onClick={() => clickHandler(time)}>{time}</button>
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Container>
    </>
  );
};

export default forwardRef(TimeChecker);
