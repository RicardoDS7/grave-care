import type { Metadata } from "next";
import "./globals.css";
import ClientHeader from "./components/ClientHeader";

import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GraveCare SA – Affordable Grave Maintenance & Cleaning",
  description: "Professional grave care services in South Africa. We clean, maintain, and beautify tombstones so your loved ones are remembered with dignity and respect.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-brand-background text-brand-foreground">
        <ClientHeader />
        {children}
      </body>
    </html>
  );
}
