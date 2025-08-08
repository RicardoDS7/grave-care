import "./globals.css";
import ClientHeader from "./components/ClientHeader";
import GoogleTagManager from "./components/GoogleTagManager";
import { Metadata } from "next";
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

// layout.tsx
export const metadata: Metadata = {
  title: "GraveCare | Grave Cleaning & Tombstone Maintenance in South Africa",
  description:
    "Affordable and respectful grave care services in South Africa. We offer grave cleaning, tombstone maintenance, and flower placements. Book online to honor your loved ones today.",
  alternates: {
    canonical: 'https://gravecare.co.za/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      </head>
      <body className="font-sans bg-brand-background text-brand-foreground">
        {/* GTM NoScript - must be immediately after opening body tag */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <ClientHeader />
        {children}
      </body>
    </html>
  );
}