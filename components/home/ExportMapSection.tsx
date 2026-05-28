"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin } from "lucide-react";

const markets = [
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar"], flag: "🇦🇪" },
  { region: "North America", countries: ["United States", "Canada"], flag: "🇺🇸" },
  { region: "Europe", countries: ["UK", "Germany", "Netherlands", "France"], flag: "🇬🇧" },
  { region: "Africa", countries: ["Nigeria", "South Africa", "Kenya", "Egypt"], flag: "🌍" },
  { region: "Southeast Asia", countries: ["Malaysia", "Singapore", "Indonesia", "Vietnam"], flag: "🌏" },
  { region: "South Asia", countries: ["Bangladesh", "Sri Lanka", "Nepal"], flag: "🇧🇩" },
];

const pins = [
  { label: "UAE / Saudi", x: "62%", y: "45%" },
  { label: "USA", x: "17%", y: "38%" },
  { label: "UK / Europe", x: "48%", y: "28%" },
  { label: "Africa", x: "50%", y: "55%" },
  { label: "SE Asia", x: "76%", y: "52%" },
  { label: "India", x: "68%", y: "46%" },
];

export default function ExportMapSection() {
  return (
    <section className="py-16 sm:py-24 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Global Reach"
          title="Our Export"
          highlight="Markets"
          subtitle="EXIMOBILE delivers to buyers across 6 major global regions, building lasting trade partnerships worldwide."
          center
          light
        />

        {/* World map visual */}
        <div className="relative mb-10 sm:mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
            alt="World export map"
            className="w-full h-44 sm:h-60 md:h-72 object-cover opacity-20"
          />

          {/* Centred headline */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="text-white/80 font-display text-center text-lg sm:text-2xl leading-tight">
              Exporting to{" "}
              <span className="text-gold font-bold text-2xl sm:text-4xl">30+</span>
              <br className="sm:hidden" />
              {" "}Countries Worldwide
            </p>
          </div>

          {/* Market pins — hidden on xs, visible sm+ */}
          {pins.map((pin) => (
            <div
              key={pin.label}
              className="absolute hidden sm:flex flex-col items-center"
              style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gold rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gold rounded-full relative" />
              <span className="text-white text-[9px] sm:text-[10px] font-semibold mt-1 whitespace-nowrap bg-navy/80 px-1.5 sm:px-2 py-0.5 rounded">
                {pin.label}
              </span>
            </div>
          ))}
        </div>

        {/* Market cards — 2-col on mobile, 2-col on sm, 3-col on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {markets.map((market, i) => (
            <motion.div
              key={market.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">{market.flag}</span>
                <h3 className="font-display font-bold text-white text-sm sm:text-lg leading-tight">
                  {market.region}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {market.countries.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-1 text-white/60 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/5 rounded-full"
                  >
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold shrink-0" />
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
