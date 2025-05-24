'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: unknown;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.fbq) return;

    (function (f: any, b: Document, e: string, v: string) {
      const n: any = function (...args: unknown[]) {
        if (n.callMethod) {
          n.callMethod(...args);
        } else {
          n.queue.push(args);
        }
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      f.fbq = n;

      const t = b.createElement(e) as HTMLScriptElement; // Cast to HTMLScriptElement
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window.fbq as ((...args: any[]) => void) | undefined)?.('init', '717660720718297');
    (window.fbq as ((...args: any[]) => void) | undefined)?.('track', 'PageView');
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=717660720718297&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
}
