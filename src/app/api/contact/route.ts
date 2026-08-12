import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || !isValidEmail(email) || !projectType || message.length < 20) {
    return NextResponse.json(
      { message: "Validation failed. Check required fields." },
      { status: 400 },
    );
  }

  // No secrets required. Wire to email/CRM later via server env if needed.
  // Intentionally avoids logging full message content in production noise.
  if (process.env.NODE_ENV !== "production") {
    console.info("[contact]", {
      name,
      email,
      projectType,
      budget: budget || null,
      messageLength: message.length,
    });
  }

  return NextResponse.json({
    message:
      "Thanks — your message was validated successfully. Connect an email provider or update the contact email in site.ts to receive inquiries in production.",
  });
}
