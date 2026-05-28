"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { ShieldCheck, Globe, TrendingUp } from "lucide-react";

function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 11, suffix: "+", label: "Products Exported" },
  { value: 6, suffix: "+", label: "Export Markets" },
  { value: 2, suffix: "", label: "Global Offices" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc: "Every product is inspected and certified before shipment.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving buyers across UAE, USA, Europe, Africa, and Southeast Asia.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    desc: "Direct manufacturer relationships ensure the best prices.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              badge="About EXIMOBILE"
              title="Your Trusted"
              highlight="Export Partner"
              subtitle="EXIMOBILE is an India-based export company specializing in quality agricultural and industrial products for global markets with reliable and professional trade services."
            />

            <div className="space-y-5 mb-10">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-lg flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">{v.title}</h4>
                    <p className="text-charcoal/60 text-sm mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-navy/5 rounded-lg text-sm font-medium text-navy">
                🇮🇳 Hyderabad, India
              </div>
              <div className="px-4 py-2 bg-navy/5 rounded-lg text-sm font-medium text-navy">
                🇺🇸 Seattle, USA
              </div>
            </div>
          </motion.div>

          {/* Right – stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-offwhite rounded-2xl p-8 text-center"
                >
                  <p className="font-display text-5xl font-bold text-navy">
                    <Counter to={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-charcoal/60 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Vision/Mission */}
            <div className="mt-6 bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-4">
                Our <span className="text-gold">Vision</span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                To become a trusted global export brand delivering quality
                products worldwide, building bridges between Indian manufacturers
                and international buyers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
