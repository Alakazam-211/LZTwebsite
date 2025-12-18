import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "LZTEK | Hosting Services",
  description: "Professional hosting services for web and mobile applications. Deploy to Vercel, Netlify, Capacitor, Supabase, Firebase, and app stores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
