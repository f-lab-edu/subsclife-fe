import dayjs from "dayjs";
import React from "react";
import ReactCalendar from "react-calendar";

import * as Styled from "./Calendar.styled";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

export type CalendarValueType = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
  value: CalendarValueType;
  changeHandler: React.Dispatch<React.SetStateAction<CalendarValueType>>;
  minDate: Date;
  onActive: () => void;
}

const Calendar = ({
  value,
  minDate,
  changeHandler,
  onActive,
}: CalendarProps) => {
  const now = dayjs();
  const maxDate = now.add(30, "day").toDate();

  return (
    <Styled.Container>
      <ReactCalendar
        value={value}
        onChange={(date) => {
          changeHandler(date);
          onActive();
        }}
        minDate={minDate}
        maxDate={maxDate}
        next2Label={null}
        prev2Label={null}
        formatMonthYear={(_, date) => dayjs(date).format("M월")}
        formatDay={(_, date) => dayjs(date).format("D")}
        showNeighboringMonth={false}
        maxDetail="month"
      />
    </Styled.Container>
  );
};

export default Calendar;
