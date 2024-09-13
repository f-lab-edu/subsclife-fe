import { useEffect, useRef, useState } from "react";

const useOutsideClick = () => {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭을 감지하여 메뉴 상태 업데이트
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        targetRef.current &&
        !targetRef.current.contains(e.target as HTMLDivElement)
      ) {
        setIsActive(false);
      }
    }

    // 바깥 클릭 이벤트 리스너 추가
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [targetRef]);

  return { targetRef, isActive, setIsActive };
};

export default useOutsideClick;
