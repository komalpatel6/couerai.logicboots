import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { demoRequestSchema } from "@/lib/schemas/inquiry";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // 1. IP Rate Limiting (5 requests per 15 minutes)
  const clientIp = getClientIp(req.headers);
  const rateLimitResult = checkRateLimit(`demo:${clientIp}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });

  if (!rateLimitResult.isAllowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before submitting again." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
        },
      }
    );
  }

  // 2. Body Parsing & Zod Validation
  let bodyJson: unknown;
  try {
    bodyJson = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON in request body." }, { status: 400 });
  }

  const parsed = demoRequestSchema.safeParse(bodyJson);
  if (!parsed.success) {
    const errorMsg = parsed.error.errors.map((e) => e.message).join(" ");
    return NextResponse.json({ error: errorMsg }, { status: 400 });
  }

  const { name, email, phone, message } = parsed.data;

  // 3. API Key & Email Sending
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured. Demo request received in mock mode:", { name, email, phone });
    return NextResponse.json({
      success: true,
      message: "Demo request received successfully.",
    });
  }

  const resend = new Resend(apiKey);
  const recipientEmail = process.env.DEMO_RECIPIENT_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || "logicboots.officeteam@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Coeur.AI <onboarding@resend.dev>";

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `New Clinical Demo Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1C1C1C; max-width: 600px;">
          <h2 style="color: #E8234A; border-bottom: 1px solid #eee; padding-bottom: 8px;">New Demo Request — Coeur.AI</h2>
          <p><strong>Name:</strong> ${encodeHTML(name)}</p>
          <p><strong>Email:</strong> ${encodeHTML(email)}</p>
          <p><strong>Phone:</strong> ${encodeHTML(phone || "Not provided")}</p>
          <div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #E8234A;">
            <p><strong>Clinical Context / Requirements:</strong></p>
            <p style="white-space: pre-wrap;">${encodeHTML(message || "No additional message provided.")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error: "Failed to send request to mail provider." }, { status: 502 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error in demo route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function encodeHTML(str: string): string {
  return str.replace(/[&<>'"]/g, 
    (tag) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
