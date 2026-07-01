"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

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
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function MetricsSection() {
  return (
    <section className="bg-ink text-white">
      <div className="container-site py-10 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="lg:px-6 first:pl-0 last:pr-0"
            >
              <p className="font-heading font-bold text-3xl lg:text-4xl text-white tabular-nums">
                <CountUp to={m.num} duration={1.2 + i * 0.1} />
                {m.suffix && (
                  <span className="text-brand">{m.suffix}</span>
                )}
                {m.unit && (
                  <span className="text-xl lg:text-2xl text-brand ml-1">{m.unit}</span>
                )}
              </p>
              <p className="mt-1.5 text-sm text-white/60 leading-tight">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
