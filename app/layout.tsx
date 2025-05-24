import "./globals.css";
import ClientHeader from "./components/ClientHeader";
import { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import MetaPixel from "./components/MetaPixel";

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

// layout.tsx
export const metadata: Metadata = {
  title: "GraveCare | Grave Cleaning & Tombstone Maintenance in South Africa",
  description:
    "Affordable and respectful grave care services in South Africa. We offer grave cleaning, tombstone maintenance, and flower placements. Book online to honor your loved ones today.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-brand-background text-brand-foreground">
        <ClientHeader />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
