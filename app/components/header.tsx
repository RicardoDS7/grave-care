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
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#how-it-works" className="hover:text-brand-primary">How It Works</a>
          <a href="#services" className="hover:text-brand-primary">Pricing & Services</a>
          <a href="#gallery" className="hover:text-brand-primary">Before & After</a>
          
          <a
            href="#get-started-form"
            className="bg-brand-primary text-white font-medium px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Get Started
          </a>
        </nav>

      </div>
    </header>
  );
}
