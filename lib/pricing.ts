export type FlagType = "single" | "double";
export type FlagSize =
  | "15x25"
  | "70x150"
  | "100x150"
  | "100x200"
  | "150x200"
  | "150x300"
  | "custom";
export type FabricType = "politex" | "gabardin" | "tafta";
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
  politex: 6000,
  gabardin: 6000,
  tafta: 6000,
};

const SIZE_AREA: Record<Exclude<FlagSize, "custom">, number> = {
  "15x25": 0.15 * 0.25,
  "70x150": 0.7 * 1.5,
  "100x150": 1.0 * 1.5,
  "100x200": 1.0 * 2.0,
  "150x200": 1.5 * 2.0,
  "150x300": 1.5 * 3.0,
};

const DOUBLE_SIDE_MULTIPLIER = 2.0;
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

const DESKTOP_FLAG_PRICES: Record<FlagType, number> = {
  single: 1000,
  double: 1900,
};

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
  if (config.size === "15x25") {
    const unitPrice = DESKTOP_FLAG_PRICES[config.type];
    const urgencyMultiplier = URGENCY_MULTIPLIER[config.urgency];
    const finalUnit = Math.ceil((unitPrice * urgencyMultiplier) / 10) * 10;
    const total = Math.max(finalUnit * config.quantity, MIN_ORDER);
    return {
      unit: finalUnit,
      total,
      breakdown: {
        basePerUnit: unitPrice,
        edgePerUnit: 0,
        subtotalUnit: unitPrice,
        urgencyMultiplier,
      },
    };
  }

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
  { value: "70x150", label: "70×150 см" },
  { value: "100x150", label: "100×150 см (стандарт)" },
  { value: "100x200", label: "100×200 см" },
  { value: "150x200", label: "150×200 см" },
  { value: "150x300", label: "150×300 см (очень большой)" },
  { value: "custom", label: "Свой размер" },
];

export const FABRIC_OPTIONS: { value: FabricType; label: string; description: string }[] = [
  { value: "politex", label: "Политекс", description: "Лёгкий, хорошо развевается" },
  { value: "gabardin", label: "Габардин", description: "Прочный, для улицы" },
  { value: "tafta", label: "Тафта", description: "Блестящий, для интерьера" },
];

export const EDGE_OPTIONS: { value: EdgeType; label: string }[] = [
  { value: "hem", label: "Подгиб" },
  { value: "grommets", label: "Люверсы" },
  { value: "pocket", label: "Карман для древка" },
];
