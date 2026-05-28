"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { products } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface InquiryFormProps {
  defaultProduct?: string;
}

export default function InquiryForm({ defaultProduct }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { product: defaultProduct },
  });

  async function onSubmit(data: FormData) {
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp or email directly.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
          Inquiry Sent!
        </h3>
        <p className="text-charcoal/60">
          Thank you. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors"
          />
          {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors"
          />
          {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            {...register("phone")}
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Company Name
          </label>
          <input
            {...register("company")}
            placeholder="Your Company Ltd."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Country
          </label>
          <input
            {...register("country")}
            placeholder="UAE, USA, UK..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Product of Interest
          </label>
          <select
            {...register("product")}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors"
          >
            <option value="">Select a product...</option>
            <optgroup label="Agricultural Products">
              {products
                .filter((p) => p.category === "agricultural")
                .map((p) => (
                  <option key={p.id} value={p.slug}>{p.name}</option>
                ))}
            </optgroup>
            <optgroup label="Industrial Products">
              {products
                .filter((p) => p.category === "industrial")
                .map((p) => (
                  <option key={p.id} value={p.slug}>{p.name}</option>
                ))}
            </optgroup>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          Your Message / Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Please describe what you're looking for, quantities, destination country, and any specific requirements..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-colors resize-none"
        />
        {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold-400 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Inquiry</>
        )}
      </button>

      <p className="text-center text-charcoal/40 text-xs">
        We respond within 24 business hours. Or reach us directly on WhatsApp for faster response.
      </p>
    </form>
  );
}
