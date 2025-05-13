// Simple in-memory session store
export const sessions: Record<string, { active: boolean; filename: string }> =
  {};

export function isSessionActive(id: string): boolean {
  return sessions[id]?.active ?? true;
}

export function disableSession(id: string, filename: string) {
  sessions[id] = { active: false, filename: filename };
}

export function activateSession(id: string) {
  sessions[id] = { active: true, filename: "" };
}
