import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

const galleryImages = [
  "/images/sublimation/event-1.jpg",
  "/images/sublimation/event-2.jpg",
  "/images/sublimation/event-3.jpg",
];

export const metadata: Metadata = buildMetadata({
  title: "Текстиль для мероприятий — скатерти, пресс-воллы, ролл-апы в Алматы",
  description:
    "Брендированный текстиль для event: скатерти, пресс-воллы, ролл-апы, корпоративный текстиль. Сублимационная печать, собственный пошив. Срок от 3 дней.",
  path: "/sublimation",
});

const items = [
  {
    title: "Фуршетные скатерти",
    description:
      "Скатерти с полноцветной печатью для банкетных столов, выставочных стендов и пресс-зон. Ткань: Габардин или Политекс. Точный крой под размер стола.",
  },
  {
    title: "Пресс-воллы (Step & Repeat)",
    description:
      "Фоновые конструкции для фотозон и пресс-конференций. Стандартные размеры 2×2 м, 3×2 м, 4×2 м — или под заказ. Поставляем с X-баннерными стойками.",
  },
  {
    title: "Ролл-апы",
    description:
      "Мобильные выставочные стенды 85×200 см и 100×200 см. Изготовление за 1–2 дня, механизм включён. Подходят для выставок, конференций, ресепшн.",
  },
  {
    title: "Брендированный текстиль",
    description:
      "Флаги компаний, баннерная ткань, корпоративные накидки, чехлы, салфетки, подушки и другой текстиль с полноцветной печатью.",
  },
  {
    title: "Тематический текстиль",
    description:
      "Брендированные декоративные элементы интерьера — под концепцию конкретного мероприятия.",
  },
];

const faqItems = [
  {
    q: "За сколько дней вы делаете пресс-волл?",
    a: "Стандартный срок — 3–5 рабочих дней с момента утверждения макета. Срочно — за 1–2 дня с наценкой 30%.",
  },
  {
    q: "Продаёте только ткань или вместе со стойкой?",
    a: "Поставляем комплектом: ткань + стойка. Можем отдельно только печать, если у вас уже есть конструкция.",
  },
  {
    q: "Можно заказать нестандартный размер скатерти?",
    a: "Да, делаем под любой размер стола. Укажите длину, ширину и высоту — сошьём точно под ваши параметры.",
  },
  {
    q: "Какую ткань лучше выбрать для скатертей?",
    a: "Для фуршетных столов — Габардин: плотный, не мнётся. Для лёгкого бюджетного варианта — Политекс.",
  },
];

export default function SublimationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Услуга</p>
            <h1 className="font-heading text-ink">
              Текстиль для мероприятий в Алматы
            </h1>
            <p className="mt-5 text-lg text-muted-text leading-relaxed">
              Скатерти, пресс-воллы, ролл-апы, брендированный текстиль с сублимационной печатью.
              Собственный пошив — точный крой под ваши размеры. Срок от 3 дней.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
              >
                Получить расчёт <ArrowRight size={16} />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 border border-line hover:border-ink/40 text-ink font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm bg-white"
              >
                Смотреть кейсы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">Что мы делаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.title} className="flex gap-3 p-5 border border-line rounded-xl bg-canvas">
                <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink text-sm">{item.title}</p>
                  <p className="text-sm text-muted-text mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TeamPrint for events */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-ink mb-5">Почему event-агентства выбирают нас</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Один подрядчик закрывает весь текстиль мероприятия — не нужно координировать 3–4 поставщика",
                  "Точные сроки — понимаем, что к дате мероприятия нет права на срыв",
                  "Работаем по договору с ЭСФ — агентствам удобно проводить через бухгалтерию",
                  "Персональный менеджер на проекте — один контакт, не теряемся в переписке",
                  "Помогаем с подготовкой макетов под нужные размеры",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-text">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-line flex items-center justify-center text-muted-text/30 text-sm">
              Фото оформленного мероприятия
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-site">
            <h2 className="font-heading text-ink mb-8">Примеры работ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-line group">
                  <Image
                    src={src}
                    alt={`Текстиль для мероприятий ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-canvas section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-ink mb-8">Вопросы по текстилю для мероприятий</h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <details key={i} className="group border border-line rounded-xl bg-canvas overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-ink cursor-pointer select-none marker:hidden list-none hover:text-brand transition-colors">
                  {item.q}
                  <span className="text-brand ml-3 shrink-0 transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-text leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection source="sublimation-page" />
    </>
  );
}
