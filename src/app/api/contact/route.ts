import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Prepare email payload
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECEIVER_EMAIL;
  const from = process.env.CONTACT_SENDER_EMAIL || 'onboarding@resend.dev';

  if (!resendApiKey || !to) {
    return NextResponse.json({ success: false, message: 'Email service not configured.' }, { status: 500 });
  }

  const subject = `Portfolio Contact Form: ${name}`;
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  // Send email using Resend API
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error('Resend API error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email', error }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Message sent successfully!' });
}
