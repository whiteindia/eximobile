import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { navLinks, products } from "@/lib/data";

export default function Footer() {
  const industrialProducts = products.filter((p) => p.category === "industrial");
  const agriculturalProducts = products.filter((p) => p.category === "agricultural");

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-desktop.jpg"
                alt="EXIMOBILE — Trade Across Borders"
                width={160}
                height={160}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India-based export company specializing in quality agricultural and
              industrial products for global markets.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>1212 Harrison St, Seattle, WA 98109, USA</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Products
            </h3>
            <div className="mb-3">
              <p className="text-gold text-xs uppercase tracking-wider mb-2">Agricultural</p>
              <ul className="space-y-1.5">
                {agriculturalProducts.slice(0, 4).map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-white/60 hover:text-gold text-sm transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gold text-xs uppercase tracking-wider mb-2">Industrial</p>
              <ul className="space-y-1.5">
                {industrialProducts.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-white/60 hover:text-gold text-sm transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:trade@eximobile.com"
                className="flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                trade@eximobile.com
              </a>
              <a
                href="tel:+919493337733"
                className="flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                +91 9493337733
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} EXIMOBILE. All rights reserved.</p>
          <p>
            Export Markets: UAE · USA · Saudi Arabia · Europe · Africa · Southeast Asia
          </p>
        </div>
      </div>
    </footer>
  );
}
