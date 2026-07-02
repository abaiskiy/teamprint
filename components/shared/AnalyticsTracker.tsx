"use client";

import { useEffect } from "react";
import { reachGoal } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        reachGoal("phone_click");
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        reachGoal("whatsapp_click");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
