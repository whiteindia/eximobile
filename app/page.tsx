import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExportMapSection from "@/components/home/ExportMapSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "EXIMOBILE – Trade Across Borders",
  description:
    "EXIMOBILE is India's trusted export partner for quality agricultural and industrial products. Serving UAE, USA, Europe, Africa, and Southeast Asia.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <ExportMapSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
