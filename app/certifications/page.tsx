import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactCTA from "@/components/home/ContactCTA";
import { ShieldCheck, Award, CheckCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Certifications",
  description:
    "EXIMOBILE maintains the highest quality standards. All products are sourced from certified manufacturers and undergo pre-shipment inspection.",
};

const certifications = [
  { name: "APEDA", full: "Agricultural & Processed Food Products Export Development Authority", scope: "Agricultural Products", color: "bg-green-50 border-green-200" },
  { name: "FSSAI", full: "Food Safety and Standards Authority of India", scope: "Food Products", color: "bg-blue-50 border-blue-200" },
  { name: "WHO-GMP", full: "World Health Organization Good Manufacturing Practices", scope: "Pharmaceutical Products", color: "bg-purple-50 border-purple-200" },
  { name: "BIS", full: "Bureau of Indian Standards", scope: "Industrial Products (Steel, Cement)", color: "bg-orange-50 border-orange-200" },
  { name: "ISO 9001", full: "International Organization for Standardization", scope: "Quality Management System", color: "bg-red-50 border-red-200" },
  { name: "CDSCO", full: "Central Drugs Standard Control Organisation", scope: "Pharmaceutical Export Compliance", color: "bg-yellow-50 border-yellow-200" },
];

const standards = [
  { title: "Pre-Shipment Inspection", desc: "Every consignment undergoes thorough inspection before loading to verify quality, quantity, and packaging compliance." },
  { title: "Laboratory Testing", desc: "Products are tested at accredited laboratories for moisture, purity, pesticide residue, heavy metals, and other parameters." },
  { title: "Packaging Standards", desc: "All packaging meets international standards with proper marking, labeling, and food-grade materials where applicable." },
  { title: "Documentation Accuracy", desc: "Complete and accurate trade documentation including CoA, CoO, phytosanitary certificates, and customs papers." },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Quality & Standards
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            Quality <span className="text-gold">Assurance</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl">
            We maintain the highest quality and compliance standards to ensure our products meet international buyer requirements.
          </p>
        </div>
      </section>

      {/* Quality process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Our Approach"
                title="Quality Is Not"
                highlight="Optional"
                subtitle="At EXIMOBILE, quality assurance is built into every step of our process – from supplier selection to delivery."
              />
              <div className="space-y-6">
                {standards.map((s) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{s.title}</h4>
                      <p className="text-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-offwhite rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { value: "100%", label: "Pre-shipment Inspection" },
                  { value: "Zero", label: "Compromise on Quality" },
                  { value: "30+", label: "Countries Served" },
                  { value: "24h", label: "Response Time" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="font-display text-3xl font-bold text-navy">{stat.value}</p>
                    <p className="text-charcoal/50 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Certifications"
            title="Compliance &"
            highlight="Certifications"
            subtitle="Our products are sourced from manufacturers holding the following certifications:"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className={`bg-white border rounded-2xl p-8 hover:shadow-md transition-shadow ${cert.color}`}>
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-2xl text-charcoal mb-2">{cert.name}</h3>
                <p className="text-charcoal/60 text-sm mb-3">{cert.full}</p>
                <span className="inline-block bg-navy/10 text-navy text-xs px-3 py-1 rounded-full font-medium">
                  {cert.scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Packaging"
            title="Export-Grade"
            highlight="Packaging"
            subtitle="All products are packaged according to international shipping standards and destination country regulations."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Food Grade", desc: "Food products packed in FSSAI-approved, food-safe packaging materials." },
              { title: "Moisture Resistant", desc: "Multi-layer packaging protects against moisture during long sea voyages." },
              { title: "Custom Labeling", desc: "Labels in required languages with all mandatory information for destination country." },
              { title: "Palletized", desc: "Products palletized for easy handling at ports and warehouses." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-offwhite rounded-2xl">
                <div className="w-12 h-12 bg-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-5 h-5 text-royal" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2">{item.title}</h4>
                <p className="text-charcoal/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
