import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { fabrics } from "@/content/fabrics";
import { CTASection } from "@/components/sections/CTASection";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Каталог тканей для сублимационной печати — TeamPrint",
  description:
    "Coolmax, Политекс, Тафта, Габардин, Флис, Оксфорд 300D и 600D, Атлас. Подбираем ткань под задачу: флаги, форма, интерьерный текстиль.",
  path: "/fabrics",
});

export default function FabricsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas section-padding">
        <div className="container-site max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
            Материалы
          </p>
          <h1 className="font-heading text-ink">Каталог тканей</h1>
          <p className="mt-4 text-lg text-muted-text leading-relaxed">
            Подбираем ткань под вашу задачу. Каждый материал имеет свои
            характеристики — плотность, назначение, способ обработки.
          </p>
        </div>
      </section>

      {/* Table view — desktop */}
      <section className="bg-white section-padding">
        <div className="container-site">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-line text-xs uppercase tracking-wider text-muted-text">
                  <th className="text-left py-3 pr-6 font-semibold">Ткань</th>
                  <th className="text-left py-3 pr-6 font-semibold">Плотность</th>
                  <th className="text-left py-3 pr-6 font-semibold">Применение</th>
                  <th className="text-left py-3 pr-6 font-semibold">Уход</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {fabrics.map((f) => (
                  <tr key={f.id} className="group hover:bg-canvas transition-colors">
                    <td className="py-4 pr-6">
                      <p className="font-semibold text-ink">{f.name}</p>
                      <p className="text-xs text-muted-text mt-0.5 leading-relaxed max-w-xs">
                        {f.description}
                      </p>
                    </td>
                    <td className="py-4 pr-6">
                      <span className="font-mono text-ink tabular-nums">{f.density}</span>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex flex-wrap gap-1.5">
                        {f.applications.map((app) => (
                          <span
                            key={app}
                            className="text-xs text-muted-text border border-line rounded-full px-2 py-0.5 bg-canvas"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <p className="text-xs text-muted-text">{f.care}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: expandable cards */}
          <div className="md:hidden flex flex-col gap-3">
            {fabrics.map((f) => (
              <details key={f.id} className="group border border-line rounded-xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none marker:hidden list-none">
                  <div>
                    <p className="font-semibold text-ink">{f.name}</p>
                    <p className="text-xs text-muted-text mt-0.5">{f.density}</p>
                  </div>
                  <ChevronDown
                    size={16}
                    className="text-muted-text transition-transform group-open:rotate-180 shrink-0"
                  />
                </summary>
                <div className="px-5 pb-5 border-t border-line">
                  <p className="text-sm text-muted-text mt-3 leading-relaxed">{f.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {f.applications.map((app) => (
                      <span
                        key={app}
                        className="text-xs text-muted-text border border-line rounded-full px-2 py-0.5 bg-canvas"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-1">
                      Преимущества
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {f.advantages.map((adv) => (
                        <span key={adv} className="text-xs text-brand font-medium">
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-text mt-3">
                    <span className="font-semibold">Уход: </span>{f.care}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cards with advantages — desktop */}
      <section className="hidden md:block bg-canvas section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">Свойства и преимущества</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {fabrics.map((f) => (
              <div key={f.id} className="border border-line rounded-xl p-5 bg-white">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-line mb-4">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="font-heading font-semibold text-base text-ink">{f.name}</p>
                <p className="text-xs text-muted-text mt-1 mb-3">{f.density}</p>
                <div className="flex flex-wrap gap-1">
                  {f.advantages.map((adv) => (
                    <span key={adv} className="text-xs text-brand font-medium">
                      {adv} ·{" "}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection source="fabrics-page" />
    </>
  );
}
