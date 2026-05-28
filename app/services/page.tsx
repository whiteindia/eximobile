import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCTA from "@/components/home/ContactCTA";
import {
  Package, Globe, Search, Truck, ShoppingCart, ClipboardCheck, Ship, FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EXIMOBILE offers end-to-end import-export services including global sourcing, logistics support, quality inspection, international shipping, and documentation support.",
};

const services = [
  {
    icon: Package,
    title: "Export Services",
    desc: "Full-service export solutions from India. We manage the entire export process from sourcing to delivery, including documentation, logistics, and compliance.",
    features: ["Product sourcing & procurement", "Export documentation", "Customs clearance", "Quality inspection"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Globe,
    title: "Import Services",
    desc: "Facilitating imports into India for businesses looking to source international products. Complete import management from procurement to delivery.",
    features: ["Import licensing", "Customs clearance", "Local delivery", "Compliance management"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Search,
    title: "Global Sourcing",
    desc: "Leverage our extensive supplier network to source any product at the best quality and price from India's leading manufacturers.",
    features: ["Supplier identification", "Price negotiation", "Factory audits", "Sample management"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Truck,
    title: "Logistics Support",
    desc: "End-to-end logistics management including freight booking, cargo tracking, and last-mile delivery coordination.",
    features: ["FCL & LCL shipping", "Air freight options", "Cargo insurance", "Real-time tracking"],
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: ShoppingCart,
    title: "Product Procurement",
    desc: "Bulk procurement services for businesses wanting to leverage India's manufacturing capabilities at competitive prices.",
    features: ["Bulk purchasing", "Price optimization", "Multi-vendor management", "Consolidated shipments"],
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspection and quality verification to ensure every product meets agreed specifications before loading.",
    features: ["Pre-shipment inspection", "Lab testing", "Certification support", "Quality reports"],
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Ship,
    title: "International Shipping",
    desc: "Reliable international shipping to UAE, USA, Saudi Arabia, Europe, Africa, and Southeast Asia via sea and air freight.",
    features: ["Sea freight (FCL/LCL)", "Air freight", "Multi-modal logistics", "Port-to-port & door-to-door"],
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    desc: "Complete trade documentation services to ensure smooth customs clearance in destination countries.",
    features: ["Certificate of origin", "Phytosanitary certificates", "Bill of lading", "Letter of credit handling"],
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            Trade <span className="text-gold">Services</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl">
            Comprehensive import-export solutions from sourcing to delivery, backed by years of international trade expertise.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="What We Offer"
            title="End-to-End"
            highlight="Trade Solutions"
            subtitle="From product sourcing to final delivery, we handle every step of your international trade journey."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-offwhite rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-charcoal/70 text-sm">
                      <span className="text-gold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="How It Works"
            title="Our Trade"
            highlight="Process"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", label: "Inquiry", desc: "Send us your product requirements and quantities." },
              { step: "02", label: "Quotation", desc: "Receive competitive pricing within 24-48 hours." },
              { step: "03", label: "Order", desc: "Confirm order and terms. We begin sourcing." },
              { step: "04", label: "Shipment", desc: "Quality checked goods loaded and shipped." },
              { step: "05", label: "Delivery", desc: "Track your shipment to final delivery." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-gold text-lg">{item.step}</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">{item.label}</h4>
                <p className="text-charcoal/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
