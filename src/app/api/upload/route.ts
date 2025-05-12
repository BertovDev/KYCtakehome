import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";
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
    return NextResponse.json(
      { message: "Session is not active" },
      { status: 404 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");

  try {
    const dir = path.join(process.cwd(), "public/uploads", sessionId);
    fs.mkdirSync(dir, { recursive: true });

    const newPath = path.join(dir, filename);
    await writeFile(newPath, buffer);

    console.log("DIrectory: " + dir);

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

  const dir = path.join(process.cwd(), "public/uploads", sessionId);

  console.log("DIrectory: " + dir);

  if (!fs.existsSync(dir)) {
    return NextResponse.json(
      { message: "Directory not found" },
      { status: 404 }
    );
  }

  const files = fs.readdirSync(dir);
  const stats = fs.statSync(path.join(dir, files[0]));

  console.log("Files: " + files);

  const responseObj = {
    name: files[0],
    type: "image/" + files[0].split(".")[1],
    size: stats.size,
    sessionId: sessionId,
  };
  return NextResponse.json(responseObj, { status: 200 });
}
