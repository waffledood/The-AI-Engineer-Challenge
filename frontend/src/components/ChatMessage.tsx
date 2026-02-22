"use client";

/**
 * ChatMessage — Renders a single message bubble (user or assistant).
 * Boxes grow to fit content per frontend UX rules.
 */
type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex gap-3 px-4 py-4 ${
        isUser ? "bg-surface-main" : "bg-surface-main"
      } ${isUser ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          isUser
            ? "bg-emerald-600 text-white"
            : "bg-violet-600 text-white"
        }`}
      >
        {isUser ? "You" : "AI"}
      </div>

      {/* Message content — box grows to fit */}
      <div className={`flex-1 min-w-0 ${isUser ? "flex justify-end" : ""}`}>
        <div
          className={`inline-block max-w-[85%] rounded-2xl px-4 py-2.5 ${
            isUser
              ? "bg-emerald-700/40 text-text-primary"
              : "bg-surface-input text-text-primary border border-border-subtle"
          }`}
        >
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
