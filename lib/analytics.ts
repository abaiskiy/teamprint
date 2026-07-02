declare global {
  interface Window {
    ym?: (id: number, action: string, goal: string) => void;
  }
}

const COUNTER_ID = 106455175;

export function reachGoal(goal: "lead_submitted" | "whatsapp_click" | "phone_click") {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(COUNTER_ID, "reachGoal", goal);
  }
}
