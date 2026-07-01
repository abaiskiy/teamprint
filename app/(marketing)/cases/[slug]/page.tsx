import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Package, Tag } from "lucide-react";
import { getAllCaseSlugs, getCaseFull, getAllCases } from "@/lib/cases";
import { CTASection } from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseFull(slug);
  if (!c) return {};
  return {
    title: `${c.title} — кейс TeamPrint`,
    description: c.summary,
    alternates: { canonical: `https://teamprint.kz/cases/${slug}` },
    openGraph: {
      title: c.title,
      description: c.summary,
      url: `https://teamprint.kz/cases/${slug}`,
      type: "article",
      publishedTime: c.publishedAt,
    },
  };
}

function renderMDX(content: string) {
  return content
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("## "))
        return (
          <h2 key={i} className="font-heading font-bold text-2xl text-ink mt-8 mb-3">
            {line.slice(3)}
          </h2>
        );
      if (line.startsWith("### "))
        return (
          <h3 key={i} className="font-heading font-semibold text-lg text-ink mt-6 mb-2">
            {line.slice(4)}
          </h3>
        );
      if (line.startsWith("> ")) {
        const text = line.slice(2);
        if (text.startsWith("— ")) {
          return (
            <footer key={i} className="text-sm text-muted-text mt-1 pl-4 border-l-2 border-transparent">
              {text}
            </footer>
          );
        }
        return (
          <blockquote key={i} className="border-l-4 border-brand pl-4 my-4 italic text-muted-text">
            {text.replace(/^"/, "\u201c").replace(/"$/, "\u201d")}
          </blockquote>
        );
      }
      if (line.startsWith("- "))
        return (
          <li key={i} className="text-sm text-muted-text flex gap-2 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
            {line.slice(2)}
          </li>
        );
      if (line === "") return <br key={i} />;
      if (line.startsWith("**") && line.endsWith("**"))
        return (
          <p key={i} className="font-semibold text-ink text-sm mt-3">
            {line.slice(2, -2)}
          </p>
        );
      return (
        <p key={i} className="text-sm text-muted-text leading-relaxed">
          {line}
        </p>
      );
    });
}

export default async function CaseSlugPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseFull(slug);
  if (!c) notFound();

  const allCases = getAllCases().filter((other) => other.slug !== slug).slice(0, 2);

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.summary,
    datePublished: c.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "TeamPrint",
      url: "https://teamprint.kz",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-canvas border-b border-line">
        <div className="container-site py-3 flex items-center gap-2 text-sm text-muted-text">
          <Link href="/" className="hover:text-ink transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/cases" className="hover:text-ink transition-colors">Кейсы</Link>
          <span>/</span>
          <span className="text-ink truncate">{c.client}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <Link
            href="/cases"
            className="inline-flex items-center gap-1.5 text-sm text-muted-text hover:text-ink transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Все кейсы
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block text-xs font-medium bg-brand/10 text-brand rounded-full px-3 py-1 mb-4">
                {c.category}
              </span>
              <h1 className="font-heading text-ink">{c.title}</h1>
              <p className="mt-4 text-muted-text text-lg leading-relaxed">{c.summary}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-muted-text">
                  <Package size={14} />
                  <span className="font-semibold text-ink">{c.quantity} шт.</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-text">
                  <Calendar size={14} />
                  {c.duration}
                </div>
                <div className="flex items-center gap-1.5 text-muted-text">
                  <Tag size={14} />
                  {c.tags.join(", ")}
                </div>
              </div>
            </div>

            {/* Cover */}
            <div className="aspect-[16/10] bg-line rounded-2xl overflow-hidden relative">
              {c.cover ? (
                <Image
                  src={c.cover}
                  alt={c.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-muted-text/30 text-sm">Фото проекта</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <div className="prose-custom space-y-1">
              {renderMDX(c.content)}
            </div>
          </div>
        </div>
      </section>

      {/* Related cases */}
      {allCases.length > 0 && (
        <section className="bg-canvas section-padding">
          <div className="container-site">
            <h2 className="font-heading text-ink mb-8">Другие проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {allCases.map((related) => (
                <Link
                  key={related.slug}
                  href={`/cases/${related.slug}`}
                  className="group flex gap-4 border border-line rounded-xl p-5 bg-white hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="w-24 h-16 shrink-0 rounded-lg bg-line overflow-hidden relative">
                    {related.cover ? (
                      <Image
                        src={related.cover}
                        alt={related.client}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm group-hover:text-brand transition-colors">
                      {related.client}
                    </p>
                    <p className="text-xs text-muted-text mt-1">{related.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection source={`case-${slug}`} />
    </>
  );
}
