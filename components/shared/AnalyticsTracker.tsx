"use client";

import { useEffect } from "react";
import { reachGoal } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";

      const params: Record<string, string> = {};
      const leadType = target.getAttribute("data-lead-type");
      const formName = target.getAttribute("data-form-name");
      if (leadType) params.lead_type = leadType;
      if (formName) params.form_name = formName;

      if (href.startsWith("tel:")) {
        reachGoal("phone_click", params);
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        reachGoal("whatsapp_click", params);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
