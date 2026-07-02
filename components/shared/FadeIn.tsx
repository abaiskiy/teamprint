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
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const translate =
    direction === "up" ? "translateY(20px)" :
    direction === "left" ? "translateX(-16px)" :
    "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
