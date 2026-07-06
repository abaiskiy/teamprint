import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const services = [
  {
    title: "Флаги и флажная продукция",
    description: "Уличные и интерьерные флаги, виндеры, арки, флажки. Любые размеры и тиражи.",
    href: "/flags",
    image: "/images/service-flags.jpg",
    tags: ["Уличные", "Настольные", "Виндеры", "Арки"],
  },
  {
    title: "Текстиль для мероприятий",
    description: "Скатерти, пресс-воллы, ролл-апы, брендированный текстиль для выставок и event.",
    href: "/sublimation",
    image: "/images/service-tablecloth.jpg",
    tags: ["Скатерти", "Пресс-воллы", "Ролл-апы"],
  },
  {
    title: "Спортивная форма",
    description: "Футбольные, волейбольные, баскетбольные комплекты. Печать полного цикла.",
    href: "/sport",
    image: "/images/service-sport.jpg",
    tags: ["Футбол", "Волейбол", "Беговые формы"],
  },
  {
    title: "Корпоративный текстиль",
    description: "Форма персонала, бренд-комплекты, промо-одежда для корпоративных клиентов.",
    href: "/textile",
    image: "/images/service-corporate.jpg",
    tags: ["Форма", "Промо", "Подарки"],
  },
  {
    title: "Декоративный текстиль",
    description: "Подушки, пледы, шопперы и другие изделия с сублимационной печатью.",
    href: "/interior",
    image: "/images/service-interior.jpg",
    tags: ["Подушки", "Пледы", "Шопперы"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-canvas section-padding">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <h2 className="font-heading text-ink">Что мы делаем</h2>
          <p className="mt-4 text-muted-text text-lg max-w-xl">
            Полный цикл производства на собственном оборудовании — печать, каландр, пошив.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <FadeIn key={svc.href} delay={i * 0.07} margin="-50px">
              <Link
                href={svc.href}
                className="group flex flex-col h-full border border-line rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-line/30 p-3">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">
                    {svc.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand">
                    Подробнее <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}

          {/* CTA card */}
          <FadeIn delay={0.35} className="border border-dashed border-line rounded-2xl p-6 flex flex-col items-start justify-center">
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
