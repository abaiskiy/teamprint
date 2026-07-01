import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://teamprint.kz";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = ogImage || `${BASE_URL}/og-default.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "TeamPrint",
      locale: "ru_RU",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "TeamPrint",
  description:
    "Сублимационная печать и пошив на ткани в Алматы. Флаги, текстиль, спортивная форма.",
  url: BASE_URL,
  telephone: "+77071451388",
  email: "info@teamprint.kz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Чайкиной, 3А",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  foundingDate: "2022",
  sameAs: [
    "https://wa.me/77071451388",
    "https://t.me/teamprint_kz",
  ],
};
