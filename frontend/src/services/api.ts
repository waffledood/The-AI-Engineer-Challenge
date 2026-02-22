/**
 * Chat API client — calls the FastAPI backend.
 * - Local dev: set NEXT_PUBLIC_API_URL=http://localhost:8000 in .env.local
 * - Production (monorepo): leave unset to use same-origin /api/chat
 */
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

export type ChatResponse = { reply: string };

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { detail?: string }).detail || `Request failed: ${res.status}`
    );
  }

  return res.json();
}
