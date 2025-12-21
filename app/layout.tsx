import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lztek.io'),
  title: "LZTEK | Hosting Services",
  description: "Professional hosting services for web and mobile applications. Deploy to Vercel, Netlify, Capacitor, Supabase, Firebase, and app stores.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LZTEK',
  },
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: "LZTEK | Hosting Services",
    description: "Professional hosting services for web and mobile applications. Deploy to Vercel, Netlify, Capacitor, Supabase, Firebase, and app stores.",
    url: 'https://lztek.io',
    siteName: 'LZTEK',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LZTEK Hosting Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LZTEK | Hosting Services",
    description: "Professional hosting services for web and mobile applications. Deploy to Vercel, Netlify, Capacitor, Supabase, Firebase, and app stores.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="ios-safari-optimized">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation
          logo="/assets/Logo_v2_black.svg"
          logoAlt="LZTEK Logo"
          links={[
            { href: '/', label: 'Home' },
            { href: '/contact', label: 'Contact' },
            { href: 'https://docs.lztek.io', label: 'Docs', external: true },
          ]}
        />
        <main className="pt-16 safe-area-top">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
