import Link from "next/link";
import { ArrowRight, Flag, Shirt, Trophy, Building2, Sofa } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const services = [
  {
    icon: Flag,
    title: "Флаги и флажная продукция",
    description:
      "Уличные и интерьерные флаги, виндеры, арки, флажки. Любые размеры и тиражи.",
    href: "/flags",
    tags: ["Уличные", "Настольные", "Виндеры", "Арки"],
  },
  {
    icon: Building2,
    title: "Текстиль для мероприятий",
    description:
      "Скатерти, пресс-воллы, ролл-апы, брендированный текстиль для выставок и event.",
    href: "/sublimation",
    tags: ["Скатерти", "Пресс-воллы", "Ролл-апы"],
  },
  {
    icon: Trophy,
    title: "Спортивная форма",
    description:
      "Футбольные, волейбольные, баскетбольные комплекты. Печать полного цикла.",
    href: "/sport",
    tags: ["Футбол", "Волейбол", "Беговые формы"],
  },
  {
    icon: Shirt,
    title: "Корпоративный текстиль",
    description:
      "Форма персонала, бренд-комплекты, промо-одежда для корпоративных клиентов.",
    href: "/textile",
    tags: ["Форма", "Промо", "Подарки"],
  },
  {
    icon: Sofa,
    title: "Декоративный текстиль",
    description:
      "Подушки, пледы, шопперы, дакимакуры и другие изделия с сублимационной печатью.",
    href: "/interior",
    tags: ["Подушки", "Пледы", "Шопперы"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-canvas section-padding">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <h2 className="font-heading text-ink">Что мы делаем</h2>
          <p className="mt-3 text-muted-text text-lg max-w-xl">
            Полный цикл производства на собственном оборудовании — печать, каландр, пошив.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeIn key={svc.href} delay={i * 0.07} margin="-50px">
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full border border-line rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-brand mb-4">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">
                    {svc.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-text border border-line rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    Подробнее <ArrowRight size={14} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}

          {/* CTA card */}
          <FadeIn delay={0.35} className="border border-dashed border-line rounded-xl p-6 flex flex-col items-start justify-center">
            <p className="text-muted-text text-sm leading-relaxed">
              Не нашли свою задачу? Свяжитесь с нами — найдём решение.
            </p>
            <Link
              href="/contacts"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand transition-colors"
            >
              Написать <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
