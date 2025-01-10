import type { Metadata } from "next";
import "./globals.css";
import ObserverProvider from "@/components/ObserverProvider";

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
      <body className="bg-grid-10-s-2-[#321b06]">
        <ObserverProvider>
          {children}
        </ObserverProvider>
      </body>
    </html>
  );
}
