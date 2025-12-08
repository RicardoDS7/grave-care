import "./globals.css";
import ClientHeader from "./components/ClientHeader";
import { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import Script from "next/script";
import MetaPixelEvents from "./components/MetaPixelEvents";

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
  title: "GraveCare | Grave Maintenance & Cleaning Services in Johannesburg",
  description:
    "Affordable and respectful grave care services in Gauteng. We offer grave cleaning, grave maintenance, and fresh flower placements. Book online to honor your loved ones today.",
  alternates: {
    canonical: 'https://gravecare.co.za/',
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID!;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Meta Pixel - Updated 2025 Implementation */}
        <Script
          id="meta-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              // Initialize with advanced matching enabled
              fbq('init', '${META_PIXEL_ID}', {
                automatic_matching: true,
                external_id: undefined
              });
              
              // Track PageView
              fbq('track', 'PageView');
              
              // Set up automatic events
              fbq('set', 'autoConfig', true, '${META_PIXEL_ID}');
            `,
          }}
        />
      </head>

      <body className="font-sans bg-brand-background text-brand-foreground">
        {/* GTM NoScript - Single instance */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        
        <ClientHeader />
        <MetaPixelEvents />
        {children}
      </body>
    </html>
  );
}