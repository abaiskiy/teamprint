"use client";

import Image from "next/image";
import { clients } from "@/content/clients";

export function ClientsMarquee({ dark = false }: { dark?: boolean }) {
  const doubled = [...clients, ...clients];
  const fadeColor = dark ? "from-black/20" : "from-canvas";

  return (
    <div className="container-site">
      <p className={`text-xs font-semibold uppercase tracking-widest mb-5 text-center ${dark ? "text-white/40" : "text-muted-text"}`}>
        Нам доверяют
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 lg:w-24 z-10 bg-gradient-to-r ${fadeColor} to-transparent`} />
        <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-16 lg:w-24 z-10 bg-gradient-to-l ${fadeColor} to-transparent`} />

        <div
          className="flex items-center gap-14 lg:gap-20 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="relative h-14 w-36 shrink-0 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-60 hover:opacity-90 transition-opacity grayscale hover:grayscale-0"
                sizes="144px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
