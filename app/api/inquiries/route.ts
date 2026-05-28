import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Force dynamic — this route must never be statically analysed at build time
export const dynamic = "force-dynamic";

const notificationEmail = process.env.NOTIFICATION_EMAIL || "trade@eximobile.com";

export async function POST(req: NextRequest) {
  // Lazy-init clients so missing env vars don't crash at build time
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const supabase =
    supabaseUrl && supabaseKey
      ? createClient(supabaseUrl, supabaseKey)
      : null;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, company, country, product, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save inquiry to Supabase (if configured)
    let inquiryId: string | undefined;
    if (supabase) {
      const { data: inquiry, error: dbError } = await supabase
        .from("inquiries")
        .insert([{ name, email, phone, company, country, product_slug: product, message }])
        .select()
        .single();

      if (dbError) {
        console.error("Supabase error:", dbError);
      } else {
        inquiryId = inquiry?.id;
      }
    }

    // 2. Send email notification
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0A1628; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #D4A017; margin: 0; font-size: 24px;">📦 New Trade Inquiry</h1>
          <p style="color: #fff; margin: 4px 0 0; opacity: 0.7;">EXIMOBILE Website</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px; font-size: 14px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0; color: #1e3a8a;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td><td style="padding: 8px 0; color: #1e293b;">${phone}</td></tr>` : ""}
            ${company ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company</td><td style="padding: 8px 0; color: #1e293b;">${company}</td></tr>` : ""}
            ${country ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Country</td><td style="padding: 8px 0; color: #1e293b;">${country}</td></tr>` : ""}
            ${product ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Product</td><td style="padding: 8px 0; color: #1e293b; text-transform: capitalize;">${product.replace(/-/g, " ")}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border-left: 4px solid #D4A017;">
            <p style="color: #64748b; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="color: #1e293b; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="margin-top: 20px; padding: 12px 16px; background: #1e3a8a; border-radius: 6px; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your EXIMOBILE Inquiry" style="color: white; text-decoration: none; font-weight: 600;">Reply to ${name} →</a>
          </div>
        </div>
        <div style="background: #e2e8f0; padding: 12px 24px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST • EXIMOBILE Website</p>
        </div>
      </div>
    `;

    const { error: emailError } = await resend.emails.send({
      from: "EXIMOBILE Inquiry <onboarding@resend.dev>",
      to: [notificationEmail],
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` (${company})` : ""}${country ? ` – ${country}` : ""}`,
      html: emailHtml,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json({ success: true, inquiryId });
  } catch (err) {
    console.error("Inquiry API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
