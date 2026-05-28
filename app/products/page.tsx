import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/products/ProductCard";
import ContactCTA from "@/components/home/ContactCTA";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse EXIMOBILE's full product catalog – agricultural products including Cashews, Tea, Chilli, Turmeric, Cotton, Maize, Pulses, Rice and industrial products like Paints, Steel, Cement, Pharma.",
};

export default function ProductsPage() {
  const agricultural = products.filter((p) => p.category === "agricultural");
  const industrial = products.filter((p) => p.category === "industrial");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Product Catalog
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            Our <span className="text-gold">Products</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl">
            12 premium products across 2 categories, exported to buyers in 30+ countries worldwide.
          </p>
        </div>
      </section>

      {/* Industrial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Industrial Products"
            title="🏭 Industrial"
            highlight="Products"
            subtitle="Quality industrial materials from India's leading manufacturers for global construction and manufacturing sectors."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industrial.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Agricultural */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Agricultural Products"
            title="🌾 Agricultural"
            highlight="Products"
            subtitle="Premium Indian agricultural commodities meeting international food safety standards."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {agricultural.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
