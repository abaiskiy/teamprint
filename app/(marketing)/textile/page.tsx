import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

const galleryImages = [
  "/images/textile/textile-1.jpg",
  "/images/textile/textile-2.jpg",
  "/images/textile/textile-3.jpg",
  "/images/textile/textile-4.jpg",
];

export const metadata: Metadata = buildMetadata({
  title: "Корпоративный текстиль в Алматы — промо-одежда, поло, жилеты",
  description:
    "Брендированная корпоративная одежда: поло, футболки, жилеты, ветровки. Вышивка, термоперенос или сублимация — подберём лучший способ нанесения.",
  path: "/textile",
});

const items = [
  {
    title: "Поло и футболки",
    description:
      "Корпоративные поло и футболки с вышивкой или полноцветной печатью. Хлопок, смесовые ткани, пике — выбираем под ваш бренд и климат.",
  },
  {
    title: "Жилеты промо-персонала",
    description:
      "Жилеты для промоутеров, волонтёров, персонала стендов. Сублимация позволяет сделать яркий дизайн с обеих сторон.",
  },
  {
    title: "Ветровки и куртки",
    description:
      "Брендированные ветровки и лёгкие куртки для выездных команд и корпоративных мероприятий. Материалы — Оксфорд, Нейлон, флис.",
  },
  {
    title: "Рубашки с вышивкой",
    description:
      "Деловые рубашки с вышивкой логотипа — классический вариант для офисного персонала и официальных мероприятий.",
  },
  {
    title: "Бейсболки и головные уборы",
    description:
      "Бейсболки, кепки и панамы с вышивкой или термопереносом. Укомплектуем брендированным аксессуаром весь коллектив.",
  },
  {
    title: "Медицинская и рабочая одежда",
    description:
      "Халаты, скрабы и спецодежда с логотипом для медицинских клиник, ресторанов и производств.",
  },
];

const methods = [
  {
    name: "Вышивка",
    desc: "Долговечно, премиально. Идеально для поло, рубашек, шапок. Ограничение — не подходит для мелких деталей и градиентов.",
  },
  {
    name: "Сублимационная печать",
    desc: "Полноцветная, без ограничений по сложности дизайна. Подходит для синтетических тканей. Не требует нашивки или накладки.",
  },
  {
    name: "Термоперенос (DTF)",
    desc: "Гибкий метод для небольших тиражей и сложных логотипов на хлопке. Хорошо ложится на готовые изделия.",
  },
  {
    name: "Трафаретная печать",
    desc: "Выгодно при больших тиражах от 50 штук. Высокая стойкость к стиркам при использовании пластизолевых красок.",
  },
];

export default function TextilePage() {
  return (
    <>
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Услуга</p>
            <h1 className="font-heading text-ink">
              Корпоративный текстиль в Алматы
            </h1>
            <p className="mt-5 text-lg text-muted-text leading-relaxed">
              Брендированная одежда для команды, промо-персонала и корпоративных мероприятий.
              Вышивка, сублимация или термоперенос — подберём метод под задачу.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
              >
                Получить расчёт <ArrowRight size={16} />
              </Link>
              <Link
                href="/fabrics"
                className="inline-flex items-center gap-2 border border-line hover:border-ink/40 text-ink font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm bg-white"
              >
                Каталог тканей
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">Что мы производим</h2>
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

      <section className="bg-canvas section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-3">Методы нанесения</h2>
          <p className="text-muted-text text-sm mb-8 max-w-xl">
            Подбираем метод исходя из ткани, тиража и бюджета — у каждого есть своё применение.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {methods.map((m) => (
              <div key={m.name} className="p-5 border border-line rounded-xl bg-white">
                <p className="font-semibold text-ink text-sm mb-2">{m.name}</p>
                <p className="text-sm text-muted-text leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-site">
            <h2 className="font-heading text-ink mb-8">Примеры работ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden bg-line group">
                  <Image
                    src={src}
                    alt={`Корпоративный текстиль TeamPrint ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-canvas section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-ink mb-8">Часто спрашивают</h2>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "С какого тиража начинается производство корпоративной одежды?",
                a: "Работаем от 1 штуки. При тиражах от 30–50 штук предоставляем скидку. Для тиражей от 100 штук готовим индивидуальное предложение.",
              },
              {
                q: "Вы занимаетесь разработкой дизайна?",
                a: "Да, наши дизайнеры помогут адаптировать ваш логотип или разработать концепцию корпоративной одежды с нуля.",
              },
              {
                q: "Какие ткани используете для поло?",
                a: "Хлопок 100%, хлопок-полиэстер 65/35 или пике — зависит от задачи. Хлопок дышит и комфортен, смесовые ткани меньше мнутся и быстрее сохнут.",
              },
            ].map((item, i) => (
              <details key={i} className="group border border-line rounded-xl bg-canvas overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-ink cursor-pointer select-none marker:hidden list-none hover:text-brand transition-colors">
                  {item.q}
                  <span className="text-brand ml-3 shrink-0 group-open:rotate-45 text-lg leading-none transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-text leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection source="textile-page" />
    </>
  );
}
