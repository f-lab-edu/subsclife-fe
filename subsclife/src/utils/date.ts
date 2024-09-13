import dayjs, { Dayjs } from "dayjs";

type DateCheckType = {
  current: Dayjs;
  start?: string | Date | Dayjs;
  end?: string | Date | Dayjs;
};

const isCurrentBeforeEnd = ({ current, end }: DateCheckType) =>
  current.isBefore(dayjs(end));

const isBeforeActiveTask = ({ current, start }: DateCheckType) =>
  current.isBefore(dayjs(start));

const isActiveTask = ({ current, end }: DateCheckType) =>
  current.isBefore(dayjs(end));

const isInRemindPeriod = ({ current, end }: DateCheckType) =>
  current.isBefore(dayjs(end).add(3, "day")) && current.isAfter(dayjs(end));

const isUnsubscribeToNeedTask = ({ current, end }: DateCheckType) =>
  current.isAfter(dayjs(end).add(3, "day"));

export {
  isCurrentBeforeEnd,
  isBeforeActiveTask,
  isActiveTask,
  isInRemindPeriod,
  isUnsubscribeToNeedTask,
};
