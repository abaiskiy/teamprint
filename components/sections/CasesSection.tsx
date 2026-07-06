import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const featuredCases = [
  {
    slug: "borusan-flagpoles",
    client: "BORUSAN",
    task: "7-метровые флагштоки с нуля и монтаж на объекте — без сторонних подрядчиков",
    quantity: "Флагштоки 7 м",
    duration: "Под ключ",
    category: "Корпоратив",
    image: "/images/cases/borusan/cover.jpg",
  },
  {
    slug: "kia-flags",
    client: "KIA",
    task: "16 уличных флагов: производство и монтаж на объекте заказчика",
    quantity: "16 флагов",
    duration: "Под ключ",
    category: "Авто",
    image: "/images/cases/kia/cover.jpg",
  },
  {
    slug: "chaplin-seat-covers",
    client: "Кинотеатр Чаплин",
    task: "640 брендированных чехлов на кресла к премьере «Властелины Вселенной»",
    quantity: "640 чехлов",
    duration: "Срочно",
    category: "Event",
    image: "/images/cases/chaplin/cover.jpg",
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="bg-canvas section-padding">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Кейсы
            </p>
            <h2 className="font-heading text-ink">Наши работы</h2>
            <p className="mt-4 text-muted-text text-lg max-w-md">
              Реальные проекты с реальными цифрами — не стоковые фото.
            </p>
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand transition-colors shrink-0"
          >
            Все кейсы <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {featuredCases.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.1} margin="-50px" className="h-full">
              <Link
                href={`/cases/${c.slug}`}
                className="group flex flex-col h-full border border-line rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-line relative overflow-hidden">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.client}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-muted-text/30 text-xs">фото кейса</span>
                  )}
                  <span className="absolute top-3 left-3 z-10 text-xs font-medium bg-white border border-line rounded-full px-2.5 py-1 text-muted-text">
                    {c.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-heading font-semibold text-ink text-base group-hover:text-brand transition-colors">
                    {c.client}
                  </p>
                  <p className="mt-1 text-sm text-muted-text leading-snug flex-1">{c.task}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-text border-t border-line pt-3">
                    <span className="font-semibold text-ink whitespace-nowrap">{c.quantity}</span>
                    <span className="text-line shrink-0">|</span>
                    <span className="whitespace-nowrap">{c.duration}</span>
                    <span className="ml-auto flex items-center gap-1 font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      Подробнее <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
