import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import ObserverProvider from "@/components/ObserverProvider";
import { SessionProvider } from "next-auth/react";

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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avyakt 4.0 Tech Fest Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyakt 4.0",
    description: "Department Tech Fest official site.",
    images: ["/twitter-image.png"],
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
      <Head>
        <title>Avyakt 4.0 - Department Tech Fest</title>
        <meta name="description" content="A department tech fest by Avyakt 4.0" />
        <meta name="keywords" content="techfest, Avyakt, GIET, events, projects,LokiThemefest,Departmentfest,GIETUniversity,gunupur" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Avyakt 4.0" />
        <meta property="og:description" content="Official Department Tech Fest website." />
        <meta property="og:image" content="/og-image.png" />
        {/* Twitter */}
        <meta name="twitter:title" content="Avyakt 4.0" />
        <meta name="twitter:description" content="Department Tech Fest official site." />
        <meta name="twitter:image" content="/twitter-image.png" />
      </Head>
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
