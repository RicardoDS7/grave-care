// app/components/GoogleTagManager.tsx
"use client";

import { useEffect } from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === 'undefined') return;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // GTM initialization
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // Create and inject the GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    
    // Insert at the very beginning of head
    document.head.insertBefore(script, document.head.firstChild);

    // Also add to console for debugging
    console.log('GTM loaded with ID:', gtmId);
  }, [gtmId]);

  return null;
}

// Type declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}