"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // npm install react-icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-3xl font-bold text-[color:var(--foreground)] tracking-tight">
          <h1><span className="text-[color:var(--secondary)]">Grave</span><span className="text-[color:var(--primary)]">Care</span></h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#how-it-works" className="hover:text-[color:var(--secondary)]">How It Works</a>
          <a href="#services" className="hover:text-[color:var(--secondary)]">Pricing & Services</a>
          {/* <a href="#gallery" className="hover:text-[color:var(--secondary)]">Before & After</a> */}
          <a
            href="#get-started-form"
            className="bg-[color:var(--primary)] text-white font-medium px-4 py-2 rounded-full hover:bg-[color:var(--secondary)] transition"
          >
            Get Started
          </a>
        </nav>

        {/* Burger Icon */}
        <button
          className="sm:hidden text-2xl text-brand-primary"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`} // hides on desktop
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b shadow-sm">
          <h2 className="text-xl font-bold text-brand-primary"><span className="text-[color:var(--secondary)]">Grave</span><span className="text-[color:var(--primary)]">Care</span></h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col px-6 py-6 space-y-6 text-gray-700 text-lg">
          {/* <a href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a> */}
          <a href="#services" onClick={() => setIsOpen(false)}>Pricing & Services</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Before & After</a>
          <a
            href="#get-started-form"
            className="mt-4 bg-brand-primary text-white text-center font-medium px-4 py-2 rounded-full hover:bg-green-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>


      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
