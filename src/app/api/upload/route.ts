import { NextRequest, NextResponse } from "next/server";
import { disableSession, isSessionActive } from "@/lib/sessionStore";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const sessionId = formData.get("sessionId")?.toString() || "";

  if (!sessionId) {
    return NextResponse.json({ message: "Session not found" }, { status: 404 });
  }

  if (!isSessionActive(sessionId)) {
    return NextResponse.json({ message: "Session not found" }, { status: 404 });
  }

  if (!file) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  try {
    // Here we store the files in some storage service Or db
    console.log("File " + file.name + " uploaded successfully");

    // Disable the session after the file is uploaded
    disableSession(sessionId);

    return NextResponse.json(
      { message: "File uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error uploading file", error: error },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json({ message: "Session not found" }, { status: 404 });
  }

  const mockResponse = {
    name: "mockFile.jpg",
    type: "image/jpeg",
    size: 22522,
    sessionId: sessionId,
  };

  return NextResponse.json(mockResponse, { status: 200 });
}
