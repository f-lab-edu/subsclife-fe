import dayjs, { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";

const ONE_SECOND = 1000; // 1초를 밀리초로 환산
const HUNDRED_PERCENT = 100;

interface UseTaskHourTimerParams {
  start: string | Date | Dayjs;
  end: string | Date | Dayjs;
}

const useTaskHourTimer = ({ start, end }: UseTaskHourTimerParams) => {
  const [percent, setPercent] = useState<number>(0); // 퍼센트 상태
  const [leftTime, setLeftTime] = useState<string>(""); // 남은 시간 상태

  const lastRenderedHourRef = useRef<number | null>(null); // 마지막으로 렌더링된 시간 (시 단위)

  const endDate = dayjs(end);
  const startDate = dayjs(start);

  const updateTime = () => {
    const currentDate = dayjs();

    // 남은 시간 계산
    const diffDaysFromCurrentToEnd = endDate.diff(currentDate, "day");
    const diffHoursFromCurrentToEnd = endDate.diff(currentDate, "hour") % 24;

    const diffHoursFromStartToEnd = endDate.diff(startDate, "hour");
    const diffHoursFromStartToCurrent = currentDate.diff(startDate, "hour");

    const currentPercent = Math.floor(
      (diffHoursFromStartToCurrent / diffHoursFromStartToEnd) * HUNDRED_PERCENT
    );

    const leftTimes = `${diffDaysFromCurrentToEnd}일 ${diffHoursFromCurrentToEnd}시간 남음`;

    return { currentPercent, leftTimes, currentHour: currentDate.hour() };
  };

  useEffect(() => {
    const { currentPercent, leftTimes, currentHour } = updateTime();
    lastRenderedHourRef.current = currentHour;
    setPercent(currentPercent);
    setLeftTime(leftTimes);

    const timer = setInterval(() => {
      const { currentPercent, leftTimes, currentHour } = updateTime();

      // 정시가 되었을 때만 상태를 업데이트하여 리렌더링
      if (lastRenderedHourRef.current !== currentHour) {
        lastRenderedHourRef.current = currentHour;
        setPercent(currentPercent);
        setLeftTime(leftTimes);
      }
    }, ONE_SECOND); // 1초마다 체크

    return () => clearInterval(timer);
  }, [start, end]);

  return {
    percent,
    leftTime,
  };
};

export default useTaskHourTimer;
