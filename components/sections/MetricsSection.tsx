"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";

const metrics = [
  { num: 4, suffix: "", unit: "года", label: "на рынке Казахстана" },
  { num: 1200, suffix: "+", unit: "", label: "клиентов по всей стране" },
  { num: 1, suffix: "", unit: "день", label: "минимальный срок исполнения" },
  { num: 10, suffix: "", unit: "лет", label: "гарантия на устойчивость печати" },
  { num: 100, suffix: "%", unit: "", label: "собственный цех в Алматы" },
];

function CountUp({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function MetricsSection() {
  return (
    <section className="bg-ink text-white">
      <div className="container-site py-10 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {metrics.map((m, i) => (
            <FadeIn
              key={m.label}
              delay={i * 0.08}
              className="lg:px-6 first:pl-0 last:pr-0"
            >
              <p className="font-heading font-bold text-4xl lg:text-5xl text-brand tabular-nums">
                <CountUp to={m.num} duration={1.2 + i * 0.1} />
                {m.suffix && <span>{m.suffix}</span>}
                {m.unit && (
                  <span className="text-2xl lg:text-3xl ml-1">{m.unit}</span>
                )}
              </p>
              <p className="mt-2 text-sm text-white/60 leading-tight">{m.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
