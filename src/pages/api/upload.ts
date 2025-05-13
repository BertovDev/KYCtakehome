// pages/api/upload.ts

import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { disableSession, isSessionActive } from "@/lib/sessionStore";

// Disable body parser
export const config = {
  api: { bodyParser: false },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ message: "Form parse error", error: err });
    }

    if (!fields.sessionId)
      return res.status(400).json({ message: "Missing sessionId" });

    let sessionId = "";
    let filePath = "";
    let fileName: string | null = null;
    let fileSize: number | null = null;
    let fileType: string | null = null;

    Object.keys(files).forEach((key) => {
      console.log(`Received file ${key}:`, files[key]);
      if (files[key]) {
        if (files[key][0]) {
          filePath = files[key][0]["filepath"];
          fileName = files[key][0]["originalFilename"];
          fileSize = files[key][0]["size"];
          fileType = files[key][0]["mimetype"];
        }
      }
    });

    console.log(filePath, fileName, fileSize, fileType);

    Object.keys(fields).forEach((key) => {
      console.log(`Received file ${key}:`, fields[key]);
      if (fields["sessionId"]) sessionId = fields["sessionId"][0];
    });

    if (!isSessionActive(sessionId)) {
      return res.status(404).json({ message: "Session inactive" });
    }

    if (!filePath) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const uploadDir = path.join(process.cwd(), "public/uploads", sessionId);
    fs.mkdirSync(uploadDir, { recursive: true });

    const finalPath = path.join(uploadDir, path.basename(fileName || ""));
    fs.copyFileSync(filePath, finalPath);
    fs.unlinkSync(filePath); // cleanup

    disableSession(sessionId);

    return res.status(200).json({ message: "Upload successful", sessionId });
  });
}
