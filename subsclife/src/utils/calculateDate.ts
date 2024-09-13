import dayjs, { Dayjs } from "dayjs";

const getEveryHoursUntilMidnight = (startTime: Date | string | Dayjs) => {
  const timeArray = [];

  // 주어진 시간을 dayjs 객체로 변환
  let currentTime = dayjs(startTime);

  // 다음 정시 계산 (ex: 14:30 -> 15:00)
  if (currentTime.minute() > 0 || currentTime.second() > 0) {
    currentTime = currentTime.add(1, "hour").startOf("hour");
  }

  // 당일 23시 설정
  const endTime = currentTime.set("hour", 23).set("minute", 0).set("second", 0);

  while (currentTime.isBefore(endTime) || currentTime.isSame(endTime)) {
    timeArray.push(currentTime.format("HH:mm A"));
    currentTime = currentTime.add(1, "hour"); // 1시간씩 더함
  }

  return timeArray;
};

export { getEveryHoursUntilMidnight };
