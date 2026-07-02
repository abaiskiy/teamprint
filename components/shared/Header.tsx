"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/contacts";
import { reachGoal } from "@/lib/analytics";

const navLinks = [
  {
    label: "Услуги",
    href: "#",
    children: [
      { label: "Флаги и флажная продукция", href: "/flags" },
      { label: "Текстиль для мероприятий", href: "/sublimation" },
      { label: "Спортивная форма", href: "/sport" },
      { label: "Корпоративный текстиль", href: "/textile" },
      { label: "Декоративный текстиль", href: "/interior" },
    ],
  },
  { label: "Кейсы", href: "/cases" },
  { label: "Ткани", href: "/fabrics" },
  { label: "Партнёрам", href: "/for-partners" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-line">
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 font-heading font-bold text-xl text-ink"
          >
            <span className="text-brand">Team</span>Print
          </Link>

          {/* Desktop nav — visible from xl (1280px) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-ink">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 py-2 text-ink hover:text-brand transition-colors whitespace-nowrap">
                    {link.label}
                    <ChevronDown size={13} className="mt-0.5 opacity-60" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-60 bg-white border border-line rounded-xl shadow-md py-1.5 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-ink hover:text-brand hover:bg-canvas transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 hover:text-brand transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA — visible from xl */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand transition-colors whitespace-nowrap"
            >
              <Phone size={14} />
              {PHONE_NUMBER}
            </a>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-lg px-4 h-9 text-sm font-semibold bg-brand hover:bg-brand-dark text-white transition-colors whitespace-nowrap"
            >
              Получить расчёт
            </Link>
          </div>

          {/* Mid-size nav (lg–xl): compact links */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-sm font-medium text-ink">
            <Link href="/flags" className="hover:text-brand transition-colors whitespace-nowrap">Флаги</Link>
            <Link href="/cases" className="hover:text-brand transition-colors whitespace-nowrap">Кейсы</Link>
            <Link href="/fabrics" className="hover:text-brand transition-colors whitespace-nowrap">Ткани</Link>
            <Link href="/for-partners" className="hover:text-brand transition-colors whitespace-nowrap">Партнёрам</Link>
            <Link href="/about" className="hover:text-brand transition-colors whitespace-nowrap">О нас</Link>
          </nav>

          {/* Mid-size CTA (lg–xl): phone + button */}
          <div className="hidden lg:flex xl:hidden items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand transition-colors whitespace-nowrap"
            >
              <Phone size={14} />
              {PHONE_NUMBER}
            </a>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-lg px-4 h-9 text-sm font-semibold bg-brand hover:bg-brand-dark text-white transition-colors whitespace-nowrap"
            >
              Получить расчёт
            </Link>
          </div>

          {/* Mobile hamburger — visible below lg */}
          <button
            className="lg:hidden p-2 -mr-1 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-line py-4 flex flex-col gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-text">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2 text-sm text-ink hover:text-brand transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-ink hover:text-brand transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-4 mt-2 border-t border-line flex flex-col gap-2 px-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 py-1 text-sm font-medium text-ink"
              >
                <Phone size={15} />
                {PHONE_NUMBER}
              </a>
              <Link
                href="/contacts"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-lg px-4 h-11 text-sm font-semibold bg-brand hover:bg-brand-dark text-white transition-colors"
              >
                Получить расчёт
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
