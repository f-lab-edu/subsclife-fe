import dayjs from "dayjs";
import { useState } from "react";

import globalStore from "@/store/global";
import Modal from "@/components/Modal";
import DateTimeChecker from "@/components/DateTimeChecker";
import { TaskForWritingType } from "../WriteTask";

const useWriteTaskCalendar = (task: TaskForWritingType) => {
  const { toggleModal, changeModal } = globalStore();
  const [startDate, setStartDate] = useState<string>(task.startDate || "");
  const [endDate, setEndDate] = useState<string>(task.endDate || "");

  const updateStartDate = (date: string) => {
    setStartDate(date);
    closeModal();
  };

  const updateEndDate = (date: string) => {
    setEndDate(date);
    closeModal();
  };

  const closeModal = () => {
    toggleModal(false);
    changeModal(() => <></>);
  };

  const openStartCalendar = () => {
    changeModal(() => (
      <Modal>
        <DateTimeChecker
          title="언제부터 시작 해 볼까요?"
          confirmDate={updateStartDate}
        />
      </Modal>
    ));
    toggleModal(true);
  };

  const openEndCalender = () => {
    changeModal(() => (
      <Modal>
        <DateTimeChecker
          title="언제까지 할까요?"
          minDate={dayjs(startDate).toDate()}
          confirmDate={updateEndDate}
        />
      </Modal>
    ));
    toggleModal(true);
  };

  return { startDate, endDate, openStartCalendar, openEndCalender };
};

export default useWriteTaskCalendar;
