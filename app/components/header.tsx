'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-brand-primary tracking-tight">
          <h1>GraveCare</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
          <a href="#get-started-form" className="hover:text-brand-primary">Services</a>
          <a href="#" className="hover:text-brand-primary">About</a>
          <a href="#" className="hover:text-brand-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}
