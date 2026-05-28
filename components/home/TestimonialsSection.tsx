"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Client Testimonials"
          title="What Our"
          highlight="Partners Say"
          subtitle="Building long-term global business relationships through quality, trust, and professional service."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <p className="text-charcoal/70 text-sm leading-relaxed mb-8">
                &ldquo;{t.message}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                  <p className="text-charcoal/50 text-xs">{t.company}</p>
                  <p className="text-charcoal/50 text-xs">
                    {t.flag} {t.country}
                  </p>
                </div>
              </div>
              {/* Gold bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold to-transparent rounded" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
