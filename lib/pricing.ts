export type FlagType = "single" | "double";
export type FlagSize =
  | "15x25"
  | "60x90"
  | "100x150"
  | "100x200"
  | "custom";
export type FabricType = "politex" | "oxford300" | "atlas";
export type EdgeType = "hem" | "grommets" | "pocket";
export type Urgency = "standard" | "urgent";

export interface FlagConfig {
  type: FlagType;
  size: FlagSize;
  customWidth?: number;
  customHeight?: number;
  fabric: FabricType;
  quantity: number;
  edge: EdgeType;
  urgency: Urgency;
}

const BASE_PRICES: Record<FabricType, number> = {
  politex: 1800,
  oxford300: 2200,
  atlas: 2600,
};

const SIZE_AREA: Record<Exclude<FlagSize, "custom">, number> = {
  "15x25": 0.15 * 0.25,
  "60x90": 0.6 * 0.9,
  "100x150": 1.0 * 1.5,
  "100x200": 1.0 * 2.0,
};

const DOUBLE_SIDE_MULTIPLIER = 1.7;
const EDGE_PRICES: Record<EdgeType, number> = {
  hem: 0,
  grommets: 150,
  pocket: 200,
};
const URGENCY_MULTIPLIER: Record<Urgency, number> = {
  standard: 1.0,
  urgent: 1.3,
};

const MIN_ORDER = 3000;

export function calculatePrice(config: FlagConfig): {
  unit: number;
  total: number;
  breakdown: {
    basePerUnit: number;
    edgePerUnit: number;
    subtotalUnit: number;
    urgencyMultiplier: number;
  };
} {
  const area =
    config.size === "custom"
      ? ((config.customWidth ?? 100) / 100) * ((config.customHeight ?? 150) / 100)
      : SIZE_AREA[config.size];

  const pricePerM2 = BASE_PRICES[config.fabric];
  let basePerUnit = area * pricePerM2;

  if (config.type === "double") {
    basePerUnit *= DOUBLE_SIDE_MULTIPLIER;
  }

  const edgePerUnit = EDGE_PRICES[config.edge];
  const subtotalUnit = basePerUnit + edgePerUnit;
  const urgencyMultiplier = URGENCY_MULTIPLIER[config.urgency];
  const unitPrice = Math.ceil((subtotalUnit * urgencyMultiplier) / 10) * 10;
  const total = Math.max(unitPrice * config.quantity, MIN_ORDER);

  return {
    unit: unitPrice,
    total,
    breakdown: {
      basePerUnit,
      edgePerUnit,
      subtotalUnit,
      urgencyMultiplier,
    },
  };
}

export const FLAG_SIZES: { value: FlagSize; label: string }[] = [
  { value: "15x25", label: "15×25 см (настольный)" },
  { value: "60x90", label: "60×90 см (стандартный)" },
  { value: "100x150", label: "100×150 см (большой)" },
  { value: "100x200", label: "100×200 см (очень большой)" },
  { value: "custom", label: "Свой размер" },
];

export const FABRIC_OPTIONS: { value: FabricType; label: string; description: string }[] = [
  { value: "politex", label: "Политекс", description: "Лёгкий, хорошо развевается" },
  { value: "oxford300", label: "Оксфорд 300D", description: "Прочный, для улицы" },
  { value: "atlas", label: "Атлас", description: "Блестящий, для интерьера" },
];

export const EDGE_OPTIONS: { value: EdgeType; label: string }[] = [
  { value: "hem", label: "Подгиб" },
  { value: "grommets", label: "Люверсы" },
  { value: "pocket", label: "Карман для древка" },
];
