import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, zipCode, state, experience, contactAuth, termsConditions } = await request.json();

    // TODO: Implement email sending logic here.
    // You'll likely need to install a library like 'nodemailer': npm install nodemailer
    // And configure environment variables for your email service (e.g., SMTP credentials).

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

    // Example using Nodemailer (you'll need to set this up):
    /*
    import nodemailer from 'nodemailer';

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.RECRUITING_EMAIL,
      subject: 'New Driver Interest Form Submission',
      html: `
        <p>Name: ${name}</p>
        <p>State: ${state}</p>
        <p>Driving Experience: ${experience}</p>
      `,
    });
    */

    return NextResponse.json({ message: 'Interest submitted successfully!' });
  } catch (error) {
    console.error('Error submitting interest form:', error);
    return NextResponse.json({ message: 'Failed to submit interest.' }, { status: 500 });
  }
}
