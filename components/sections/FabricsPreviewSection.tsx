"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { fabrics } from "@/content/fabrics";

export function FabricsPreviewSection() {
  const preview = fabrics.slice(0, 6);

  return (
    <section className="bg-canvas section-padding">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Материалы
            </p>
            <h2 className="font-heading text-ink">Каталог тканей</h2>
            <p className="mt-3 text-muted-text max-w-md">
              Подбираем ткань под задачу — уличный флаг, спортивная форма или интерьерный текстиль.
            </p>
          </div>
          <Link
            href="/fabrics"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand transition-colors shrink-0"
          >
            Весь каталог <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((fabric, i) => (
            <FadeIn
              key={fabric.id}
              delay={i * 0.06}
              margin="-30px"
              className="border border-line rounded-xl p-5 bg-white hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-line mb-4">
                <Image
                  src={fabric.image}
                  alt={fabric.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-heading font-semibold text-base text-ink">{fabric.name}</h3>
              <p className="text-xs text-muted-text mt-1">{fabric.density}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {fabric.applications.slice(0, 2).map((app) => (
                  <span
                    key={app}
                    className="text-xs text-muted-text border border-line rounded-full px-2 py-0.5"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
