import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  const { id } = req.query;

  console.log("Session ID: " + id);

  // Mock: check if session has uploaded files
  const dir = path.join(process.cwd(), "public/uploads", id as string);
  const exists = fs.existsSync(dir);
  const files = exists ? fs.readdirSync(dir) : [];

  console.log("Files: " + files);

  const responseObj = {
    name: files[0],
    type: "image/" + files[0].split(".")[1],
    size: files[0],
    sessionId: id as string,
  };

  res.status(200).json({ uploaded: files.length > 0, responseObj });
}
