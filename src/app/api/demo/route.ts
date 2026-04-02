import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  // Handle problematic ESM/CJS interop for Resend (common in Next.js 15)
  let resend;
  try {
    resend = new Resend(apiKey);
  } catch (e) {
    console.error("Resend constructor failed, attempting fallback:", e);
    // Fallback in case of weird import nesting
    const { Resend: ResendFallback } = require('resend');
    resend = new ResendFallback(apiKey);
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Coeur AI <onboarding@resend.dev>', // You can change this once you verify your domain
      to: ['logicboots.officeteam@gmail.com'],
      subject: `New Demo Request: ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <pre>${message || 'No message provided'}</pre>
      `,
    });

    if (error) {
      console.error("Resend API Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
