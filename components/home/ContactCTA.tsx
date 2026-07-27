"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-royal relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Start a Conversation
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Import from
            <span className="text-gold"> India?</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're looking to source agricultural commodities or
            industrial products, our team is ready to provide competitive quotes
            and expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-400 transition-all hover:scale-105 shadow-lg"
            >
              Send an Inquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppLink
              message="Hello EXIMOBILE, I'd like to get a quote."
              page="home-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#22c35e] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </WhatsAppLink>
            <a
              href="mailto:trade@eximobile.com"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>

          {/* Contact details */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm">
            <span>📧 trade@eximobile.com</span>
            <span>📱 +91 9553337770</span>
            <span>🌐 www.eximobile.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
