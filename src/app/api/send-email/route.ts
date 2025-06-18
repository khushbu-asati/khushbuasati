import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const getAutoReplyTemplate = (
  name: string,
  subject: string,
  message: string
) => `
<table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;">
  <tr>
    <td style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px;">Thanks for reaching out!</h1>
    </td>
  </tr>
  <tr>
    <td style="padding: 24px; background: #ffffff;">
      <p style="margin: 0 0 16px; color: #1f2937; font-size: 16px; text-transform: capitalize;">Hi ${name},</p>
      <p style="margin: 0 0 16px; color: #1f2937; font-size: 16px;">Thank you for contacting me. I've received your message regarding "${formatSubject(
        subject
      )}" and will get back to you within 24-48 hours.</p>
      
      <div style="margin: 24px 0; padding: 16px; background-color: #f3f4f6; border-radius: 8px;">
        <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280;">Your message:</p>
        <div style="padding: 16px; background-color: #ffffff; border-radius: 8px; border-left: 4px solid #6366f1;">
          <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
      </div>

      <p style="margin: 24px 0 0; color: #6b7280; font-size: 14px;">Best regards,<br>Khushbu Asati</p>
    </td>
  </tr>
  <tr>
    <td style="padding: 16px 24px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; color: #6b7280; font-size: 12px;">
        &copy; ${new Date().getFullYear()} Khushbu Asati. All rights reserved.
      </p>
    </td>
  </tr>
</table>
`;

function formatSubject(subject: string): string {
  return subject
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `${formatSubject(subject)} from ${name}`,
      html: `
    <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); font-family: 'Segoe UI', system-ui, sans-serif;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 24px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Message Received</h1>
              <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                via Portfolio Contact Form
              </p>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding: 24px;">
              <table style="width: 100%; margin-bottom: 24px;">
                <tr>
                  <td>
                    <div style="display: inline-block; width: 48px; height: 48px; background-color: #6366f1; border-radius: 24px; text-align: center; line-height: 48px; font-size: 20px; color: #ffffff; margin-right: 16px; vertical-align: middle;">
                      ${name.charAt(0).toUpperCase()}
                    </div>
                    <div style="display: inline-block; vertical-align: middle;">
                      <h2 style="margin: 0; font-size: 18px; color: #1f2937;">${name}</h2>
                      <a href="mailto:${email}" style="color: #6366f1; text-decoration: none; font-size: 14px;">${email}</a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Subject -->
              <div style="margin-bottom: 24px; padding: 16px; background-color: #f3f4f6; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #6b7280;">Subject</p>
                <h3 style="margin: 4px 0 0; color: #1f2937; font-size: 16px;">${formatSubject(
                  subject
                )}</h3>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280;">Message</p>
                <div style="padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #6366f1;">
                  <p style="margin: 0; color: #1f2937; font-size: 16px; line-height: 1.6;">
                    ${message.replace(/\n/g, "<br>")}
                  </p>
                </div>
              </div>

              <!-- Action Button -->
              <div style="text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 500;">
                  Reply to ${name}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 16px 24px; background-color: #f8fafc; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Sent from your portfolio contact form
              </p>
              <p style="margin: 4px 0 0; color: #6b7280; font-size: 14px;">
                &copy; ${new Date().getFullYear()} Khushbu Asati
              </p>
            </td>
          </tr>
        </table>
  `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for your message - ${formatSubject(subject)}`,
      html: getAutoReplyTemplate(name, subject, message),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: { message?: string } | Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { message: "Failed to send email", error: errorMessage },
      { status: 500 }
    );
  }
}
