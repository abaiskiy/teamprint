import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllCases } from "@/lib/cases";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Кейсы — реальные проекты TeamPrint",
  description:
    "Флаги для марафонов, корпоративный текстиль, спортивная форма. Реальные проекты с тиражами, сроками и отзывами клиентов.",
  path: "/cases",
});

const categoryLabels: Record<string, string> = {
  sport: "Спорт",
  corporate: "Корпоратив",
  event: "Event",
  interior: "Интерьер",
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <>
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-xl mb-10 lg:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
              Портфолио
            </p>
            <h1 className="font-heading text-ink">Кейсы и проекты</h1>
            <p className="mt-4 text-muted-text text-lg">
              Реальные проекты с реальными цифрами. Никаких стоковых фото — только то, что мы сделали.
            </p>
          </div>

          {cases.length === 0 ? (
            <p className="text-muted-text">Кейсы загружаются...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="group flex flex-col border border-line rounded-xl overflow-hidden bg-white hover:-translate-y-0.5 transition-transform duration-200"
                >
                  {/* Cover */}
                  <div className="aspect-[16/10] bg-line relative overflow-hidden">
                    {c.cover ? (
                      <Image
                        src={c.cover}
                        alt={c.client}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-muted-text/30 text-xs">фото кейса</span>
                    )}
                    <span className="absolute top-3 left-3 z-10 text-xs font-medium bg-white border border-line rounded-full px-2.5 py-1 text-muted-text">
                      {categoryLabels[c.category] ?? c.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-heading font-semibold text-ink text-base group-hover:text-brand transition-colors">
                      {c.client}
                    </p>
                    <p className="mt-1.5 text-sm text-muted-text leading-snug flex-1">{c.summary}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-text border-t border-line pt-3">
                      <span>
                        <span className="font-semibold text-ink">{c.quantity} шт.</span>
                      </span>
                      <span className="text-line/60">|</span>
                      <span>{c.duration}</span>
                      <span className="ml-auto flex items-center gap-1 font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                        Читать <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection source="cases-listing" />
    </>
  );
}
