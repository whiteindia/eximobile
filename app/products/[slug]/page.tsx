import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import ContactCTA from "@/components/home/ContactCTA";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { Package, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductDetailPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const hasSubCategories = product.subCategories && product.subCategories.length > 0;

  return (
    <>
      {/* ── Breadcrumb ── */}
      <section className="bg-navy pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gold">{product.name}</span>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {hasSubCategories ? (
        <>
          {/* ── Header ── */}
          <section className="bg-offwhite py-8 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
                    {product.name}
                  </h1>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold-400 transition-colors text-sm"
                  >
                    <Package className="w-4 h-4" />
                    Request Quote
                  </Link>
                  <WhatsAppLink
                    message={`Hello EXIMOBILE, I would like to inquire about ${product.name}.`}
                    page="product-detail"
                    product={product.slug}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#22c35e] transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>

          {/* ── Product description ── */}
          <section className="py-8 lg:py-10 bg-white border-b border-offwhite">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-charcoal/70 text-base lg:text-lg leading-relaxed">
                  {product.longDescription || product.description}
                </p>
              </div>
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mt-6 max-w-lg">
                {[
                  { value: product.subCategories!.length.toString(), label: "Categories" },
                  {
                    value:
                      product.subCategories!.reduce((a, c) => a + c.variants.length, 0) + "+",
                    label: "Variants",
                  },
                  { value: "ISO", label: "Certified" },
                ].map((s) => (
                  <div key={s.label} className="bg-offwhite rounded-xl p-3 sm:p-5 text-center">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-navy">{s.value}</p>
                    <p className="text-charcoal/50 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Sub-category detail sections — alternating layout ── */}
          {product.subCategories!.map((cat, i) => (
            <section
              key={cat.name}
              className={`py-10 lg:py-20 ${i % 2 === 0 ? "bg-offwhite" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid gap-8 lg:gap-20 items-center ${cat.imageUrl ? "lg:grid-cols-2" : ""}`}>

                  {/* ── Section image ── */}
                  {cat.imageUrl && (
                    <div className={`order-2 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                      {cat.showFullImage ? (
                        <div className="rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl">
                          <Image
                            src={cat.imageUrl}
                            alt={cat.name}
                            width={1200}
                            height={900}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="relative rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl aspect-[4/3]">
                          <Image src={cat.imageUrl} alt={cat.name} fill className="object-cover" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* ── Content ── */}
                  <div className={cat.imageUrl ? `order-1 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}` : ""}>
                    <span className="inline-block bg-gold/15 text-gold text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                      {product.name} · Category {i + 1} of {product.subCategories!.length}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-2">
                      {cat.name}
                    </h2>
                    <p className="text-charcoal/60 text-sm sm:text-base mb-6 lg:mb-8">{cat.tagline}</p>

                    {/* Product variants */}
                    <div className="mb-6 lg:mb-8">
                      <h3 className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider mb-3 lg:mb-4">
                        Products in this category
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                        {cat.variants.map((v) => (
                          <div
                            key={v.name}
                            className="bg-white border border-offwhite rounded-xl p-3 lg:p-4 hover:border-gold/40 hover:shadow-sm transition-all"
                          >
                            <p className="font-semibold text-charcoal text-sm mb-1">{v.name}</p>
                            <p className="text-charcoal/50 text-xs leading-relaxed">{v.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key benefits */}
                    <div className="mb-5 lg:mb-6">
                      <h3 className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider mb-3">
                        Key Benefits
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-charcoal/70 text-sm">
                            <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical uses */}
                    {cat.uses && (
                      <div>
                        <h3 className="text-xs font-semibold text-charcoal/40 uppercase tracking-wider mb-3">
                          Typical Uses
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {cat.uses.map((u) => (
                            <span key={u} className="px-3 py-1.5 bg-navy/5 text-navy text-xs font-medium rounded-full">
                              {u}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* ── Info sections (types / grades / packaging images) ── */}
          {product.infoSections && product.infoSections.map((sec, i) => (
            <section key={sec.title} className={`py-8 lg:py-12 ${i % 2 === 0 ? "bg-offwhite" : "bg-white"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4 lg:mb-6">
                  {sec.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-gold">{sec.title.split(" ").slice(-1)}</span>
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-white">
                  <Image
                    src={sec.imageUrl}
                    alt={`${product.name} — ${sec.title}`}
                    width={1500}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </section>
          ))}

          {/* ── Size Chart + Packaging Options + Nutrition ── */}
          {(product.sizeChart || product.packagingOptions || product.nutritionInfo || product.infoTable) && (
            <section className="py-10 lg:py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-14">

                {/* Generic grade / info table */}
                {product.infoTable && (
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4 lg:mb-6">
                      {product.infoTable.caption?.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="text-gold">{product.infoTable.caption?.split(" ").slice(-1)}</span>
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-offwhite shadow-sm">
                      <table className="w-full text-xs sm:text-sm min-w-[500px]">
                        <thead>
                          <tr className="bg-navy text-white">
                            {product.infoTable.headers.map((h) => (
                              <th key={h} className="px-3 sm:px-5 py-3 text-left font-semibold uppercase tracking-wider text-xs whitespace-nowrap">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.infoTable.rows.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-offwhite"}>
                              {row.map((cell, j) => (
                                <td key={j} className={`px-3 sm:px-5 py-3 ${j === 0 ? "font-bold text-navy" : "text-charcoal/70"}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Size Chart */}
                {product.sizeChart && (
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4 lg:mb-6">
                      Size <span className="text-gold">Chart</span>
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-offwhite shadow-sm">
                      <table className="w-full text-xs sm:text-sm min-w-[480px]">
                        <thead>
                          <tr className="bg-navy text-white">
                            <th className="px-3 sm:px-5 py-3 text-left font-semibold uppercase tracking-wider text-xs whitespace-nowrap">Grade</th>
                            <th className="px-3 sm:px-5 py-3 text-left font-semibold uppercase tracking-wider text-xs whitespace-nowrap">Nuts per Kg</th>
                            <th className="px-3 sm:px-5 py-3 text-left font-semibold uppercase tracking-wider text-xs whitespace-nowrap">Size</th>
                            <th className="px-3 sm:px-5 py-3 text-left font-semibold uppercase tracking-wider text-xs whitespace-nowrap">Usage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizeChart.map((row, i) => (
                            <tr key={row.grade} className={i % 2 === 0 ? "bg-white" : "bg-offwhite"}>
                              <td className="px-3 sm:px-5 py-3 font-bold text-navy">{row.grade}</td>
                              <td className="px-3 sm:px-5 py-3 text-charcoal/70">{row.nutsPerKg}</td>
                              <td className="px-3 sm:px-5 py-3 text-charcoal/70">{row.size}</td>
                              <td className="px-3 sm:px-5 py-3 text-charcoal/70">{row.usage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Packaging Options + Nutrition side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                  {/* Packaging Options */}
                  {product.packagingOptions && (
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4 lg:mb-6">
                        Packaging <span className="text-gold">Options</span>
                      </h2>
                      {product.slug === "cashews" ? (
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-offwhite">
                          <Image
                            src="/images/brochure/cashew_packing.png"
                            alt="Cashew Packaging Options"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : product.slug === "maize" ? (
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-offwhite">
                          <Image
                            src="/images/brochure/maize_packaging.png"
                            alt="Maize Packaging Options"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : product.slug === "pulses" ? (
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-offwhite">
                          <Image
                            src="/images/brochure/pulses_packaging.png"
                            alt="Pulses Packaging Options"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3">
                          {product.packagingOptions.map((pkg) => (
                            <div key={pkg.name} className="bg-offwhite rounded-xl p-3 lg:p-4 text-center border border-transparent hover:border-gold/30 transition-colors">
                              <p className="font-semibold text-charcoal text-sm mb-1">{pkg.name}</p>
                              <p className="text-charcoal/50 text-xs">{pkg.sizes}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Nutritional Info */}
                  {product.nutritionInfo && (
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4 lg:mb-6">
                        Nutritional <span className="text-gold">Benefits</span>
                        <span className="text-sm font-normal text-charcoal/40 ml-2">(per {product.nutritionInfo.per})</span>
                      </h2>
                      <div className="bg-offwhite rounded-2xl p-4 lg:p-6 space-y-3">
                        {product.nutritionInfo.items.map((item) => (
                          <div key={item.label} className="flex items-center justify-between border-b border-white pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                              <span className="text-charcoal/70 text-sm">{item.label}</span>
                            </div>
                            <span className="font-semibold text-charcoal text-sm">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </section>
          )}

          {/* ── Specs + Packaging — navy bg ── */}
          {(product.specifications || product.packagingDetails || product.exportQuality) && (
            <section className="py-10 lg:py-16 bg-navy">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 lg:mb-10 text-center">
                  Technical <span className="text-gold">Specifications</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                  {product.specifications && (
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="bg-white/5 border border-white/10 rounded-xl px-4 lg:px-5 py-3 lg:py-4">
                          <p className="text-xs text-white/40 uppercase tracking-wider">{key}</p>
                          <p className="font-medium text-white text-sm mt-1">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-4">
                    {product.packagingDetails && (
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 lg:p-5">
                        <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Packaging</p>
                        <p className="text-white/70 text-sm leading-relaxed">{product.packagingDetails}</p>
                      </div>
                    )}
                    {product.exportQuality && (
                      <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 lg:p-5 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gold uppercase tracking-wider mb-1">Export Quality</p>
                          <p className="text-white/70 text-sm leading-relaxed">{product.exportQuality}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 lg:mt-12 text-center flex flex-wrap justify-center gap-4">
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-400 transition-colors text-sm lg:text-base"
                  >
                    <Package className="w-4 h-4" />
                    Request Quote
                  </Link>
                  <WhatsAppLink
                    message={`Hello EXIMOBILE, I would like to inquire about ${product.name}.`}
                    page="product-detail-bottom"
                    product={product.slug}
                    className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#22c35e] transition-colors text-sm lg:text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </WhatsAppLink>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        /* ── Standard layout (products without subCategories) ── */
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src={product.imageUrl} alt={product.name} fill className="object-cover" priority />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                    product.category === "agricultural" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {product.category}
                  </span>
                </div>
              </div>

              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">{product.name}</h1>
                <p className="text-charcoal/60 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                  {product.longDescription || product.description}
                </p>

                {product.specifications && (
                  <div className="mb-6 lg:mb-8">
                    <h3 className="font-semibold text-charcoal mb-3 lg:mb-4 flex items-center gap-2">
                      <Package className="w-4 h-4 text-gold" /> Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="bg-offwhite rounded-lg px-4 py-3">
                          <p className="text-xs text-charcoal/50 uppercase tracking-wider">{key}</p>
                          <p className="font-medium text-charcoal text-sm mt-0.5">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.packagingDetails && (
                  <div className="mb-5 lg:mb-6 p-4 bg-offwhite rounded-xl">
                    <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-1">Packaging</p>
                    <p className="text-charcoal/70 text-sm">{product.packagingDetails}</p>
                  </div>
                )}

                {product.exportQuality && (
                  <div className="mb-6 lg:mb-8 flex items-start gap-2 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">Export Quality</p>
                      <p className="text-green-700/80 text-sm">{product.exportQuality}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 lg:px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-400 transition-colors"
                  >
                    <Package className="w-4 h-4" /> Request Quote
                  </Link>
                  <WhatsAppLink
                    message={`Hello EXIMOBILE, I would like to inquire about ${product.name}.`}
                    page="product-detail"
                    product={product.slug}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#22c35e] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related products ── */}
      {relatedProducts.length > 0 && (
        <section className="py-10 lg:py-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-6 lg:mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.thumbnailUrl ?? p.imageUrl} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 lg:p-5">
                    <h3 className="font-semibold text-charcoal group-hover:text-royal transition-colors">{p.name}</h3>
                    <p className="text-charcoal/50 text-xs mt-1 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
