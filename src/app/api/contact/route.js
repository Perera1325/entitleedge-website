import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, company, role, email, phone, location, supportType, message } = body;

    if (!name || !email || !supportType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Database
    let submission = null;
    try {
      submission = await prisma.contactSubmission.create({
        data: {
          name,
          company,
          role,
          email,
          phone,
          location,
          supportType,
          message,
        },
      });
    } catch (dbError) {
      console.error("Database save failed:", dbError.message);
      // We continue to send the email even if DB fails, as email is the primary notification.
    }

    // 2. Send Email — Namecheap Private Email SMTP
    const EMAIL_USER = process.env.EMAIL_USER || 'info@entitleedgeadvisory.com';
    const EMAIL_PASS = process.env.EMAIL_APP_PASSWORD || 'EntitleEdge@2026!';
    const EMAIL_HOST = process.env.EMAIL_SMTP_HOST || 'mail.privateemail.com';
    const EMAIL_PORT = parseInt(process.env.EMAIL_SMTP_PORT || '465');
    const EMAIL_TO   = process.env.EMAIL_TO || 'info@entitleedgeadvisory.com';

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true, // SSL on port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"EntitleEdge Advisory" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `New Enquiry from ${name} - ${supportType}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Role:</strong> ${role || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Location:</strong> ${location || 'N/A'}</p>
        <p><strong>Support Type:</strong> ${supportType}</p>
        <p><strong>Message:</strong><br/>${message || 'N/A'}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Email failed to send:", emailError.message);
    }
    return NextResponse.json({ success: true, message: "Processed successfully", submission }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
