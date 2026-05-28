import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";

export default function ProductsSection() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle
            badge="Our Products"
            title="What We"
            highlight="Export"
            subtitle="Premium agricultural commodities and industrial products sourced from India's finest manufacturers."
          />
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 text-royal font-semibold hover:gap-4 transition-all"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Category tabs */}
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-display font-bold text-xl text-charcoal mb-4">
              🌾 Agricultural Products
            </h3>
            <div className="flex flex-wrap gap-2">
              {products
                .filter((p) => p.category === "agricultural")
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-display font-bold text-xl text-charcoal mb-4">
              🏭 Industrial Products
            </h3>
            <div className="flex flex-wrap gap-2">
              {products
                .filter((p) => p.category === "industrial")
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
