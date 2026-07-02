import Link from "next/link";
import { ArrowRight, Calendar, Dumbbell, Briefcase } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const segments = [
  {
    icon: Calendar,
    title: "Event-агентства и организаторы",
    description:
      "Быстро закрываем потребность в текстильном оформлении мероприятий любого масштаба. Скатерти, пресс-воллы, флаги, арки — за 3–7 дней.",
    caseTitle: "Forum Almaty 2024",
    caseResult: "200 скатертей + пресс-волл за 5 дней",
    href: "/cases",
    accent: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Dumbbell,
    title: "Спортивные мероприятия",
    description:
      "Флаги финиша, виндеры, арки, баннеры и брендированная форма для марафонов, турниров и федераций.",
    caseTitle: "Almaty Marathon 2024",
    caseResult: "350 флагов и арка за 12 дней",
    href: "/cases",
    accent: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Корпоративный сектор и госкомпании",
    description:
      "Флаги с логотипом, форма персонала и бренд-текстиль для крупных организаций. Работаем по договору, НДС, безнал.",
    caseTitle: "Самрук-Казына",
    caseResult: "150 флагов ежегодно, договор ИП",
    href: "/cases",
    accent: "bg-slate-50 border-slate-200",
    iconColor: "text-slate-600",
  },
];

export function SegmentsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <div className="mb-10 lg:mb-14 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            Решения
          </p>
          <h2 className="font-heading text-ink">Решения для вашей задачи</h2>
          <p className="mt-3 text-muted-text">
            Разный бизнес — разные задачи. Мы знаем, как работать с каждым сегментом.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <FadeIn key={seg.title} delay={i * 0.1} margin="-50px" className={`rounded-xl border p-6 ${seg.accent} flex flex-col`}>
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${seg.iconColor}`}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-ink">{seg.title}</h3>
                <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">
                  {seg.description}
                </p>

                {/* Mini case */}
                <div className="mt-5 pt-4 border-t border-black/8">
                  <p className="text-xs text-muted-text font-medium mb-1">Пример</p>
                  <p className="text-sm font-semibold text-ink">{seg.caseTitle}</p>
                  <p className="text-xs text-muted-text mt-0.5">{seg.caseResult}</p>
                </div>

                <Link
                  href={seg.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand transition-colors"
                >
                  Смотреть кейсы <ArrowRight size={14} />
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
