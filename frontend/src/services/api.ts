/**
 * Chat API client — calls the FastAPI backend.
 * Uses NEXT_PUBLIC_API_URL for local dev (localhost:8000) or production API.
 */

const API_BASE =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
    : "http://localhost:8000";

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
