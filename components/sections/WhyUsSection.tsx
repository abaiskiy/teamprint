import { FadeIn } from "@/components/shared/FadeIn";
import { Factory, Shield, Zap, FileText, Truck } from "lucide-react";

const advantages = [
  {
    icon: Factory,
    title: "Собственный цех",
    description: "Печать, каландр и пошив под одной крышей — без посредников и задержек.",
  },
  {
    icon: Zap,
    title: "Срок от 1 дня",
    description: "Берёмся за срочные заказы. Стандартный тираж — 3–7 рабочих дней.",
  },
  {
    icon: Shield,
    title: "Гарантия 10 лет",
    description: "Сублимация вплавляется в волокна — краска не облезет и не выцветет.",
  },
  {
    icon: FileText,
    title: "Полный пакет документов",
    description: "Договор, счёт, ЭСФ, НДС. Работаем с юрлицами и ИП.",
  },
  {
    icon: Truck,
    title: "Доставка по Казахстану",
    description: "Отправляем в любой город. Монтаж и установка — в Алматы.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            Преимущества
          </p>
          <h2 className="font-heading text-ink">Почему выбирают TeamPrint</h2>
          <p className="mt-4 text-muted-text text-lg max-w-lg">
            Собственный цех и 4 года опыта дают нам конкретные преимущества перед посредниками.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <FadeIn key={adv.title} delay={i * 0.07} margin="-30px" className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-ink leading-snug">
                    {adv.title}
                  </h3>
                  <p className="mt-1.5 text-base text-muted-text leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
