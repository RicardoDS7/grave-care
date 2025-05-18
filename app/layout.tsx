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
