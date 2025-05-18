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
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundImage: `url('/hero-background-cover.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`/gravecare-background.webm`}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Honor Their Memory with Compassionate Gravesite Care — Wherever You Are
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          We gently clean, carefully maintain, and thoughtfully beautify your loved one&apos;s resting place — always with the utmost respect and dignity.
        </p>

        <button
          type="button"
          onClick={handleScrollToForm}
          className="mt-8 bg-[color:var(--primary)] text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-[color:var(--secondary)] transition cursor-pointer"
        >
          Get Started
        </button>

        <p className="mt-3 text-sm text-gray-300">Find the Right Plan to Honor Their Memory.</p>
      </div>
    </section>
  );
};

export default HeroSection;
