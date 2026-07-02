import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { WA_HREF, PHONE_HREF, PHONE_NUMBER, ADDRESS } from "@/lib/contacts";

const services = [
  { label: "Флаги и флажная продукция", href: "/flags" },
  { label: "Текстиль для мероприятий", href: "/sublimation" },
  { label: "Спортивная форма", href: "/sport" },
  { label: "Корпоративный текстиль", href: "/textile" },
  { label: "Декоративный текстиль", href: "/interior" },
];

const info = [
  { label: "Каталог тканей", href: "/fabrics" },
  { label: "Требования к макетам", href: "/about#requirements" },
  { label: "Способы крепления", href: "/about#mounting" },
  { label: "FAQ", href: "/#faq" },
];

const company = [
  { label: "О компании", href: "/about" },
  { label: "Кейсы", href: "/cases" },
  { label: "Партнёрам", href: "/for-partners" },
  { label: "Контакты", href: "/contacts" },
  { label: "Блог", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site section-padding">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading font-bold text-2xl">
              <span className="text-brand">Team</span>Print
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Сублимационная печать и пошив на ткани. Собственный цех в Алматы.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-white/70">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} />
                {PHONE_NUMBER}
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                {ADDRESS}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Услуги
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Информация
            </p>
            <ul className="flex flex-col gap-2.5">
              {info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Компания
            </p>
            <ul className="flex flex-col gap-2.5">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} TeamPrint. Все права защищены.</p>
          <p>Алматы, Казахстан</p>
        </div>
      </div>
    </footer>
  );
}
