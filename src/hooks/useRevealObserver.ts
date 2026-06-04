import { useEffect, useRef } from "react";

export function useRevealObserver(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const reveals = ref.current?.querySelectorAll(".lofi-reveal");
    if (!reveals?.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting)),
      { threshold }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
