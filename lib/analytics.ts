declare global {
  interface Window {
    ym?: (id: number, action: string, goal: string) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const YM_ID = 106455175;
const GA_ID = "G-BP1SRGNBKY";

type Goal = "lead_submitted" | "whatsapp_click" | "phone_click";

export function reachGoal(goal: Goal) {
  if (typeof window === "undefined") return;

  // Яндекс Метрика
  if (typeof window.ym === "function") {
    window.ym(YM_ID, "reachGoal", goal);
  }

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    const eventName =
      goal === "lead_submitted"
        ? "generate_lead"
        : goal === "whatsapp_click"
        ? "whatsapp_click"
        : "phone_click";

    window.gtag("event", eventName, {
      send_to: GA_ID,
    });
  }
}
