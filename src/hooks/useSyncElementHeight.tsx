import { useEffect, useRef } from "react";

export const useSyncElementHeight = (dependency: unknown) => {
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncHeight = () => {
      if (sourceRef.current && targetRef.current) {
        targetRef.current.style.height = `${sourceRef.current.clientHeight}px`;
      }
    };

    syncHeight();
  }, [dependency]);

  return { sourceRef, targetRef };
};
