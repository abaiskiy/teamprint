import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LeadForm } from "@/components/shared/LeadForm";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ExternalLink } from "lucide-react";
import { GOOGLE_MAPS_URL, GISMAP_URL } from "@/lib/contacts";

export const metadata: Metadata = buildMetadata({
  title: "Контакты TeamPrint — звоните и пишите в Алматы",
  description:
    "Телефон, WhatsApp, Telegram, email и адрес TeamPrint в Алматы. Форма заявки онлайн. Ответим в течение 15 минут.",
  path: "/contacts",
});

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (707) 145-13-88",
    href: "tel:+77071451388",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Написать в WhatsApp",
    href: `https://wa.me/77071451388?text=${encodeURIComponent("Здравствуйте! Пишу с сайта teamprint.kz — хочу узнать стоимость и сроки.")}`,
    external: true,
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@teamprint_kz",
    href: "https://t.me/teamprint_kz",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@teamprint.kz",
    href: "mailto:info@teamprint.kz",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Алматы, ул. Чайкиной, 3А",
    href: null,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн–Пт, 9:00–18:00",
    href: null,
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-4">
              Контакты
            </p>
            <h1 className="font-heading text-ink">Свяжитесь с нами</h1>
            <p className="mt-4 text-muted-text text-lg">
              Опишите задачу — рассчитаем стоимость за 15 минут. Работаем по договору, принимаем безнал.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: contacts + map */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <div className="flex items-start gap-3 p-4 border border-line rounded-xl bg-white">
                      <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-text">{c.label}</p>
                        <p className="text-sm font-semibold text-ink mt-0.5">{c.value}</p>
                      </div>
                    </div>
                  );

                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="hover:scale-[1.01] transition-transform"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  );
                })}
              </div>

              {/* Map buttons */}
              <div className="flex gap-2">
                <a
                  href={GISMAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-line bg-white hover:border-ink/30 text-ink font-semibold px-4 py-3 rounded-xl transition-colors text-sm"
                >
                  <ExternalLink size={15} className="text-brand" />
                  Открыть в 2GIS
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-line bg-white hover:border-ink/30 text-ink font-semibold px-4 py-3 rounded-xl transition-colors text-sm"
                >
                  <ExternalLink size={15} className="text-brand" />
                  Google Maps
                </a>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-line aspect-[4/3]">
                <iframe
                  src="https://maps.google.com/maps?q=43.2162834,76.9666069&output=embed&z=17&hl=ru"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TeamPrint на карте"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white border border-line rounded-2xl p-6 lg:p-8 self-start">
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">
                Оставить заявку
              </h2>
              <p className="text-sm text-muted-text mb-6">
                Менеджер свяжется в течение 15 минут в рабочее время.
              </p>
              <LeadForm source="contacts-page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
