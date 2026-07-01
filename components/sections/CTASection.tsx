import { MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { WA_HREF, PHONE_HREF, PHONE_NUMBER } from "@/lib/contacts";

interface CTASectionProps {
  source?: string;
  heading?: string;
  subheading?: string;
}

export function CTASection({
  source = "home-cta",
  heading = "Опишите задачу — рассчитаем стоимость за 15 минут",
  subheading = "Расскажите, что нужно сделать: тип продукции, количество, срок. Мы предложим оптимальное решение и пришлём расчёт.",
}: CTASectionProps) {
  return (
    <section className="bg-canvas section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Контакт
            </p>
            <h2 className="font-heading text-ink">
              {heading}
            </h2>
            <p className="mt-4 text-muted-text leading-relaxed">
              {subheading}
            </p>

            <div className="mt-8 flex flex-col gap-3 max-w-xs">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20b95a] text-white font-semibold px-5 py-3.5 rounded-xl transition-colors w-full"
              >
                <MessageCircle size={20} className="shrink-0" />
                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-xs opacity-80">Ответим быстро</p>
                </div>
              </a>

              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 border border-line bg-white hover:border-ink/30 text-ink font-semibold px-5 py-3.5 rounded-xl transition-colors w-full"
              >
                <Phone size={20} className="shrink-0" />
                <div>
                  <p className="text-sm font-semibold">{PHONE_NUMBER}</p>
                  <p className="text-xs text-muted-text">Пн–Пт, 9:00–18:00</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-line rounded-2xl p-6 lg:p-8">
            <h3 className="font-heading font-semibold text-lg text-ink mb-6">
              Оставить заявку
            </h3>
            <LeadForm source={source} />
          </div>
        </div>
      </div>
    </section>
  );
}
