import { useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState("down");
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY < lastY ? "up" : "down");
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Mark first render AFTER first paint
    requestAnimationFrame(() => {
      isFirstRenderRef.current = false;
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {
    direction,
    isFirstRender: isFirstRenderRef.current,
  };
};
