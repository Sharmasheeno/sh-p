import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { Keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Sharmake Hassan Said",
  title: "Sharmake Hassan Said | Full Stack Developer & Data Analyst",
  description:
    "Sharmake Hassan Said is a Full Stack Developer, AI & Machine Learning enthusiast, and Data Analyst based in Mogadishu, Somalia. Explore his projects in web development, AI systems, and data-driven digital products.",
  authors: [
    {
      name: "Sharmake Hassan Said",
      url: "https://sharmatheanalyst.vercel.app",
    },
  ],
  creator: "Sharmake Hassan Said",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: Keywords,
  metadataBase: new URL("https://sharmatheanalyst.vercel.app"),


  alternates: {
    canonical: "https://sharmatheanalyst.vercel.app",
    languages: {
      "en-US": "https://sharmatheanalyst.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1c8e801d4931baa4",
  },
  appleWebApp: {
    capable: true,
    title: "Sharmake Hassan Said",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Sharmake Hassan Said",
    description:
      "Explore Sharmake Hassan Said's portfolio featuring projects in React, Node.js, AI, Machine Learning, and Data Analytics. Discover innovative web applications and intelligent systems.",
    url: "https://sharmatheanalyst.vercel.app",
    siteName: "Sharmake Hassan Said",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sharmake Hassan Said Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Sharmake Hassan Said",
    description:
      "Check out Sharmake Hassan Said's portfolio and dev projects using React, Node.js, Python, and modern web tech.",
    images: ["/images/thumbnail.png"],
    creator: "@sharmasheeno",
    site: "@sharmasheeno",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
