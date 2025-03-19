// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // New Client Component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced metadata for SEO
export const metadata = {
  title: "Ahnaf Farming - Fresh Organic Products",
  description: "Discover fresh organic products at Ahnaf Farming. Order online and get quality goods delivered to your door in Bangladesh.",
  keywords: "organic products, Ahnaf Farming, fresh food, online grocery, Bangladesh farming, healthy food",
  robots: "index, follow",
  alternates: {
    canonical: "https://ahnaffarming.com", // Replace with your actual domain
  },
  openGraph: {
    title: "Ahnaf Farming - Fresh Organic Products",
    description: "Discover fresh organic products at Ahnaf Farming. Order online and get quality goods delivered to your door in Bangladesh.",
    url: "https://ahnaffarming.com", // Replace with your actual domain
    siteName: "Ahnaf Farming",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "Ahnaf Farming Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahnaf Farming - Fresh Organic Products",
    description: "Discover fresh organic products at Ahnaf Farming. Order online and get quality goods delivered to your door in Bangladesh.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}