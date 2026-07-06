import { UtensilsCrossed, ShoppingBag, Megaphone, Car } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const segments = [
  {
    icon: UtensilsCrossed,
    title: "Рестораны и кафе",
    description:
      "Подушки, скатерти, фартуки, худи и мерч для персонала — всё с вашим брендом. Пледы для летних террас.",
    products: ["Скатерти", "Фартуки", "Мерч", "Пледы"],
    accent: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: ShoppingBag,
    title: "Торговые центры",
    description:
      "Сезонные оформления: флаги, виндеры, текстильные подвесы, декор для детских зон и атриумов.",
    products: ["Флаги", "Виндеры", "Подвесы", "Текстильный декор"],
    accent: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
  },
  {
    icon: Megaphone,
    title: "Ивент-агентства",
    description:
      "Пресс-воллы, флаги, виндеры, брендированный мерч и текстильный декор для мероприятий любого масштаба.",
    products: ["Пресс-воллы", "Флаги", "Мерч", "Декор"],
    accent: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    icon: Car,
    title: "Авто, спорт и другие",
    description:
      "Флаги и виндеры для автосалонов, банты для машин, чехлы, форма для марафонов и корпоративных команд.",
    products: ["Флаги", "Виндеры", "Банты", "Форма"],
    accent: "bg-sky-50 border-sky-200",
    iconColor: "text-sky-600",
  },
];

export function SegmentsSection() {
  return (
    <section className="bg-brand/5 section-padding">
      <div className="container-site">
        <div className="mb-10 lg:mb-14 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            Решения
          </p>
          <h2 className="font-heading text-ink">Решения для вашей задачи</h2>
          <p className="mt-4 text-muted-text text-lg">
            Разный бизнес — разные задачи. Мы знаем, как работать с каждым сегментом.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <FadeIn key={seg.title} delay={i * 0.08} margin="-50px" className={`rounded-xl border p-5 ${seg.accent} flex flex-col`}>
                <div className={`w-9 h-9 flex items-center justify-center mb-3 ${seg.iconColor}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-base text-ink">{seg.title}</h3>
                <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1">
                  {seg.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {seg.products.map((p) => (
                    <span key={p} className="text-xs bg-white/60 border border-black/8 rounded-full px-2.5 py-1 text-muted-text">
                      {p}
                    </span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
