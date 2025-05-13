import { isSessionActive } from "@/lib/sessionStore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  console.log(id + " Checking");

  if (!id) return res.json({ error: "No sessionId" });

  const active = isSessionActive(id as string);
  return res.json({ active });
}
