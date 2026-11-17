import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  MessageCircle,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { fabrics } from "@/content/fabrics";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/contacts";
import { FabricPrintForm } from "@/components/sections/FabricPrintForm";

const WA_PRINT_HREF = `https://wa.me/77071451388?text=${encodeURIComponent(
  "Здравствуйте! Хочу рассчитать стоимость сублимационной печати на ткани"
)}`;

export const metadata: Metadata = buildMetadata({
  title: "Сублимационная печать на ткани в Алматы | TeamPrint",
  description:
    "Сублимационная печать на ткани в Алматы от 1 метра. Печать на полиэстере для рекламы, спортивной одежды и производства. Teamprint.",
  path: "/pechat-na-tkani",
  ogImage: "https://teamprint.kz/images/hero-bg-new.jpg",
  absoluteTitle: true,
});

const directions = [
  {
    title: "Ткани для изготовления флагов",
    description: "Политекс, габардин, атлас и тафта для уличных флагов, виндеров и гирлянд.",
    image: "/images/service-flags.jpg",
    href: "/flags",
    alt: "Сублимационная печать ткани для флагов TeamPrint",
  },
  {
    title: "Ткани для спортивной одежды",
    description: "Печать на полиэстере для формы, футболок и функциональной одежды.",
    image: "/images/service-sport.jpg",
    href: "/sport",
    alt: "Печать на ткани для спортивной одежды",
  },
  {
    title: "Ткани для рекламной продукции",
    description: "Полноцветная печать для флагов, виндеров и другой наружной рекламы.",
    image: "/images/flags/flag-3.jpg",
    href: "/flags",
    alt: "Рекламный флаг с сублимационной печатью",
  },
  {
    title: "Ткани для оформления мероприятий",
    description: "Скатерти, пресс-воллы и декоративный текстиль под событие.",
    image: "/images/sublimation/event-1.jpg",
    href: "/sublimation",
    alt: "Текстиль для оформления мероприятия",
  },
  {
    title: "Текстиль для корпоративного брендинга",
    description: "Накидки, чехлы, пледы и другая продукция с логотипом компании.",
    image: "/images/service-corporate.jpg",
    href: "/textile",
    alt: "Корпоративный брендированный текстиль",
  },
  {
    title: "Печать для швейных производств",
    description: "Печатаем полотно, а при необходимости шьём готовое изделие у себя.",
    image: "/images/workshop.jpg",
    href: "/textile",
    alt: "Цех печати и пошива TeamPrint в Алматы",
  },
];

const advantages = [
  { icon: Factory, title: "Собственное производство в Алматы", text: "Печать и пошив в одном цехе, без передачи заказа на сторону." },
  { icon: Ruler, title: "Печать от 1 метра", text: "Берём небольшие объёмы и оптовые заказы на ткань." },
  { icon: Sparkles, title: "Стойкая полноцветная печать", text: "Краска входит в волокно полиэстера и не лежит плёнкой сверху." },
  { icon: Truck, title: "Корпоративные и оптовые заказы", text: "Договор, счёт и ЭСФ для юрлиц и ИП." },
  { icon: ShieldCheck, title: "Контроль качества", text: "Проверяем макет, цвет и полотно перед выдачей." },
  { icon: Scissors, title: "Печать и дальнейший пошив", text: "Можем отдать ткань рулоном или собрать готовое изделие." },
];

const steps = [
  { n: "01", title: "Заявка", text: "Сообщаете ткань, метраж и задачу." },
  { n: "02", title: "Подготовка макета", text: "Проверяем файл и готовим его к печати." },
  { n: "03", title: "Печать", text: "Наносим изображение на специальную бумагу." },
  { n: "04", title: "Термоперенос", text: "Переносим рисунок на ткань при нагреве." },
  { n: "05", title: "Проверка и выдача", text: "Смотрим качество и передаём заказ." },
];

