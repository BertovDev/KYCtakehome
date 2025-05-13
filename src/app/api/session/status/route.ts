import { NextRequest, NextResponse } from "next/server";
import { isSessionActive } from "@/lib/sessionStore";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const sessionId = searchParams.get("sessionId");

  if (!sessionId)
    return NextResponse.json({ error: "No sessionId" }, { status: 400 });

  const active = isSessionActive(sessionId);
  return NextResponse.json({ active });
}
