import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "О компании TeamPrint — производство в Алматы",
  description:
    "TeamPrint — 4 года на рынке сублимационной печати. Собственный цех в Алматы: печать, каландр, пошив. Работаем с корпорациями, агентствами и малым бизнесом.",
  path: "/about",
});

const values = [
  {
    title: "Честность",
    description:
      "Не даём ложных обещаний по срокам и цене. Если не успеем — скажем сразу. Калькулятор показывает реальную стоимость.",
  },
  {
    title: "Качество без компромиссов",
    description:
      "Делаем тест-принт перед каждым новым тиражом. Принимаем работу только если сами довольны результатом.",
  },
  {
    title: "Долгосрочные отношения",
    description:
      "80% клиентов возвращаются. Мы помним параметры каждого постоянного клиента и не просим согласовывать заново.",
  },
];

const equipment = [
  "Широкоформатный принтер для сублимационной печати",
  "Каландровый пресс для переноса изображения на ткань",
  "Промышленные швейные машины",
  "Раскроечный стол",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
                О нас
              </p>
              <h1 className="font-heading text-ink">
                4 года делаем текстиль, которым гордятся клиенты
              </h1>
              <p className="mt-5 text-muted-text text-lg leading-relaxed">
                TeamPrint — компания сублимационной печати в Алматы. С 2022 года мы
                работаем с корпорациями, event-агентствами, спортивными организациями
                и малым бизнесом по всему Казахстану.
              </p>
              <p className="mt-4 text-muted-text leading-relaxed">
                У нас собственный цех — не аутсорс. Это значит, что мы контролируем
                каждый этап: от подготовки макета до доставки.
              </p>
            </div>

            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="/images/workshop.jpg"
                alt="Цех TeamPrint — сублимационная печать и пошив в Алматы"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/team.jpg"
                alt="Команда TeamPrint — сублимационная печать в Алматы"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-ink mb-5">Как мы начинали</h2>
              <div className="flex flex-col gap-5 text-sm text-muted-text leading-relaxed">
                <p>
                  В 2022 году мы начали с небольшого оборудования и первых клиентов
                  из ближайшего окружения. Первый заказ — 10 флагов для небольшого
                  турнира. Справились за 2 дня.
                </p>
                <p>
                  К 2024 году цех вырос: добавили каландровый пресс и расширили
                  ассортимент тканей. Начали работать с корпоративными клиентами
                  и крупными event-агентствами.
                </p>
                <p>
                  Сегодня мы — один из немногих поставщиков в Алматы с полным
                  производственным циклом: печать, прессование и пошив под одной крышей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="requirements" className="bg-canvas section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-ink mb-5">Оборудование</h2>
              <ul className="flex flex-col gap-3">
                {equipment.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-ink mb-5">Ценности</h2>
              <div className="flex flex-col gap-5">
                {values.map((v) => (
                  <div key={v.title}>
                    <p className="font-heading font-semibold text-base text-ink">{v.title}</p>
                    <p className="mt-1.5 text-sm text-muted-text leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection source="about-page" />
    </>
  );
}
