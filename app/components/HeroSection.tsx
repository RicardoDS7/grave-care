"use client";

import React from "react";

const HeroSection: React.FC = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById("get-started-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/gravecare-hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Care for Your Loved One&apos;s Grave, from Anywhere
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          We clean, maintain, and beautify gravesites — and send you photo proof with every visit.
        </p>

        <button
          type="button"
          onClick={handleScrollToForm}
          className="mt-8 bg-[color:var(--primary)] text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-[color:var(--secondary)] transition cursor-pointer"
        >
          Get Started
        </button>

        <p className="mt-3 text-sm text-gray-300">Start with a location or service type.</p>
      </div>
    </section>
  );
};

export default HeroSection;
