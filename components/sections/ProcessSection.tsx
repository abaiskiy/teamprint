import { FadeIn } from "@/components/shared/FadeIn";
import { MessageSquare, Palette, CheckSquare, Printer, Layers, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Заявка",
    description: "Оставляете заявку — менеджер связывается в течение 15 минут.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Макет",
    description: "Согласовываем дизайн. Если нужно — помогаем с подготовкой файла.",
  },
  {
    icon: CheckSquare,
    number: "03",
    title: "Согласование",
    description: "Утверждаете финальный макет и получаете счёт на оплату.",
  },
  {
    icon: Printer,
    number: "04",
    title: "Печать на бумаге",
    description: "Изображение печатается на специальной термотрансферной бумаге.",
  },
  {
    icon: Layers,
    number: "05",
    title: "Перенос на ткань",
    description: "Краска вплавляется в ткань на каландре под высокой температурой.",
  },
  {
    icon: PackageCheck,
    number: "06",
    title: "Пошив и доставка",
    description: "Изделия сшиваются, упаковываются и доставляются в указанный срок.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-canvas section-padding overflow-hidden">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            Процесс
          </p>
          <h2 className="font-heading text-ink">Как мы работаем</h2>
          <p className="mt-4 text-muted-text text-lg max-w-lg">
            Простой и прозрачный процесс — от заявки до получения готового изделия.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-line" aria-hidden />

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.number} delay={i * 0.08} className="flex flex-col">
                  {/* Step dot */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-brand flex items-center justify-center mb-4 text-brand shrink-0">
                    <Icon size={16} strokeWidth={2} />
                  </div>

                  <p className="text-xs font-bold text-brand/50 mb-1 tabular-nums">{step.number}</p>
                  <h3 className="font-heading font-semibold text-sm text-ink mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">{step.description}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={i * 0.06} direction="left" className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-brand flex items-center justify-center text-brand shrink-0">
                  <Icon size={16} strokeWidth={2} />
                </div>
                <div className="pb-2">
                  <p className="text-xs font-bold text-brand/50 tabular-nums">{step.number}</p>
                  <h3 className="font-heading font-semibold text-sm text-ink mt-0.5">{step.title}</h3>
                  <p className="text-xs text-muted-text mt-1 leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
