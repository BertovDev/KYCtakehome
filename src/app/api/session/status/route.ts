import { NextResponse } from "next/server";
import { isSessionActive } from "@/lib/sessionStore";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId)
    return NextResponse.json({ error: "No sessionId" }, { status: 400 });

  const active = isSessionActive(sessionId);
  return NextResponse.json({ active });
}
