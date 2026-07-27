import type { Metadata } from "next";
import InquiryForm from "@/components/forms/InquiryForm";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact EXIMOBILE for export inquiries, product quotes, and trade partnerships. Reach us by email, phone, WhatsApp, or visit our offices in Hyderabad or Seattle.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl">
            Ready to start a trade relationship? Send us your requirements and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-8">
                Let&apos;s Start a <span className="text-gold">Conversation</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-0.5">Email</p>
                    <a href="mailto:trade@eximobile.com" className="text-royal hover:underline">
                      trade@eximobile.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-0.5">Phone</p>
                    <a href="tel:+919553337770" className="text-royal hover:underline block">
                      +91 9553337770
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-0.5">WhatsApp</p>
                    <WhatsAppLink
                      message="Hello EXIMOBILE, I have a trade inquiry."
                      page="contact"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#22c35e] transition-colors mt-1"
                    >
                      Chat on WhatsApp
                    </WhatsAppLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-0.5">India Office</p>
                    <p className="text-charcoal/60 text-sm">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-0.5">USA Office</p>
                    <p className="text-charcoal/60 text-sm">1212 Harrison St, Seattle, WA 98109, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-royal" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-0.5">Business Hours</p>
                    <p className="text-charcoal/60 text-sm">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
                    <p className="text-charcoal/60 text-sm">WhatsApp available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160905952!2d78.24323045820313!3d17.41261755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Inquiry form */}
            <div className="bg-offwhite rounded-2xl p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
                Send an Inquiry
              </h3>
              <p className="text-charcoal/60 text-sm mb-8">
                Fill in your details and we&apos;ll send you a competitive quote.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
