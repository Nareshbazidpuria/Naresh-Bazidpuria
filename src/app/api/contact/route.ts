import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, inquiryType } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim() || !inquiryType?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log submission — wire to Resend, SendGrid, or Formspree in production
    console.log("Contact form submission:", {
      name,
      email,
      inquiryType,
      message,
      to: siteConfig.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
