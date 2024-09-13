import { useEffect, useRef } from "react";

interface UseIntersectionObserverParamType {
  condition: boolean;
  callback: () => void;
}

const useIntersectionObserver = ({
  condition,
  callback,
}: UseIntersectionObserverParamType) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const observe: IntersectionObserverCallback = ([observe]) => {
    if (condition && observe.isIntersecting) {
      console.log("나왔다!");
      callback();
    }
  };

  useEffect(() => {
    if (targetRef.current) {
      const observer = new IntersectionObserver(observe);
      observer.observe(targetRef.current);

      return () => observer.disconnect();
    }
  });

  return { targetRef };
};

export default useIntersectionObserver;
