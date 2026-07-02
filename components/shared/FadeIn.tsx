"use client";

import { useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
  margin?: string;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  margin = "-40px",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Batch state updates using requestAnimationFrame to avoid forced reflow
          requestAnimationFrame(() => setVisible(true));
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const dirClass =
    direction === "up" ? "fade-in-up" :
    direction === "left" ? "fade-in-left" : "";

  return (
    <div
      ref={ref}
      className={`${dirClass} ${visible ? "fade-in-visible" : ""} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
