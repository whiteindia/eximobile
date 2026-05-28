"use client";

import { MessageCircle } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      message="Hello EXIMOBILE, I would like to inquire about your products."
      page="floating-button"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden group-hover:inline">
        WhatsApp Us
      </span>
    </WhatsAppLink>
  );
}
