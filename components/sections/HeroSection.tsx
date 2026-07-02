"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Shield, Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ClientsMarquee } from "@/components/shared/ClientsMarquee";
import { WA_HREF } from "@/lib/contacts";

const trust = [
  { icon: Zap, label: "Срок от 1 дня" },
  { icon: Shield, label: "Гарантия качества" },
  { icon: Clock, label: "1200+ выполненных заказов" },
];

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      {/* Main hero */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_48%] min-h-[520px] lg:min-h-[600px]">

        {/* Left — light text panel */}
        <div className="bg-canvas flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-6 py-16 lg:py-20 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-14 w-full"
          >
            {/* Label */}
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand mb-4 bg-brand/8 border border-brand/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
              Производство в Алматы · с 2022 года
            </p>

            <h1 className="font-heading text-ink">
              Напечатаем флаги и текстиль с вашим брендом
            </h1>

            <p className="mt-4 text-base lg:text-lg text-muted-text leading-relaxed max-w-md">
              Флаги, пресс-воллы, скатерти, виндеры — сублимационная
              печать{" "}
              <span className="text-ink font-semibold">от 1 штуки</span>.
            </p>

            {/* Trust pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {trust.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs text-ink/60 bg-white border border-line rounded-full px-3 py-1.5 font-medium"
                >
                  <Icon size={12} className="text-brand" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm shadow-sm"
              >
                Получить расчёт
                <ArrowRight size={16} />
              </Link>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line hover:border-ink/30 text-ink font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm bg-white"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>

          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative min-h-[320px] lg:min-h-0"
        >
          <Image
            src="/images/flags/flag-3.jpg"
            alt="Флаг AS Development — сублимационная печать TeamPrint"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          {/* Subtle left fade to blend with text panel */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-canvas to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Client logos */}
      <div className="bg-white border-t border-b border-line py-7">
        <ClientsMarquee />
      </div>
    </section>
  );
}
