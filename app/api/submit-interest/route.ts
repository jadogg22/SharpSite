import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, zipCode, state, experience, contactAuth, termsConditions } = await request.json();

    // Create a Nodemailer transporter using your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Define the email content
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Your sender email address
      to: process.env.RECRUITING_EMAIL, // The recipient email address (e.g., your recruiting team)
      subject: 'New Driver Interest Form Submission',
      html: `
        <p><strong>New Driver Interest Form Submission</strong></p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${zipCode}, ${state}</p>
        <p><strong>Driving Experience:</strong> ${experience}</p>
        <p><strong>Contact Consent:</strong> ${contactAuth ? 'Yes' : 'No'}</p>
        <p><strong>Terms & Conditions Accepted:</strong> ${termsConditions ? 'Yes' : 'No'}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log({
      firstName,
      lastName,
      email,
      phone,
      zipCode,
      state,
      experience,
      contactAuth,
      termsConditions,
    });

    return NextResponse.json({ message: 'Interest submitted successfully!' });
  } catch (error) {
    console.error('Error submitting interest form:', error);
    return NextResponse.json({ message: 'Failed to submit interest.' }, { status: 500 });
  }
}