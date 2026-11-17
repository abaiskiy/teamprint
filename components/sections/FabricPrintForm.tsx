"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/contacts";
import { reachGoal } from "@/lib/analytics";
import { fabrics } from "@/content/fabrics";

const WA_PRINT_HREF = `https://wa.me/77071451388?text=${encodeURIComponent(
  "Здравствуйте! Хочу рассчитать стоимость сублимационной печати на ткани"
)}`;

export function FabricPrintForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const fabric = String(data.get("fabric") || "").trim();
    const meters = String(data.get("meters") || "").trim();
    const width = String(data.get("width") || "").trim();
    const comment = String(data.get("comment") || "").trim();

    const nextErrors: { name?: string; phone?: string } = {};
    if (name.length < 2) nextErrors.name = "Укажите имя";
    if (phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Укажите корректный номер";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const details = [
      comment || null,
      fabric && fabric !== "Не знаю" ? `Ткань: ${fabric}` : fabric === "Не знаю" ? "Ткань: не знаю, нужна рекомендация" : null,
      meters ? `Метраж: ${meters} м` : null,
      width ? `Ширина: ${width}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message: details || undefined,
          source: "pechat-na-tkani",
          calculatorData: {
            lead_type: "sublimation_print",
            fabric: fabric || null,
            meters: meters || null,
            width: width || null,
          },
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reachGoal("lead_submitted", {
        form_name: "pechat-na-tkani",
        lead_type: "sublimation_print",
      });
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-8">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-green-600" />
        </div>
        <div>
          <p className="font-heading font-semibold text-ink text-lg">Заявка принята</p>
          <p className="text-sm text-muted-text mt-1">
            Подготовим расчёт и свяжемся в рабочее время.
          </p>
        </div>
        <a
          href={WA_PRINT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          data-lead-type="sublimation_print"
          data-form-name="pechat-na-tkani"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b95a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          <MessageCircle size={16} />
          Отправить макет в WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="print-name" className="block text-sm font-medium text-ink mb-1.5">
            Имя <span className="text-brand">*</span>
          </label>
          <Input
            id="print-name"
            name="name"
            placeholder="Ахметов Ахмет"
            className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="print-phone" className="block text-sm font-medium text-ink mb-1.5">
            Телефон <span className="text-brand">*</span>
          </label>
          <Input
            id="print-phone"
            name="phone"
            type="tel"
            placeholder="+7 777 123-45-67"
            className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="print-fabric" className="block text-sm font-medium text-ink mb-1.5">
            Тип ткани <span className="text-muted-text font-normal">(необязательно)</span>
          </label>
          <select
            id="print-fabric"
            name="fabric"
            defaultValue=""
            className="w-full h-14 rounded-lg border border-line px-4 text-base text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
          >
            <option value="">Не знаю</option>
            {fabrics.map((f) => (
              <option key={f.id} value={f.name}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="print-meters" className="block text-sm font-medium text-ink mb-1.5">
            Метраж, м <span className="text-muted-text font-normal">(необязательно)</span>
          </label>
          <Input
            id="print-meters"
            name="meters"
            type="number"
            min="1"
            step="0.1"
            inputMode="decimal"
            placeholder="50"
            className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
          />
        </div>
        <div>
          <label htmlFor="print-width" className="block text-sm font-medium text-ink mb-1.5">
            Ширина <span className="text-muted-text font-normal">(необязательно)</span>
          </label>
          <Input
            id="print-width"
            name="width"
            placeholder="150 см"
            className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
          />
        </div>
      </div>

      <div>
        <label htmlFor="print-comment" className="block text-sm font-medium text-ink mb-1.5">
          Комментарий <span className="text-muted-text font-normal">(необязательно)</span>
        </label>
        <textarea
          id="print-comment"
          name="comment"
          rows={3}
          placeholder="Для чего ткань, тираж, нужен ли пошив"
          className="w-full rounded-lg border border-line px-4 py-3 text-base text-ink placeholder:text-muted-text/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Не удалось отправить заявку. Позвоните:{" "}
          <a href={PHONE_HREF} className="underline" data-lead-type="sublimation_print">
            {PHONE_NUMBER}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Отправляем...
          </>
        ) : (
          "Получить расчёт стоимости"
        )}
      </button>

      <p className="text-xs text-muted-text text-center">
        Макет можно отправить в WhatsApp после заявки. Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
