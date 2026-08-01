import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ridgecrest Ward Sacrament Meeting Planner",
    template: "%s | Ridgecrest Ward Sacrament Meeting Planner",
  },
  description:
    "Plan and manage sacrament meetings, speakers, hymns, prayers, and ward business for the Ridgecrest Ward.",

  metadataBase: new URL("https://sacrament-meetings-cvjcy78w3-wdd-434.vercel.app"),

  openGraph: {
    title: "Ridgecrest Ward Sacrament Meeting Planner",
    description:
      "Plan and manage sacrament meetings, speakers, hymns, prayers, and ward business.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
