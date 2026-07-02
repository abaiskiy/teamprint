"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { WA_HREF, PHONE_NUMBER } from "@/lib/contacts";
import { reachGoal } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(10, "Укажите корректный номер"),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  source?: string;
  calculatorData?: Record<string, unknown>;
  variant?: "default" | "compact";
}

export function LeadForm({ source = "unknown", calculatorData, variant = "default" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source, calculatorData }),
      });
      if (res.ok) {
        setStatus("success");
        reachGoal("lead_submitted");
        reset();
      } else {
        setStatus("error");
      }
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
          <p className="font-heading font-semibold text-ink text-lg">Заявка принята!</p>
          <p className="text-sm text-muted-text mt-1">
            Свяжемся с вами в течение 15 минут в рабочее время.
          </p>
        </div>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b95a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          <MessageCircle size={16} />
          Написать в WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Имя <span className="text-brand">*</span>
          </label>
          <Input
            {...register("name")}
            placeholder="Ахметов Ахмет"
            className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Телефон <span className="text-brand">*</span>
          </label>
          <Input
            {...register("phone")}
            placeholder="+7 777 123-45-67"
            type="tel"
            className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {variant === "default" && (
        <>
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Компания <span className="text-muted-text font-normal">(необязательно)</span>
            </label>
            <Input
              {...register("company")}
              placeholder="ТОО Ваша Компания"
              className="h-14 text-base border-line focus-visible:ring-brand/30 focus-visible:border-brand"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">
              Опишите задачу <span className="text-muted-text font-normal">(необязательно)</span>
            </label>
            <textarea
              {...register("message")}
              rows={3}
              placeholder="Нужны флаги для корпоратива, 50 штук, срочно..."
              className="w-full rounded-lg border border-line px-4 py-3 text-base text-ink placeholder:text-muted-text/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
            />
          </div>
        </>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Ошибка отправки. Позвоните нам: {PHONE_NUMBER}
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
          "Получить расчёт"
        )}
      </button>

      <p className="text-xs text-muted-text text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        Ответим за 15 минут в рабочее время.
      </p>
    </form>
  );
}
