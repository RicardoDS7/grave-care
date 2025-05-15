// components/HeroSection.tsx
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
    <section className="bg-white text-center px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 shadow-sm">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Care for Your Loved One&apos;s Grave, from Anywhere
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          We clean, maintain, and beautify gravesites — and send you photo proof with every visit.
        </p>

        <button
            type="button"
            onClick={handleScrollToForm}
            className="mt-8 bg-brand-primary text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-green-700 transition cursor-pointer"
            >
            Get Started
        </button>


        <p className="mt-3 text-sm text-gray-400">Start with a location or service type.</p>
      </div>
    </section>
  );
};

export default HeroSection;
