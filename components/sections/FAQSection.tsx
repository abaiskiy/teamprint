"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faq } from "@/content/faq";

export function FAQSection() {
  const preview = faq.slice(0, 6);

  return (
    <section id="faq" className="bg-white section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-ink">Частые вопросы</h2>
            <p className="mt-4 text-muted-text text-lg leading-relaxed">
              Если не нашли ответ — звоните или пишите, ответим в течение 15 минут.
            </p>
            <Link
              href="/contacts"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand transition-colors"
            >
              Задать вопрос <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {preview.map((item, i) => (
              <details
                key={i}
                className="group border border-line rounded-xl bg-canvas overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-ink cursor-pointer select-none marker:hidden list-none hover:text-brand transition-colors">
                  {item.question}
                  <ChevronDown
                    size={16}
                    className="text-muted-text shrink-0 ml-3 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-text leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
