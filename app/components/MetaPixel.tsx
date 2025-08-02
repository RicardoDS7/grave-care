// components/MetaPixel.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface MetaPixelProps {
  pixelId: string;
}

// Declare fbq function globally with proper typing
declare global {
  interface Window {
    fbq: {
      (...args: any[]): void;
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      push?: any;
      loaded?: boolean;
      version?: string;
    };
  }
}

export default function MetaPixel({ pixelId }: MetaPixelProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Meta Pixel only if it doesn't exist
    if (typeof window.fbq === 'undefined') {
      // Load Facebook Pixel script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);

      // Initialize fbq function
      window.fbq = function(...args: any[]) {
        if (window.fbq.callMethod) {
          window.fbq.callMethod(...args);
        } else {
          window.fbq.queue?.push(args);
        }
      } as any;
      
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];

      // Initialize the pixel
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);

  useEffect(() => {
    // Track page views on route changes
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt="Meta Pixel"
      />
    </noscript>
  );
}