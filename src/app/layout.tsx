import type { Metadata } from "next";
import "./globals.css";
import ObserverProvider from "@/components/ObserverProvider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Avyakt 4.0",
  description: "A technical fest for CSE department",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-grid-10-s-2-[#321b06] ">
        <ObserverProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </ObserverProvider>
      </body>
    </html>
  );
}
