// app/components/ClientHeader.tsx
"use client";

import dynamic from "next/dynamic";
import MetaPixel from "./MetaPixel";
import GoogleTagManager from "./GoogleTagManager";
import { Suspense } from 'react';

const Header = dynamic(() => import("./Header"), { ssr: false });

export default function ClientHeader() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID!} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      </Suspense>
    </>
  );
}