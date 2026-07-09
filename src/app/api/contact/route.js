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

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'entitleedgeadvisory@gmail.com',
      to: 'entitleedgeadvisory@gmail.com',
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

    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Email failed to send:", emailError.message);
      }
      return NextResponse.json({ success: true, message: "Processed successfully", submission }, { status: 200 });
    } else {
      console.warn("Email credentials not set. Could not send email.");
      return NextResponse.json({ success: true, message: "Database saved but email skipped (no credentials)", submission }, { status: 200 });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
