import type { Metadata } from "next";
import "./globals.css";
import ObserverProvider from "@/components/ObserverProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Avyakt 4.0",
  description: "A technical fest for the CSE department at GIET University, Gunupur. The annual celebration of innovation, technology, and collaboration hosted by the Department of Computer Science and Engineering.",
  keywords: ["techfest", "Avyakt", "GIET", "events", "projects", "LokiThemefest", "Departmentfest", "GIETUniversity", "Gunupur"],
  openGraph: {
    title: "Avyakt 4.0",
    description: "Official Department Tech Fest website at GIET University, Gunupur.",
    url: "https://avyakt.tech",
    siteName: "Avyakt 4.0",
    images: [
      {
        url: "/images/avyakt coming soon (6x8).png",
        width: 1200,
        height: 630,
        alt: "Avyakt 4.0 Tech Fest Banner",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://avyakt.tech/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="xcmuajH0KJmJxZATajJIfRMLYUESGK80iiiNDvNhGcw" />
      <body className="bg-grid-10-s-2-[#321b06] ">
        <ObserverProvider>
          <SessionProvider>
            {children}
            <Toaster />
          </SessionProvider>
        </ObserverProvider>
      </body>
    </html>
  );
}
