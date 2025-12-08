"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // npm install react-icons
import { handleScrollToSection } from "../utils/handleScrollToSection";

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
          <button onClick={()=>handleScrollToSection("services-overview")} className="cursor-pointer hover:text-[color:var(--secondary)]">Services</button>
          <button onClick={()=>handleScrollToSection("testimonials")} className="cursor-pointer hover:text-[color:var(--secondary)]">Testimonials</button>
          <button onClick={()=>handleScrollToSection("faq")} className="cursor-pointer hover:text-[color:var(--secondary)]">FAQs</button>
          <button
            onClick={()=>handleScrollToSection("contact-form")}
            className="cursor-pointer bg-gradient-to-r from-primary to-secondary text-white font-medium px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Get Started
          </button>
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
          <a href="#services-overview" className="hover:text-[color:var(--secondary)]"
          onClick={() => setIsOpen(false)}>Services</a>
          <a href="#testimonials" className="hover:text-[color:var(--secondary)]"
          onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#faq" className="hover:text-[color:var(--secondary)]"
          onClick={() => setIsOpen(false)}>FAQs</a>
          <a
            href="#contact-form"
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-primary to-secondary text-white text-center font-medium px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Get Started
          </a>
        </nav>
      </div>


      {/* Backdrop Overlay  */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
