import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
