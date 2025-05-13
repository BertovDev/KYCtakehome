import path from "path";
import fs from "fs";
import { disableSession, isSessionActive } from "@/lib/sessionStore";
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const tempDir = path.join(process.cwd(), "temp");
  fs.mkdirSync(tempDir, { recursive: true });

  const form = formidable({
    uploadDir: tempDir,
    keepExtensions: true,
    filename: (name, ext, part) => {
      const cleanName =
        part.originalFilename?.replace(/[^a-zA-Z0-9.-]/g, "_") || "file";
      return `${Date.now()}_${cleanName}`;
    },
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Upload error:", err);
      return res.status(500).json({ error: "File upload failed" });
    }

    const sessionId = fields.sessionId?.[0];
    const file = files.file?.[0];

    if (!isSessionActive(sessionId as string)) {
      return res.status(404).json({ message: "Session is not active" });
    }

    if (!sessionId || !file) {
      return res.status(400).json({ error: "Missing sessionId or file" });
    }

    const dir = path.join(process.cwd(), "public/uploads", sessionId as string);
    fs.mkdirSync(dir, { recursive: true });

    const targetPath = path.join(dir, file.originalFilename as string);
    fs.renameSync(file.filepath, targetPath);

    disableSession(sessionId);
    console.log(sessionId + "Is disabled");

    return res.status(200).json({
      message: "File uploaded successfully",
      sessionId,
    });
  });
}