const gallery = [
  { src: "/images/hero-bg-new.jpg", alt: "Сублимационный принтер TeamPrint печатает ткань" },
  { src: "/images/workshop.jpg", alt: "Производство сублимационной печати в Алматы" },
  { src: "/images/service-flags.jpg", alt: "Напечатанная ткань для флагов" },
  { src: "/images/sublimation/event-2.jpg", alt: "Полноцветная печать на текстиле для мероприятия" },
  { src: "/images/sport/sport-1.jpg", alt: "Готовое изделие из ткани с сублимационной печатью" },
  { src: "/images/textile/textile-1.jpg", alt: "Брендированное текстильное изделие TeamPrint" },
  { src: "/images/flags/flag-1.jpg", alt: "Флаг, сшитый из напечатанной ткани" },
  { src: "/images/service-tablecloth.jpg", alt: "Скатерть с полноцветной печатью" },
];

const faq = [
  {
    q: "Можно ли заказать печать от 1 метра?",
    a: "Да, предусмотрена печать небольших объёмов. Стоимость зависит от ткани и параметров заказа.",
  },
  {
    q: "На каких тканях возможна сублимационная печать?",
    a: "Основное направление — полиэстеровые и подходящие синтетические ткани. Конкретный материал подбираем под изделие.",
  },
  {
    q: "Можно ли напечатать собственный дизайн?",
    a: "Да, можно прислать свой макет. Если файл нужно подготовить под размер полотна — поможем.",
  },
  {
    q: "Можно ли заказать не только печать, но и пошив изделия?",
    a: "Да, TeamPrint также производит готовую брендированную текстильную продукцию: флаги, форму, скатерти и корпоративный текстиль.",
  },
  {
    q: "Сколько стоит печать на ткани?",
    a: "Стоимость зависит от материала, метража и особенностей заказа. Для расчёта оставьте заявку — цену на сайте не публикуем, потому что она считается по параметрам.",
  },
  {
    q: "Можно ли заказать из другого города?",
    a: "Да, доставляем по Казахстану через Казпочту, DHL или СДЭК. Стоимость и срок зависят от веса и города. Самовывоз из цеха в Алматы — бесплатно.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PechatNaTkaniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-canvas py-14 lg:py-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
              Сублимационная печать · Алматы
            </p>
            <h1 className="font-heading text-ink text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-[3.15rem] text-balance">
              Сублимационная печать на ткани в Алматы
            </h1>
            <p className="mt-5 text-base lg:text-lg text-muted-text leading-relaxed max-w-xl">
              Печатаем на полиэстеровых тканях для рекламы, производства одежды, мероприятий и брендированной продукции. Собственное производство в Алматы.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm font-medium text-ink">
              {["Печать от 1 метра", "Яркие стойкие цвета", "Собственное оборудование"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3.5 rounded-lg transition-colors text-sm"
              >
                Рассчитать стоимость
                <ArrowRight size={16} />
              </a>
              <a
                href={WA_PRINT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-lead-type="sublimation_print"
                data-form-name="pechat-na-tkani"
                className="inline-flex items-center justify-center gap-2 border border-line hover:border-ink/30 text-ink font-semibold px-5 py-3.5 rounded-lg transition-colors text-sm bg-white"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                Написать в WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line shadow-sm">
            <Image
              src="/images/hero-bg-new.jpg"
              alt="Сублимационный принтер печатает ткань на производстве TeamPrint"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-site">
          <div className="max-w-2xl mb-8 lg:mb-10">
            <h2 className="font-heading text-ink text-balance">Печать на ткани для любых задач</h2>
            <p className="mt-3 text-base lg:text-lg text-muted-text leading-relaxed">
              Печатаем полотно и, если нужно, производим готовое изделие в том же цехе.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col h-full border border-line rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-line">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="!text-lg !font-semibold !leading-snug text-ink text-balance min-h-[3.25rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-14 lg:py-20">
        <div className="container-site">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h2 className="font-heading text-ink text-balance">На каких тканях мы печатаем</h2>
            <p className="mt-3 text-base lg:text-lg text-muted-text leading-relaxed">
              Сублимация подходит преимущественно для полиэстеровых тканей и совместимых синтетических материалов. Выбор зависит от будущего изделия: флаг, форма, скатерть или корпоративный текстиль требуют разной плотности и фактуры.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fabrics.map((fabric) => (
              <article key={fabric.id} className="flex flex-col h-full bg-white border border-line rounded-2xl overflow-hidden shadow-sm">
                <div className="relative aspect-[16/9] bg-line">
                  <Image
                    src={fabric.image}
                    alt={`${fabric.name} — ткань для сублимационной печати`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="!text-base !font-semibold !leading-snug text-ink text-balance">
                      {fabric.name}
                    </h3>
                    <span className="text-xs text-muted-text shrink-0 pt-0.5">{fabric.density}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-text leading-relaxed line-clamp-2 min-h-10">
                    {fabric.applications.join(", ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-text">
            Полные характеристики — в{" "}
            <Link href="/fabrics" className="text-brand font-medium hover:underline">
              каталоге тканей
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-ink py-14 lg:py-20">
        <div className="container-site">
          <h2 className="font-heading text-white text-balance mb-8 lg:mb-10">
            Почему печатают у <span className="text-brand">Team</span>Print
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div key={title} className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
                <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="!text-lg !font-semibold !leading-snug text-white text-balance min-h-[3.25rem]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-site">
          <h2 className="font-heading text-ink text-balance mb-8 lg:mb-10">От макета до готовой ткани</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {steps.map((step) => (
              <li key={step.n} className="min-w-0 h-full border border-line rounded-2xl p-4 lg:p-5 bg-canvas">
                <p className="text-brand font-heading text-xl leading-none">{step.n}</p>
                <h3 className="mt-3 !text-base !font-semibold !leading-snug text-ink text-balance">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-canvas py-14 lg:py-20">
        <div className="container-site">
          <h2 className="font-heading text-ink text-balance mb-8 lg:mb-10">Примеры сублимационной печати</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {gallery.map((item) => (
              <div key={item.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-white py-14 lg:py-20 scroll-mt-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:pt-2">
            <h2 className="font-heading text-ink text-balance">Рассчитать стоимость печати на ткани</h2>
            <p className="mt-4 text-base lg:text-lg text-muted-text leading-relaxed">
              Оставьте параметры заказа — подготовим расчёт стоимости. Цену на странице не считаем: она зависит от ткани и метража.
            </p>
            <p className="mt-6 text-sm text-muted-text">
              Или позвоните:{" "}
              <a href={PHONE_HREF} className="text-ink font-semibold" data-lead-type="sublimation_print">
                {PHONE_NUMBER}
              </a>
            </p>
          </div>
          <div className="lg:col-span-7 bg-canvas border border-line rounded-2xl p-5 sm:p-8">
            <FabricPrintForm />
          </div>
        </div>
      </section>

      <section className="bg-canvas py-14 lg:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-ink text-balance mb-8">Вопросы о печати на ткани</h2>
          <div className="flex flex-col gap-3">
            {faq.map((item) => (
              <details key={item.q} className="group border border-line rounded-xl bg-white overflow-hidden">
                <summary className="flex items-start justify-between gap-4 px-5 py-4 text-base font-semibold leading-snug text-ink cursor-pointer select-none list-none">
                  {item.q}
                  <span className="text-brand shrink-0 transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-text leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 lg:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-white text-balance">Нужна сублимационная печать на ткани?</h2>
          <p className="mt-4 text-white/65 text-base lg:text-lg leading-relaxed max-w-xl">
            Расскажите о задаче — подберём подходящий материал и рассчитаем стоимость.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              Рассчитать стоимость
              <ArrowRight size={16} />
            </a>
            <a
              href={WA_PRINT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-type="sublimation_print"
              data-form-name="pechat-na-tkani"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-line px-3 py-3 flex gap-2">
        <a
          href="#quote"
          className="flex-1 inline-flex items-center justify-center bg-brand text-white font-semibold text-sm h-11 rounded-lg"
        >
          Рассчитать
        </a>
        <a
          href={WA_PRINT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          data-lead-type="sublimation_print"
          data-form-name="pechat-na-tkani"
          className="flex-1 inline-flex items-center justify-center gap-1.5 border border-line text-ink font-semibold text-sm h-11 rounded-lg"
        >
          <MessageCircle size={15} className="text-[#25D366]" />
          WhatsApp
        </a>
      </div>
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
