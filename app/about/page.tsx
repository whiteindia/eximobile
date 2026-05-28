import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCTA from "@/components/home/ContactCTA";
import { ShieldCheck, Globe, TrendingUp, Award, Users, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EXIMOBILE – India's trusted export company with offices in Hyderabad and Seattle, serving buyers across 6+ global markets.",
};

const values = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every product meets strict international quality and safety standards before export." },
  { icon: Globe, title: "Global Expertise", desc: "Deep understanding of international trade regulations, documentation, and logistics." },
  { icon: TrendingUp, title: "Competitive Pricing", desc: "Direct manufacturer partnerships ensure the best value for every order." },
  { icon: Award, title: "Certified Excellence", desc: "We work with ISO, WHO-GMP, FSSAI, and APEDA certified suppliers." },
  { icon: Users, title: "Customer Focus", desc: "Dedicated trade executives for every client ensuring smooth end-to-end service." },
  { icon: Package, title: "Reliable Delivery", desc: "Proven logistics network for timely shipments to 30+ countries worldwide." },
];

const timeline = [
  { year: "2018", event: "EXIMOBILE founded in Hyderabad, Telangana, India" },
  { year: "2019", event: "First export consignment of agricultural products to UAE" },
  { year: "2020", event: "Expanded to industrial products – Steel and Cement" },
  { year: "2021", event: "Opened US presence in Seattle, Washington" },
  { year: "2022", event: "Expanded to African and Southeast Asian markets" },
  { year: "2023", event: "Launched pharma product exports to regulated markets" },
  { year: "2024", event: "Serving 30+ countries with 11 product categories" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=70')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            About EXIMOBILE
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 max-w-2xl">
            India's Trusted<br />
            <span className="text-gold">Export Partner</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-xl">
            Connecting Indian manufacturers with global buyers since 2018, delivering quality products to 30+ countries across 6 continents.
          </p>
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Who We Are"
                title="About"
                highlight="EXIMOBILE"
                subtitle="EXIMOBILE is an India-based export company specializing in quality agricultural and industrial products for global markets with reliable and professional trade services."
              />
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Founded in Hyderabad, India, EXIMOBILE bridges the gap between India's world-class
                  manufacturing capabilities and international buyers seeking quality products at
                  competitive prices.
                </p>
                <p>
                  With offices in both Hyderabad (India) and Seattle (USA), we provide our clients
                  with locally-rooted expertise and international business perspective, ensuring
                  smooth trade operations across time zones and regulatory environments.
                </p>
                <p>
                  Our team of experienced trade professionals handles everything from product
                  sourcing and quality inspection to documentation, shipping, and after-sales support.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-offwhite rounded-xl p-4 text-center">
                  <p className="font-display text-3xl font-bold text-navy">🇮🇳</p>
                  <p className="font-semibold text-charcoal text-sm mt-1">Hyderabad, India</p>
                  <p className="text-charcoal/50 text-xs">Head Office</p>
                </div>
                <div className="bg-offwhite rounded-xl p-4 text-center">
                  <p className="font-display text-3xl font-bold text-navy">🇺🇸</p>
                  <p className="font-semibold text-charcoal text-sm mt-1">Seattle, USA</p>
                  <p className="text-charcoal/50 text-xs">International Office</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Vision */}
              <div className="bg-navy rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-navy" />
                  </div>
                  <h3 className="font-display font-bold text-xl">Our Vision</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  To become a trusted global export brand delivering quality products
                  worldwide, recognized for integrity, reliability, and excellence in
                  international trade.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-offwhite rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-royal rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal">Our Mission</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Deliver quality products at competitive prices",
                    "Ensure timely shipment and customer satisfaction",
                    "Build long-term global business relationships",
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-2 text-charcoal/70 text-sm">
                      <span className="text-gold mt-0.5">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Values"
            title="What Drives"
            highlight="Us"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-royal" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-3">{v.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Our Journey" title="Company" highlight="Timeline" center />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex items-center gap-8 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-offwhite rounded-xl p-5 inline-block max-w-xs">
                      <p className="font-bold text-gold text-sm">{item.year}</p>
                      <p className="text-charcoal/70 text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-gold rounded-full border-2 border-white shadow shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
