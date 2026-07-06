"use client";

import Image from "next/image";
import { clients } from "@/content/clients";

export function ClientsMarquee({ dark = false }: { dark?: boolean }) {
  const doubled = [...clients, ...clients];
  const fadeColor = dark ? "from-black/20" : "from-canvas";

  return (
    <div className="container-site">
      <h2 className={`font-heading mb-10 ${dark ? "text-white" : "text-ink"}`}>
        Нам доверяют
      </h2>
      <div className="relative overflow-hidden">
        <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 lg:w-24 z-10 bg-gradient-to-r ${fadeColor} to-transparent`} />
        <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-16 lg:w-24 z-10 bg-gradient-to-l ${fadeColor} to-transparent`} />

        <div
          className="flex items-center gap-16 lg:gap-24 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="relative h-32 w-44 shrink-0 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                loading="lazy"
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                sizes="176px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
