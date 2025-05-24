'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: FbqFunction;
    _fbq?: FbqFunction;
  }
}

type FbqFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
};

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.fbq?.loaded) return;

    // Inject the Meta Pixel script
    (function (f: Partial<Window>, b: Document, e: string, v: string, n?: FbqFunction, t?: HTMLScriptElement, s?: Node) {
      if (typeof f.fbq !== 'undefined') return;
      n = function (...args: unknown[]) {
        (n!.callMethod ? n!.callMethod : n!.queue!.push).apply(n, args);
      } as FbqFunction;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      (f as Window).fbq = n;
      t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '717660720718297');
    window.fbq('track', 'PageView');
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
