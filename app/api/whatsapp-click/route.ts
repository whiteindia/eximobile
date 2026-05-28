import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const notificationEmail = process.env.NOTIFICATION_EMAIL || "trade@eximobile.com";

export async function POST(req: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const supabase =
    supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { page, product } = body;
    const userAgent = req.headers.get("user-agent") || "";

    if (supabase) {
      const { error: dbError } = await supabase
        .from("whatsapp_clicks")
        .insert([{ page, product: product || null, user_agent: userAgent }]);
      if (dbError) console.error("Supabase whatsapp_clicks error:", dbError);
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #25D366; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">💬 WhatsApp Inquiry Click</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Someone tapped the WhatsApp button on your website</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px; font-size: 14px;">Page</td>
              <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${page || "Unknown"}</td>
            </tr>
            ${product ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Product</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b; text-transform: capitalize;">${product.replace(/-/g, " ")}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Time</td>
              <td style="padding: 8px 0; color: #1e293b;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 14px 16px; background: #dcfce7; border-radius: 6px; border-left: 4px solid #25D366;">
            <p style="color: #166534; margin: 0; font-size: 14px; line-height: 1.6;">
              A visitor has clicked the WhatsApp button and is likely opening a chat with you now.
              Be ready to respond promptly on WhatsApp <strong>(+91 98486 32875)</strong>.
            </p>
          </div>
        </div>
        <div style="background: #e2e8f0; padding: 12px 24px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">EXIMOBILE Website • WhatsApp Click Tracker</p>
        </div>
      </div>
    `;

    const { error: emailError } = await resend.emails.send({
      from: "EXIMOBILE Website <onboarding@resend.dev>",
      to: [notificationEmail],
      subject: `WhatsApp Click${product ? ` — ${product.replace(/-/g, " ")}` : ""} (${page || "site"})`,
      html: emailHtml,
    });

    if (emailError) console.error("Resend whatsapp-click email error:", emailError);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("WhatsApp click API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
