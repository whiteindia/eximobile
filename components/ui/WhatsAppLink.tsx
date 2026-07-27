"use client";

import { ReactNode } from "react";

interface WhatsAppLinkProps {
  message?: string;
  page?: string;
  product?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

const BASE_NUMBER = "919553337770";

export default function WhatsAppLink({
  message = "Hello EXIMOBILE, I would like to inquire about your products.",
  page,
  product,
  className,
  children,
  "aria-label": ariaLabel,
}: WhatsAppLinkProps) {
  const whatsappUrl = `https://wa.me/${BASE_NUMBER}?text=${encodeURIComponent(message)}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Fire-and-forget tracking — don't block the navigation
    fetch("/api/whatsapp-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: page || (typeof window !== "undefined" ? window.location.pathname : "unknown"),
        product: product || null,
      }),
    }).catch(() => {
      // Silently ignore tracking failures
    });

    // Let the link open normally
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
