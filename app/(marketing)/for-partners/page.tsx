import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, ArrowRight, Zap, Shield, FileText, Users } from "lucide-react";
import { WA_HREF, PHONE_HREF, PHONE_NUMBER } from "@/lib/contacts";

export const metadata: Metadata = buildMetadata({
  title: "Партнёрам — агентствам и подрядчикам | TeamPrint Алматы",
  description:
    "Сотрудничество с event-агентствами, рекламными студиями и подрядчиками. Оптовые цены, приоритетные сроки, работа с ЭСФ. Белая схема, договор.",
  path: "/for-partners",
});

const benefits = [
  {
    icon: Zap,
    title: "Приоритетные сроки",
    description:
      "Заявки от партнёров обрабатываются в первую очередь. Для постоянных агентств резервируем производственные мощности под сезонные пики.",
  },
  {
    icon: Shield,
    title: "Фиксированные оптовые цены",
    description:
      "Персональный прайс с партнёрской скидкой. Цена не меняется при повторных заказах — можете закладывать её в смету без рисков.",
  },
  {
    icon: FileText,
    title: "Белая схема и ЭСФ",
    description:
      "Работаем официально: договор, счёт-фактура, акт выполненных работ. Вы проводите через бухгалтерию без вопросов.",
  },
  {
    icon: Users,
    title: "Персональный менеджер",
    description:
      "Один контакт на все проекты. Менеджер знает ваши стандарты и предпочтения — не нужно объяснять каждый раз заново.",
  },
];

const conditions = [
  "Минимальный объём для партнёрства — от 3 заказов в месяц или от 150 000 тг/мес",
  "Скидка от 10% до 20% в зависимости от объёма",
  "Возможность работы под вашим брендом (белый лейбл)",
  "Постоплата для надёжных партнёров после 3 месяцев сотрудничества",
  "Доступ к образцам тканей и материалов",
  "Бесплатная подготовка технических макетов под ваши заказы",
];

const formats = [
  {
    title: "Event-агентства",
    description:
      "Закрываем весь текстиль для мероприятий: скатерти, пресс-воллы, флаги, чехлы. Один поставщик вместо четырёх — меньше координации, чище логистика.",
  },
  {
    title: "Рекламные студии",
    description:
      "Выполняем производственную часть ваших проектов. Принимаем готовые макеты в любом формате, соблюдаем ваши брифы и согласования с клиентом.",
  },
  {
    title: "Маркетинговые агентства",
    description:
      "Производство брендированной одежды и текстиля для ваших клиентов. Работаем конфиденциально — клиент видит только вас.",
  },
  {
    title: "Спортивные клубы и федерации",
    description:
      "Сезонные заказы форм, флагов и атрибутики. Фиксируем цену на сезон, помогаем с планированием тиражей.",
  },
];

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Напишите в WhatsApp или заполните форму — расскажите о своём агентстве и типичных объёмах заказов." },
  { num: "02", title: "Встреча или звонок", desc: "Обсудим условия, покажем цех и образцы материалов, согласуем прайс." },
  { num: "03", title: "Пробный заказ", desc: "Делаем первый проект вместе — проверяете качество, скорость и коммуникацию." },
  { num: "04", title: "Партнёрский договор", desc: "Фиксируем условия: скидки, сроки, ответственность — всё письменно." },
];

export default function ForPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white section-padding">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Партнёрам</p>
            <h1 className="font-heading text-white">
              Производство для агентств и подрядчиков
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Закрываем производственную часть ваших проектов. Оптовые цены,
              приоритетные сроки, официальный документооборот. Работаем под вашим брендом.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
              >
                Написать в WhatsApp <ArrowRight size={16} />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-3">Что получает партнёр</h2>
          <p className="text-muted-text text-sm mb-8 max-w-xl">
            Условия, которые помогают агентствам выстраивать надёжную цепочку поставок.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-6 bg-white border border-line rounded-xl">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <b.icon size={18} className="text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">{b.title}</p>
                  <p className="text-sm text-muted-text leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">С кем работаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formats.map((f) => (
              <div key={f.title} className="p-6 border border-line rounded-xl bg-canvas">
                <p className="font-semibold text-ink text-sm mb-2">{f.title}</p>
                <p className="text-sm text-muted-text leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-ink mb-5">Условия партнёрства</h2>
              <ul className="flex flex-col gap-3">
                {conditions.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-text">
                    <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink rounded-2xl p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">Белый лейбл</p>
              <p className="font-heading text-xl text-white mb-3">
                Работаем под вашим брендом
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Если ваш клиент не должен знать о производителе — работаем конфиденциально.
                Упаковка, накладные и документы оформляются без упоминания TeamPrint.
              </p>
              <p className="text-sm text-white/70 leading-relaxed mt-4">
                Это стандартная практика для агентств, которые выстраивают собственный бренд
                производителя или не хотят раскрывать цепочку поставок клиенту.
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand hover:text-white transition-colors"
              >
                Обсудить условия <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <h2 className="font-heading text-ink mb-8">Как начать сотрудничество</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="p-6 border border-line rounded-xl bg-canvas">
                <p className="text-3xl font-heading font-bold text-brand/20 mb-3">{s.num}</p>
                <p className="font-semibold text-ink text-sm mb-2">{s.title}</p>
                <p className="text-sm text-muted-text leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-ink mb-8">Вопросы от агентств</h2>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "Можем ли мы получить образцы тканей и материалов?",
                a: "Да. После первой встречи предоставляем папку с образцами всех тканей, которые используем. Можно взять к себе в офис для презентаций клиентам.",
              },
              {
                q: "Каковы минимальные сроки производства для партнёров?",
                a: "Партнёры имеют приоритет в производственной очереди. Стандартные сроки: флаги — 1–3 дня, форма — 5–10 дней, скатерти/пресс-воллы — 2–4 дня.",
              },
              {
                q: "Можно ли работать без предоплаты?",
                a: "Постоплата доступна партнёрам после 3 месяцев стабильного сотрудничества. Стандартно — 50% предоплата при запуске производства, 50% по готовности.",
              },
              {
                q: "Как вы гарантируете конфиденциальность по white label?",
                a: "Прописываем в договоре: никаких упоминаний TeamPrint в документах для конечного клиента. Упаковка нейтральная или с вашим брендингом.",
              },
              {
                q: "Работаете ли вы с тендерами и госзаказами?",
                a: "Да, у нас есть опыт участия в тендерах в качестве субподрядчика. Помогаем с техническими спецификациями и образцами для тендерной документации.",
              },
            ].map((item, i) => (
              <details key={i} className="group border border-line rounded-xl bg-white overflow-hidden">
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

      <CTASection
        source="for-partners-page"
        heading="Обсудим условия сотрудничества"
        subheading="Расскажите о вашем агентстве и типичных объёмах — предложим персональные условия."
      />
    </>
  );
}
