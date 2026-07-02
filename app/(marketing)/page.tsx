import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FabricsPreviewSection } from "@/components/sections/FabricsPreviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "TeamPrint — флаги и брендированный текстиль в Алматы" },
  description:
    "Флаги на заказ, пресс-воллы, виндеры, скатерти и декоративный текстиль с сублимационной печатью. Собственный цех в Алматы. Срок от 1 дня. 1200+ клиентов.",
  alternates: { canonical: "https://teamprint.kz" },
  openGraph: {
    title: "TeamPrint — флаги и брендированный текстиль в Алматы",
    description:
      "Флаги, пресс-воллы, виндеры и текстиль для мероприятий. Собственный цех. Сублимационная печать. Гарантия 10 лет.",
    url: "https://teamprint.kz",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <SegmentsSection />
      <CasesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FabricsPreviewSection />
      <FAQSection />
      <CTASection source="home-cta" />
    </>
  );
}
