// Simple in-memory session store
export const sessions: Record<string, { active: boolean }> = {};

export function isSessionActive(id: string): boolean {
  return sessions[id]?.active ?? true;
}

export function disableSession(id: string) {
  console.log("Disabling session", id);
  sessions[id] = { active: false };
}

export function activateSession(id: string) {
  sessions[id] = { active: true };
}
