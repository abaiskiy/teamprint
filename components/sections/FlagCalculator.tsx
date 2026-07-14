"use client";

import { useState } from "react";
import { Minus, Plus, ArrowRight } from "lucide-react";
import {
  calculatePrice,
  FLAG_SIZES,
  FABRIC_OPTIONS,
  type FlagType,
  type FlagSize,
  type FabricType,
  type Urgency,
} from "@/lib/pricing";

export function FlagCalculator() {
  const [flagType, setFlagType] = useState<FlagType>("single");
  const [size, setSize] = useState<FlagSize>("15x25");
  const [customW, setCustomW] = useState(100);
  const [customH, setCustomH] = useState(150);
  const [fabric, setFabric] = useState<FabricType>("politex");
  const [quantity, setQuantity] = useState(10);
  const [urgency, setUrgency] = useState<Urgency>("standard");

  const availableFabrics = flagType === "double"
    ? FABRIC_OPTIONS.filter((f) => f.value !== "politex")
    : FABRIC_OPTIONS;

  const handleFlagTypeChange = (t: FlagType) => {
    setFlagType(t);
    if (t === "double" && fabric === "politex") {
      setFabric("gabardin");
    }
  };

  const result = calculatePrice({
    type: flagType,
    size,
    customWidth: customW,
    customHeight: customH,
    fabric,
    quantity,
    edge: "hem",
    urgency,
  });

  const orderData = {
    type: flagType,
    size,
    customWidth: size === "custom" ? customW : undefined,
    customHeight: size === "custom" ? customH : undefined,
    fabric,
    quantity,
    urgency,
    unitPrice: result.unit,
    total: result.total,
  };

  const handleOrder = () => {
    const msg = encodeURIComponent(
      `Заявка из калькулятора:\nТип: ${flagType === "single" ? "Односторонний" : "Двухсторонний"}\nРазмер: ${size}\nТкань: ${fabric}\nКоличество: ${quantity} шт.\nСрочность: ${urgency}\nИтого: ${result.total.toLocaleString("ru")} ₸`
    );
    window.open(`https://wa.me/77071451388?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden">
      <div className="p-6 lg:p-8">
        <h2 className="font-heading font-bold text-xl text-ink mb-6">
          Калькулятор стоимости флагов
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: params */}
          <div className="flex flex-col gap-6">
            {/* Type */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-3">Тип флага</label>
              <div className="grid grid-cols-2 gap-2">
                {(["single", "double"] as FlagType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => handleFlagTypeChange(t)}
                    className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                      flagType === t
                        ? "border-brand bg-brand/5 text-brand"
                        : "border-line text-muted-text hover:border-ink/30"
                    }`}
                  >
                    {t === "single" ? "Односторонний" : "Двухсторонний"}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-3">Размер</label>
              <div className="flex flex-col gap-2">
                {FLAG_SIZES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSize(s.value)}
                    className={`text-left py-2.5 px-4 rounded-lg border text-sm transition-colors ${
                      size === s.value
                        ? "border-brand bg-brand/5 text-brand font-medium"
                        : "border-line text-muted-text hover:border-ink/30"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {size === "custom" && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="text-xs text-muted-text mb-1 block">Ширина (см)</label>
                    <input
                      type="number"
                      value={customW}
                      onChange={(e) => setCustomW(Number(e.target.value))}
                      min={10}
                      max={500}
                      className="w-full border border-line rounded-lg px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-text mb-1 block">Высота (см)</label>
                    <input
                      type="number"
                      value={customH}
                      onChange={(e) => setCustomH(Number(e.target.value))}
                      min={10}
                      max={500}
                      className="w-full border border-line rounded-lg px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Fabric */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-3">Ткань</label>
              <div className="flex flex-col gap-2">
                {availableFabrics.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFabric(f.value)}
                    className={`flex items-center justify-between text-left py-2.5 px-4 rounded-lg border text-sm transition-colors ${
                      fabric === f.value
                        ? "border-brand bg-brand/5"
                        : "border-line hover:border-ink/30"
                    }`}
                  >
                    <span className={`font-medium ${fabric === f.value ? "text-brand" : "text-ink"}`}>
                      {f.label}
                    </span>
                    <span className="text-xs text-muted-text">{f.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: quantity, edge, urgency */}
          <div className="flex flex-col gap-6">
            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-3">Количество (шт.)</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-ink hover:border-ink/40 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  min={1}
                  className="w-20 border border-line rounded-lg px-3 py-2 text-center text-base font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-ink hover:border-ink/40 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <p className="text-xs text-muted-text mt-2">
                Минимальный заказ — 3 000 ₸
              </p>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-3">Срочность</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setUrgency("standard")}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    urgency === "standard"
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-line text-muted-text hover:border-ink/30"
                  }`}
                >
                  Стандарт
                </button>
                <button
                  onClick={() => setUrgency("urgent")}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    urgency === "urgent"
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-line text-muted-text hover:border-ink/30"
                  }`}
                >
                  Срочно +30%
                </button>
              </div>
            </div>

            {/* Result */}
            <div className="mt-auto pt-6 border-t border-line">
              <div className="flex items-end justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-text mb-1">Цена за штуку</p>
                  <p className="font-heading font-bold text-2xl text-ink tabular-nums">
                    {result.unit.toLocaleString("ru")} ₸
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-text mb-1">Итого за {quantity} шт.</p>
                  <p className="font-heading font-bold text-3xl text-brand tabular-nums">
                    {result.total.toLocaleString("ru")} ₸
                  </p>
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-4 rounded-xl transition-colors text-base"
              >
                Заказать по этой цене
                <ArrowRight size={18} />
              </button>
              <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <span className="text-amber-500 text-base mt-0.5">⚠</span>
                <p className="text-sm text-amber-800 font-medium leading-snug">
                  Точную стоимость уточнит менеджер после получения макета
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
