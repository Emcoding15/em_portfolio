import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would handle sending an email or saving the message
  return NextResponse.json({ success: true, message: 'Contact form submitted', data });
}
