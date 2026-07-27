import type { Metadata } from "next";
import { Phone, MessageCircle, Globe, MapPin } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER, WA_HREF, GISMAP_URL } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "TeamPrint",
  robots: {
    index: false,
    follow: false,
  },
};

const links = [
  {
    icon: MessageCircle,
    label: "Написать в WhatsApp",
    sublabel: "Ответим быстро",
    href: WA_HREF,
    external: true,
    color: "bg-[#25D366] hover:bg-[#20c05c]",
    dark: true,
  },
  {
    icon: Phone,
    label: "Позвонить",
    sublabel: PHONE_NUMBER,
    href: PHONE_HREF,
    external: false,
    color: "bg-brand hover:bg-brand-dark",
    dark: true,
  },
  {
    icon: Globe,
    label: "Наш сайт",
    sublabel: "teamprint.kz",
    href: "https://teamprint.kz",
    external: true,
    color: "bg-white hover:bg-gray-50 border border-white/20",
    dark: false,
  },
  {
    icon: MapPin,
    label: "Как нас найти",
    sublabel: "Алматы, ул. Чайкиной, 3А",
    href: GISMAP_URL,
    external: true,
    color: "bg-white hover:bg-gray-50 border border-white/20",
    dark: false,
  },
];

export default function TaplinkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ink to-[#1a1a2e] flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <a href="https://teamprint.kz" className="font-heading font-bold text-3xl text-white tracking-tight">
          <span className="text-brand">Team</span>Print
        </a>
        <p className="text-white/50 text-sm text-center">
          Сублимационная печать и пошив в Алматы
        </p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {links.map(({ icon: Icon, label, sublabel, href, external, color, dark }) => {
          const cls = `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-150 shadow-sm active:scale-95 ${color}`;
          const content = (
            <>
              <Icon size={22} className={dark ? "text-white shrink-0" : "text-brand shrink-0"} />
              <div className="flex flex-col">
                <span className={`font-semibold text-sm ${dark ? "text-white" : "text-ink"}`}>{label}</span>
                <span className={`text-xs mt-0.5 ${dark ? "text-white/70" : "text-muted-text"}`}>{sublabel}</span>
              </div>
            </>
          );
          return external ? (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
              {content}
            </a>
          ) : (
            <a key={label} href={href} className={cls}>
              {content}
            </a>
          );
        })}
      </div>

      <p className="mt-10 text-white/20 text-xs">© TeamPrint</p>
    </div>
  );
}
