import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

const galleryImages = [
  "/images/interior/interior-1.jpg",
  "/images/interior/interior-2.jpg",
  "/images/interior/interior-3.jpg",
];

export const metadata: Metadata = buildMetadata({
  title: "Декоративный текстиль в Алматы — чехлы на кресла, шторы, баннерный сатин",
  description:
    "Брендированный декоративный текстиль: чехлы на банкетные кресла и диваны, тканевые шторы, баннерный сатин. Пошив под любые размеры.",
  path: "/interior",
});

const items = [
  {
    title: "Чехлы на банкетные кресла",
    description:
      "Чехлы из Спандекса или Бифлекса на стандартные и нестандартные кресла. Любые цвета, возможна печать логотипа. Одеваются и снимаются за секунды.",
  },
  {
    title: "Чехлы на диваны и кушетки",
    description:
      "Защитные и декоративные чехлы для медицинских кушеток, салонных диванов и мягкой мебели в гостиницах.",
  },
  {
    title: "Тканевые баннеры (баннерный сатин)",
    description:
      "Замена привычным ПВХ-баннерам: ткань без бликов, выглядит premium, легко складывается. Подходит для интерьерных экспозиций и торговых залов.",
  },
  {
    title: "Декоративные подушки и наволочки",
    description:
      "Корпоративные наволочки и подушки с логотипом или уникальным принтом для отелей, lounges и event-пространств.",
  },
  {
    title: "Скатерти и раннеры",
    description:
      "Декоративные скатерти, раннеры и подставки для ресторанов и отелей. Устойчивы к частым стиркам.",
  },
  {
    title: "Шторы и драпировки",
    description:
      "Изготовление тканевых штор для офисов, ресторанов и event-залов. Подбираем плотность и фактуру под интерьер.",
  },
];

export default function InteriorPage() {
  return (
    <>
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Услуга</p>
            <h1 className="font-heading text-ink">
              Декоративный текстиль в Алматы
            </h1>
            <p className="mt-5 text-lg text-muted-text leading-relaxed">
              Чехлы на кресла и диваны, тканевые баннеры, декоративные подушки и шторы.
              Пошив под любые нестандартные размеры с возможностью брендирования.
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
          <h2 className="font-heading text-ink mb-8">Что мы шьём</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-ink mb-5">Кому это нужно</h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Отели и гостиницы — чехлы на кресла и шторы под фирменный стиль",
                  "Рестораны и кафе — скатерти, раннеры и декоративные подушки",
                  "Event-агентства — аренда или покупка чехлов для банкетных кресел",
                  "Медицинские клиники — чехлы на кушетки с логотипом",
                  "Торговые центры — тканевые интерьерные баннеры без бликов",
                  "Корпоративные офисы — декоративные элементы в фирменных цветах",
                ].map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-muted-text">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-ink mb-5">Почему ткань, а не ПВХ?</h2>
              <div className="flex flex-col gap-3 text-sm text-muted-text leading-relaxed">
                <p>
                  Тканевые баннеры и декор становятся стандартом в premium-сегменте. Ткань не бликует на фото, выглядит дорого и не трескается на морозе — актуально для Алматы.
                </p>
                <p>
                  Ткань легче, компактнее при хранении и транспортировке. Для event-агентств, которые перевозят декор из мероприятия в мероприятие, это существенная экономия.
                </p>
                <p>
                  При схожей стоимости производства тканевые изделия служат в 2–3 раза дольше, что делает TCO (суммарную стоимость владения) значительно ниже.
                </p>
              </div>
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
                    alt={`Декоративный текстиль TeamPrint ${i + 1}`}
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

      <section className="bg-canvas section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-ink mb-8">Вопросы о декоративном текстиле</h2>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "Делаете ли вы чехлы на нестандартные размеры кресел?",
                a: "Да, это наш профиль. Присылайте размеры или привозите образец кресла — сошьём точно по форме.",
              },
              {
                q: "Можно ли заказать декоративные чехлы в аренду для мероприятия?",
                a: "Мы производим и продаём, не арендуем. Но многие event-агентства закупают у нас чехлы в собственный парк для последующей аренды клиентам.",
              },
              {
                q: "Как ухаживать за чехлами на кресла из Спандекса?",
                a: "Машинная стирка при 30–40°C без отжима. Сушка на кресле в форме. Гладить не нужно — ткань растягивается и принимает форму.",
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

      <CTASection source="interior-page" />
    </>
  );
}
