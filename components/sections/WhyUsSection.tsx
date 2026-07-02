import { FadeIn } from "@/components/shared/FadeIn";
import {
  Factory,
  Shield,
  Zap,
  Package,
  Palette,
  FileText,
  Truck,
  User,
} from "lucide-react";

const advantages = [
  {
    icon: Factory,
    title: "Собственное производство",
    description: "Печать → каландр → пошив — всё в одном цехе в Алматы. Никаких посредников.",
  },
  {
    icon: Shield,
    title: "Гарантия 10 лет на печать",
    description: "Сублимация вплавляется в волокна — краска не облезет и не выцветет.",
  },
  {
    icon: Zap,
    title: "Сроки от 1 рабочего дня",
    description: "Срочные заказы без длинной очереди. Работаем оперативно.",
  },
  {
    icon: Package,
    title: "Любые тиражи — от 1 до 10 000",
    description: "Комфортно работаем как с единичными, так и с крупными заказами.",
  },
  {
    icon: Palette,
    title: "Помощь с дизайном",
    description: "Подготовим и согласуем макет. Бесплатно при размещении заказа.",
  },
  {
    icon: FileText,
    title: "Белая работа",
    description: "Договор, счёт, ЭСФ, НДС. Отсрочка для постоянных партнёров.",
  },
  {
    icon: Truck,
    title: "Доставка по всему Казахстану",
    description: "Отправляем в любой город. Монтаж и установка в Алматы — наша команда.",
  },
  {
    icon: User,
    title: "Персональный менеджер",
    description: "Один контакт на весь проект — от согласования до получения.",
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
          <p className="mt-3 text-muted-text max-w-lg">
            Собственный цех и 3 года опыта дают нам конкретные преимущества перед посредниками.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <FadeIn key={adv.title} delay={i * 0.06} margin="-30px" className="flex flex-col">
                <div className="w-9 h-9 text-brand mb-3">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-base text-ink">
                  {adv.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-text leading-relaxed">
                  {adv.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
