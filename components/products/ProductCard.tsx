"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-offwhite">
        <Image
          src={product.thumbnailUrl ?? product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
              product.category === "agricultural"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-charcoal mb-2 group-hover:text-royal transition-colors">
          {product.name}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-5 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-royal font-semibold text-sm hover:gap-3 transition-all"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/contact?product=${product.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold text-navy text-xs font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            <Package className="w-3.5 h-3.5" />
            Inquire
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
