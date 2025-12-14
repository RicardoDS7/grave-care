"use client";

import { Suspense } from 'react';
// CHANGED: Switched from dynamic import to static import for immediate FCP
import Header from "./Header";

export default function ClientHeader() {
  return (
    <>
      <Suspense fallback={<div className="h-20 w-full" />}> 
        {/* Added a simple placeholder height to prevent layout shift if suspense hits */}
        <Header />
      </Suspense>
    </>
  );
}