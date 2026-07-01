import type { Metadata } from "next";
import Image from "next/image";
import { FlagCalculator } from "@/components/sections/FlagCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Флаги на заказ в Алматы — сублимационная печать",
  description:
    "Флаги любых размеров и тиражей с сублимационной печатью в Алматы. Уличные, настольные, виндеры, арки. Калькулятор цены онлайн. Гарантия 10 лет.",
  path: "/flags",
});

const flagTypes = [
  {
    title: "Уличные флаги",
    description: "Флаги на флагштоки. Размеры от 60×90 до 100×200 см. Ткань Оксфорд или Политекс.",
  },
  {
    title: "Настольные флаги",
    description: "Компактные флаги на подставке для переговорных комнат и выставочных стендов.",
  },
  {
    title: "Виндеры (Drop Flag)",
    description: "Вытянутые флаги на специальной стойке. Идеальны для выставок и event.",
  },
  {
    title: "Флажные арки",
    description: "Арочные конструкции для финишных зон марафонов и спортивных событий.",
  },
  {
    title: "Вымпелы",
    description: "Треугольные флажки для гирлянд, внутреннего декора и корпоративных подарков.",
  },
];

const faqFlags = [
  {
    q: "Какой минимальный размер флага вы делаете?",
    a: "Минимальный размер — 15×25 см (настольный). Максимальный — под любой заказ, согласовываем индивидуально.",
  },
  {
    q: "Сколько стоит срочный флаг?",
    a: "Срочное производство (1–2 дня) добавляет 30% к стандартной цене. Рассчитайте в калькуляторе выше.",
  },
  {
    q: "Как долго прослужит сублимационный флаг на улице?",
    a: "При правильной эксплуатации и хранении — 3–5 лет. Гарантия на устойчивость печати — 10 лет.",
  },
  {
    q: "Вы делаете двухсторонние флаги?",
    a: "Да. Двухсторонний флаг — это два полотна, сшитых вместе. Изображение читается с обеих сторон. Стоит на 70% дороже одностороннего.",
  },
  {
    q: "Нужен ли макет для заказа?",
    a: "Да, но мы поможем с подготовкой бесплатно. Пришлите логотип в любом формате — сделаем раскладку под нужный размер.",
  },
];

const galleryImages = [
  "/images/flags/flag-1.jpg",
  "/images/flags/flag-2.jpg",
  "/images/flags/flag-3.jpg",
  "/images/flags/flag-4.jpg",
  "/images/flags/flag-5.jpg",
  "/images/flags/flag-6.jpg",
  "/images/flags/flag-7.jpg",
  "/images/flags/flag-8.jpg",
];

export default function FlagsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
              Услуга
            </p>
            <h1 className="font-heading text-ink">
              Флаги и флажная продукция в Алматы
            </h1>
            <p className="mt-5 text-lg text-muted-text leading-relaxed">
              Уличные, настольные, виндеры, арки и вымпелы с сублимационной печатью.
              Любые тиражи — от 1 штуки. Собственный цех, срок от 1 дня.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#calculator"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
              >
                Рассчитать цену
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 border border-line hover:border-ink/40 text-ink font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm bg-white"
              >
                Связаться
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flag types */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">Что входит в услугу</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {flagTypes.map((ft) => (
              <div key={ft.title} className="flex gap-3 p-5 border border-line rounded-xl bg-canvas">
                <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink text-sm">{ft.title}</p>
                  <p className="text-sm text-muted-text mt-1 leading-relaxed">{ft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="bg-canvas section-padding">
        <div className="container-site">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Калькулятор
            </p>
            <h2 className="font-heading text-ink">Рассчитайте стоимость</h2>
            <p className="mt-2 text-muted-text">
              Укажите параметры — получите точную цену прямо сейчас.
            </p>
          </div>
          <FlagCalculator />
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-site">
            <h2 className="font-heading text-ink mb-8">Примеры работ</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-line group">
                  <Image
                    src={src}
                    alt={`Работа TeamPrint ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
          <h2 className="font-heading text-ink mb-8">Вопросы о флагах</h2>
          <div className="flex flex-col gap-4">
            {faqFlags.map((item, i) => (
              <details key={i} className="group border border-line rounded-xl bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-ink cursor-pointer select-none marker:hidden list-none">
                  {item.q}
                  <span className="text-brand ml-3 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-text leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection source="flags-page" />
    </>
  );
}
