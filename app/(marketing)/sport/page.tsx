import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight } from "lucide-react";

const galleryImages = [
  "/images/sport/sport-1.jpg",
  "/images/sport/sport-2.jpg",
  "/images/sport/sport-3.jpg",
  "/images/sport/sport-4.jpg",
  "/images/sport/sport-5.jpg",
  "/images/sport/sport-6.jpg",
];

export const metadata: Metadata = buildMetadata({
  title: "Спортивная форма на заказ в Алматы — сублимационная печать",
  description:
    "Футбольная, волейбольная, баскетбольная форма и беговые комплекты с полноцветной печатью. Любые тиражи, от 1 комплекта. Coolmax, влагоотводящие ткани.",
  path: "/sport",
});

const items = [
  {
    title: "Футбольная форма",
    description:
      "Футболка + шорты с полноцветной сублимацией. Индивидуальные номера и имена без доплаты. Ткань Coolmax — влагоотводящая, быстросохнущая.",
  },
  {
    title: "Волейбольная форма",
    description:
      "Игровые майки и шорты для волейбольных команд. Любые цвета и дизайн — без ограничений по количеству цветов в принте.",
  },
  {
    title: "Баскетбольная форма",
    description:
      "Майки и шорты свободного кроя с сублимационной печатью. Производим как полные комплекты, так и отдельные элементы.",
  },
  {
    title: "Беговые комплекты",
    description:
      "Лёгкая форма для марафонов и трейлов. Разработаем дизайн под ваш клуб, федерацию или корпоративный забег.",
  },
  {
    title: "Корпоративная спортивная форма",
    description:
      "Единая форма для корпоративных турниров: с логотипом компании, номерами и именами. Работаем с тиражами от 1 комплекта.",
  },
  {
    title: "Спортивная экипировка",
    description:
      "Жилеты, ветровки, лосины и другие элементы спортивного гардероба с сублимационной печатью.",
  },
];

const advantages = [
  "Индивидуальные номера и имена — без доплаты за разнообразие",
  "Ткань Coolmax — сертифицированная влагоотводящая технология",
  "Производство от 1 комплекта — подходит для небольших команд",
  "Полный цикл: макет → согласование → печать → пошив",
  "Тест-образец перед тиражом — чтобы не было сюрпризов по цвету",
  "Работаем с федерациями, клубами и корпоративными командами",
];

const faqItems = [
  {
    q: "Можно ли сделать форму с разными номерами для каждого игрока?",
    a: "Да, это стандартная опция — каждый комплект со своим номером и именем без наценки за вариативность. Именно в этом преимущество сублимации перед трафаретной печатью.",
  },
  {
    q: "Какая ткань используется для спортивной формы?",
    a: "Coolmax 140–160 г/м² — влагоотводящая, быстросохнущая, сертифицированная. Для более бюджетного варианта — стандартный спортивный полиэстер.",
  },
  {
    q: "Минимальный тираж для спортивной формы?",
    a: "От 1 комплекта. При тираже от 10–15 комплектов цена за единицу становится значительно ниже.",
  },
  {
    q: "Сколько времени занимает производство формы?",
    a: "7–14 рабочих дней в зависимости от тиража. Рекомендуем закладывать не менее 2 недель до даты турнира.",
  },
];

export default function SportPage() {
  return (
    <>
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Услуга</p>
            <h1 className="font-heading text-ink">
              Спортивная форма с сублимационной печатью
            </h1>
            <p className="mt-5 text-lg text-muted-text leading-relaxed">
              Футбольная, волейбольная, баскетбольная и беговая форма с полноцветным дизайном.
              Индивидуальные номера без доплаты. От 1 комплекта.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
              >
                Получить расчёт <ArrowRight size={16} />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 border border-line hover:border-ink/40 text-ink font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm bg-white"
              >
                Смотреть кейсы
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">Виды спортивной формы</h2>
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
              <h2 className="font-heading text-ink mb-5">Преимущества сублимации для спорта</h2>
              <ul className="flex flex-col gap-3">
                {advantages.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-muted-text">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink rounded-2xl p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Почему сублимация</p>
              <p className="text-sm text-white/70 leading-relaxed">
                В отличие от трафаретной или цифровой печати, сублимация вплавляет краску
                прямо в волокна ткани. Изображение не трескается, не облезает и не выцветает
                даже после сотен стирок. Для спортивной формы, которая стирается каждую неделю,
                это принципиально важно.
              </p>
              <p className="text-sm text-white/70 leading-relaxed mt-4">
                Кроме того, сублимация позволяет печатать бесшовные градиенты и сложные дизайны
                без ограничений по количеству цветов — стоимость не зависит от сложности принта.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-site">
            <h2 className="font-heading text-ink mb-8">Примеры работ</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-line group">
                  <Image
                    src={src}
                    alt={`Спортивная форма TeamPrint ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-canvas section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-ink mb-8">Вопросы о спортивной форме</h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
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

      <CTASection source="sport-page" />
    </>
  );
}
