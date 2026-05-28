import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eximobile.com"
  ),
  title: {
    default: "EXIMOBILE – Trade Across Borders",
    template: "%s | EXIMOBILE",
  },
  description:
    "EXIMOBILE is an India-based export company specializing in quality agricultural and industrial products for global markets. Offices in Hyderabad & Seattle.",
  keywords: [
    "Indian Export Company",
    "Agricultural Exporters India",
    "Industrial Products Exporter",
    "Cashew Exporters",
    "Tea Exporters India",
    "Steel Export Company",
    "Global Trade Company",
    "Import Export Services India",
  ],
  openGraph: {
    title: "EXIMOBILE – Trade Across Borders",
    description:
      "Quality agricultural and industrial products for global markets.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/logo-desktop.jpg", width: 700, height: 700 }],
  },
  twitter: {
    card: "summary",
    title: "EXIMOBILE – Trade Across Borders",
    description:
      "Quality agricultural and industrial products for global markets.",
    images: ["/images/logo-desktop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
