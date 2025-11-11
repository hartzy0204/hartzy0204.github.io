import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { success: false, "error-codes": ["missing-input-response"] },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    if (!response.ok) {
      throw new Error(`reCAPTCHA API error: ${response.status}`);
    }

    const data = await response.json();

    console.log("reCAPTCHA API Response:", data); // Debug log

    return NextResponse.json(data);
  } catch (error) {
    console.error("CAPTCHA verification error:", error);
    return NextResponse.json(
      {
        success: false,
        "error-codes": ["internal-error"],
      },
      { status: 500 }
    );
  }
}
