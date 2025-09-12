import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import ObserverProvider from "@/components/ObserverProvider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Avyakt 4.0",
  description: "A technical fest for CSE department,GIET University, Gunupur",
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
