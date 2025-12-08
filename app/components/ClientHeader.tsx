// app/components/ClientHeader.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from 'react';

const Header = dynamic(() => import("./Header"), { ssr: false });

export default function ClientHeader() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
    </>
  );
}