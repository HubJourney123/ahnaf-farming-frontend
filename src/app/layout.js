import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced metadata for SEO with metadataBase
export const metadata = {
  metadataBase: new URL("https://ahnaffarming.com"), // Replace with your actual domain
  title: "Ahnaf Farming - Fresh Organic Products",
  description: "Discover fresh organic products at Ahnaf Farming. Order online and get quality goods delivered to your door in Bangladesh.",
  keywords: "organic products, Ahnaf Farming, fresh food, online grocery, Bangladesh farming, healthy food",
  robots: "index, follow",
  alternates: {
    canonical: "https://ahnaffarming.com", // Matches metadataBase
  },
  openGraph: {
    title: "Ahnaf Farming - Fresh Organic Products",
    description: "Discover fresh organic products at Ahnaf Farming. Order online and get quality goods delivered to your door in Bangladesh.",
    url: "https://ahnaffarming.com",
    siteName: "Ahnaf Farming",
    images: [
      {
        url: "/icon.png", // Resolved as https://ahnaffarming.com/icon.png with metadataBase
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
    images: ["/icon.png"], // Resolved as https://ahnaffarming.com/icon.png with metadataBase
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}