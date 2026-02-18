import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { mailConfig } from "@/lib/constants";
import { getContactEmailTemplate } from "@/lib/email-templates";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mailConfig.user,
    pass: mailConfig.pass,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await transporter.sendMail({
      from: `"${name}" <${mailConfig.user}>`,
      to: mailConfig.user,
      replyTo: email,
      subject: `New message from ${name}`,
      html: getContactEmailTemplate({ name, email, message }),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}