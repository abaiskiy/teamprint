import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Shield, Zap, MessageCircle, Users } from "lucide-react";
import { WA_HREF } from "@/lib/contacts";

const trust = [
  { icon: Clock, label: "4 года на рынке" },
  { icon: Users, label: "1200+ клиентов" },
  { icon: Zap, label: "Срок от 1 дня" },
  { icon: Shield, label: "Гарантия 10 лет" },
];

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      {/* Full-width hero with image background */}
      <div className="relative min-h-[560px] lg:min-h-[680px] flex items-center">

        {/* Background image */}
        <Image
          src="/images/hero-bg-new.jpg"
          alt="Сублимационная печать на ткани — производство TeamPrint в Алматы"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="animate-hero-in container-site py-20 lg:py-28">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand mb-6 bg-brand/15 border border-brand/30 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
              Производство в Алматы · с 2022 года
            </p>

            <h1 className="font-heading text-white max-w-2xl leading-none">
              Печатаем.<br />Шьём.<br />Производим.
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-white/75 leading-relaxed max-w-lg">
              Флаги, пресс-воллы, скатерти, виндеры — сублимационная
              печать{" "}
              <span className="text-white font-semibold">от 1 метра</span>.
            </p>

            {/* Trust pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {trust.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 font-medium backdrop-blur-sm"
                >
                  <Icon size={12} className="text-brand" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-lg transition-colors text-sm shadow-lg"
              >
                Получить расчёт
                <ArrowRight size={16} />
              </Link>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-lg transition-colors text-sm bg-white/10 backdrop-blur-sm"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
