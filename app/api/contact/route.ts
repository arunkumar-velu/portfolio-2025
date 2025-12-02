import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log submission for debugging
    console.log('Contact Form Submission:', { name, email, message });

    // Check if Resend key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured, only logging submission');
      
      return NextResponse.json(
        { message: 'Message received (email service not configured)' },
        { status: 200 }
      );
    }

    // Send email using Resend
    try {
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Use your verified domain later
        to: process.env.ADMIN_EMAIL || 'guruvaarun@gmail.com',
        subject: `New Portfolio Contact: ${name}`,
        replyTo: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
      });

      console.log('Email sent successfully via Resend');

      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Resend error:', emailError);
      
      return NextResponse.json(
        { message: 'Message received but email notification failed' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process message. Please try again.' },
      { status: 500 }
    );
  }
}
