"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ShieldCheck,
  Globe,
  DollarSign,
  Network,
  Clock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "All products undergo rigorous quality checks before shipment. We comply with international standards including ISO, WHO-GMP, and FSSAI.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    desc: "End-to-end logistics support across UAE, USA, Saudi Arabia, Europe, Africa, and Southeast Asia with reliable shipping partners.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Direct manufacturer relationships allow us to offer the most competitive prices without compromising on quality.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Network,
    title: "Trusted Trade Network",
    desc: "Built over years of international trade, our network spans manufacturers, logistics providers, and customs agents worldwide.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We understand the value of time in trade. Our streamlined processes ensure shipments depart on schedule, every time.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    desc: "Dedicated trade executives assist you from inquiry to delivery, providing full documentation and regulatory support.",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why EXIMOBILE"
          title="The EXIMOBILE"
          highlight="Advantage"
          subtitle="We combine India's manufacturing excellence with global trade expertise to deliver unmatched value."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-offwhite hover:shadow-lg transition-shadow group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color} group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
