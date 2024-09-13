import dayjs, { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";

const ONE_SECOND = 1000; // 1초를 밀리초로 환산
const HUNDRED_PERCENT = 100;

interface UseTaskMinuteTimerParams {
  start: string | Date | Dayjs;
  end: string | Date | Dayjs;
}

const useTaskMinuteTimer = ({ start, end }: UseTaskMinuteTimerParams) => {
  const [percent, setPercent] = useState<number>(0); // 퍼센트 상태
  const [leftTime, setLeftTime] = useState<string>(""); // 남은 시간 상태

  const lastRenderedMinuteRef = useRef<number | null>(null); // 마지막으로 렌더링된 분 (분 단위)

  const endDate = dayjs(end);
  const startDate = dayjs(start);

  const updateTime = () => {
    const currentDate = dayjs();

    // 남은 시간 계산
    const diffDaysFromCurrentToEnd = endDate.diff(currentDate, "day");
    const diffHoursFromCurrentToEnd = endDate.diff(currentDate, "hour") % 24;
    const diffMinutesFromCurrentToEnd =
      endDate.diff(currentDate, "minute") % 60;

    const diffMinutesFromStartToEnd = endDate.diff(startDate, "minute");
    const diffMinutesFromStartToCurrent = currentDate.diff(startDate, "minute");

    const currentPercent = Math.floor(
      (diffMinutesFromStartToCurrent / diffMinutesFromStartToEnd) *
        HUNDRED_PERCENT
    );

    const leftTimes = `${diffDaysFromCurrentToEnd}일 ${diffHoursFromCurrentToEnd}시간 ${diffMinutesFromCurrentToEnd}분 남음`;

    return { currentPercent, leftTimes, currentMinute: currentDate.minute() };
  };

  useEffect(() => {
    // 초기 상태 업데이트 (최초 렌더링)
    const { currentPercent, leftTimes, currentMinute } = updateTime();
    setPercent(currentPercent);
    setLeftTime(leftTimes);
    lastRenderedMinuteRef.current = currentMinute;

    const timer = setInterval(() => {
      const { currentPercent, leftTimes, currentMinute } = updateTime();

      // 분이 변경되었을 때만 상태를 업데이트하여 리렌더링
      if (lastRenderedMinuteRef.current !== currentMinute) {
        lastRenderedMinuteRef.current = currentMinute;
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

export default useTaskMinuteTimer;
