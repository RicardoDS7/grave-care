// app/components/GoogleTagManager.tsx
"use client";

import { useEffect } from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });

      // Check if GTM script is already loaded
      if (document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${gtmId}"]`)) {
        return;
      }

      // Create and append the GTM script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }
  }, [gtmId]);

  // Render the noscript fallback
  return (
    <noscript>
      <iframe 
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Type declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}