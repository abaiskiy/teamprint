"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { GOOGLE_MAPS_URL, GISMAP_URL } from "@/lib/contacts";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star
          key={j}
          size={13}
          fill={j < rating ? "#E64A19" : "transparent"}
          stroke={j < rating ? "#E64A19" : "rgba(255,255,255,0.2)"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-ink text-white section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
              Отзывы
            </p>
            <h2 className="font-heading text-white">Что говорят клиенты</h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-heading font-bold text-3xl text-white">4.9</p>
              <StarRating rating={5} />
              <p className="text-xs text-white/40 mt-1">{testimonials.length * 28}+ отзывов</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white border border-white/15 rounded-lg px-3 py-1.5 transition-colors"
              >
                Google Maps <ExternalLink size={10} />
              </a>
              <a
                href={GISMAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white border border-white/15 rounded-lg px-3 py-1.5 transition-colors"
              >
                2GIS <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-white/5 border border-white/8 rounded-2xl p-6 flex flex-col overflow-hidden group hover:bg-white/8 transition-colors"
            >
              {/* Decorative quote */}
              <span className="absolute top-4 right-5 font-heading text-7xl text-white/5 select-none leading-none pointer-events-none">
                "
              </span>

              {/* Stars */}
              <StarRating rating={t.rating} />

              <blockquote className="mt-4 text-sm text-white/75 leading-relaxed flex-1">
                {t.text}
              </blockquote>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-brand font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                  <p className="text-xs text-white/40 truncate">
                    {t.position}
                  </p>
                </div>
                <span className="ml-auto shrink-0 text-xs font-medium text-brand/80 bg-brand/10 border border-brand/20 rounded-full px-2.5 py-1">
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
