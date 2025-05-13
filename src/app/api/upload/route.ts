import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";
import { disableSession } from "@/lib/sessionStore";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const sessionId = formData.get("sessionId")?.toString() || "";

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = sessionId + "_" + file.name.replaceAll(" ", "_");

  console.log(filename);

  try {
    await writeFile(path.join("/tmp/" + filename), buffer);
    disableSession(sessionId, filename);
    return NextResponse.json(
      { message: "File uploaded successfully", filename },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "File upload failed" },
      { status: 500 }
    );
  }

  // console.log(file, sessionId);

  // if (!sessionId) {
  //   return NextResponse.json({ message: "Session not found" }, { status: 404 });
  // }

  // if (!isSessionActive(sessionId)) {
  //   return NextResponse.json(
  //     { message: "Session is not active" },
  //     { status: 404 }
  //   );
  // }

  // if (!request.body)
  //   return NextResponse.json({ message: "No file" }, { status: 404 });

  // const blob = await put(file.name, file, {
  //   access: "public",
  // });

  // console.log(blob);

  // return NextResponse.json({ blob });
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("sessionId");
  const filename = request.nextUrl.searchParams.get("filename");

  console.log(sessionId, filename);

  if (!sessionId || !filename) {
    return NextResponse.json({ message: "Session not found" }, { status: 404 });
  }

  console.log(path.join("/tmp/"));

  const dir = path.join("/tmp/");

  console.log("DIrectory: " + dir);

  if (!fs.existsSync(dir)) {
    return NextResponse.json(
      { message: "Directory not found" },
      { status: 404 }
    );
  }

  const files = fs.readdirSync(dir);
  let foundFile = "";
  // let file = "";

  files.forEach((file) => {
    if (file === filename || file.includes(sessionId)) {
      console.log(" FILE FOUND " + file);
      foundFile = file;
    }
  });

  console.log(foundFile);

  // const stats = fs.statSync(path.join(dir, files[0]));

  // console.log("Files: " + files);

  // const responseObj = {
  //   name: file,
  //   type: "image/" + file.split(".")[1],
  //   size: fs.statSync(path.join(dir, file)).size,
  //   sessionId: sessionId,
  // };

  // console.log(responseObj);

  // return NextResponse.json(responseObj, { status: 200 });

  const responseObj = {
    name: foundFile,
    type: "image/" + foundFile.split(".")[1],
    size: fs.statSync(path.join(dir, foundFile)).size,
    sessionId: sessionId,
  };

  return foundFile
    ? NextResponse.json(responseObj, { status: 200 })
    : NextResponse.json({ message: "File not found" }, { status: 404 });
}
