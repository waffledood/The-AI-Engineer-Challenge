"use client";

/**
 * Sidebar component — ChatGPT-style left panel with new chat button.
 * Uses dark surface colors for contrast per frontend rules.
 */
export default function Sidebar() {
  return (
    <aside className="w-64 min-w-[256px] h-full bg-surface-sidebar border-r border-border-subtle flex flex-col">
      {/* New chat button — prominent, high contrast */}
      <div className="p-3 border-b border-border-subtle">
        <button
          type="button"
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border hover:bg-surface-hover transition-colors text-text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
          <span>New chat</span>
        </button>
      </div>

      {/* Conversation list placeholder — grows to fit content */}
      <div className="flex-1 overflow-y-auto p-2">
        <p className="text-text-secondary text-sm px-3 py-2">
          Your conversations will appear here.
        </p>
      </div>
    </aside>
  );
}
