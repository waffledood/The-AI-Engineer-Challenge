import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mental Coach — Supportive AI Chat",
  description: "A supportive mental coach to help with stress, motivation, habits, and confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans bg-surface-main text-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
