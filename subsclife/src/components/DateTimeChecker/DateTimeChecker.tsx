import dayjs from "dayjs";
import { useState } from "react";

import TimeChecker from "../TimeChecker";
import Calendar, { CalendarValueType } from "../Calendar";
import useOutsideClick from "@/hooks/useOutsideClick";
import * as Styled from "./DateTimeChecker.styled";

interface DateTimeCheckerProps {
  title: string;
  confirmDate: (date: string) => void;
  minDate?: Date;
}

const DATE_TIME_PICKER_PHASE = {
  DATE_PICK: "DATE_PICK",
  TIME_PICK: "TIME_PICK",
  CONFIRM: "CONFIRM",
} as const;

const DateTimeChecker = ({
  title,
  minDate = new Date(),
  confirmDate,
}: DateTimeCheckerProps) => {
  const { targetRef, isActive, setIsActive } = useOutsideClick();
  const [selectedDate, setSelectedDate] = useState<CalendarValueType>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [phase, setPhase] = useState<keyof typeof DATE_TIME_PICKER_PHASE>(
    DATE_TIME_PICKER_PHASE.DATE_PICK
  );

  const changeDate = () => {
    setPhase(DATE_TIME_PICKER_PHASE.TIME_PICK);
    setIsActive(true);
  };

  const formattedDate = dayjs(selectedDate?.toString()).format(
    "YYYY년 M월 D일"
  );

  const changeTime = (time: string) => {
    setSelectedTime(time);
    setPhase(DATE_TIME_PICKER_PHASE.CONFIRM);
  };

  const checkDateTime = () => {
    if (selectedDate) {
      const [time] = selectedTime.split(":");
      const result = dayjs(selectedDate.toString())
        .hour(+time)
        .format("YYYY-MM-DDTHH:mm:ss");

      confirmDate(result);
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.SelectedDate
        $confirmed={phase !== DATE_TIME_PICKER_PHASE.CONFIRM}
      >
        {formattedDate} {selectedTime}
      </Styled.SelectedDate>

      {phase === DATE_TIME_PICKER_PHASE.CONFIRM && (
        <Styled.ConfirmButton onClick={checkDateTime}>
          확인
        </Styled.ConfirmButton>
      )}
      <Calendar
        minDate={minDate}
        changeHandler={setSelectedDate}
        onActive={changeDate}
        value={selectedDate}
      />
      {isActive && phase === DATE_TIME_PICKER_PHASE.TIME_PICK && (
        <TimeChecker
          ref={targetRef}
          title="몇 시에 시작할까요?"
          selectedDate={selectedDate as Date}
          selectedTime={selectedTime}
          changeTime={changeTime}
        />
      )}
    </Styled.Container>
  );
};

export default DateTimeChecker;
