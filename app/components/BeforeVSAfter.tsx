"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"
import FadeInOutSection from "./FadeInOutSection";

type GalleryItem = {
  beforeImg: string;
  afterImg: string;
  caption?: string;
};

const galleryItems: GalleryItem[] = [
  {
    beforeImg: "/before1.png",
    afterImg: "/after1.png",
    caption: "Westpark Cemetery – Jan 2024",
  },
  {
    beforeImg: "/before2.png",
    afterImg: "/after2.png",
    caption: "Stellawood – Feb 2024",
  }
];

const BeforeAfterCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = galleryItems.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  // Optional: Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = galleryItems[currentIndex];

  return (
    <FadeInOutSection>
    <section id="gallery" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Before & After Care
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          See how we restore and maintain the dignity of your loved ones’ resting places.
        </p>

        <div className="bg-gray-50 rounded-3xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="transition-all duration-300 ease-in-out">
              <img
                src={current.beforeImg}
                alt="Before care"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <p className="text-sm italic font-bold text-gray-500 text-center mt-2">Before</p>
            </div>
            <div className="transition-all duration-300 ease-in-out">
              <img
                src={current.afterImg}
                alt="After care"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <p className="text-sm italic font-bold text-gray-500 text-center mt-2">After</p>
            </div>
          </div>

          {current.caption && (
            <p className="text-sm text-gray-600 mb-6 italic">{current.caption}</p>
          )}

          {/* Icon Navigation */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="cursor-pointer hover:text-white hover:bg-[color:var(--secondary)] w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-brand-primary hover:text-brand-primary transition"
            >
              <ChevronLeft className="w-5 h-5 hover:text-white " />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="cursor-pointer hover:text-white hover:bg-[color:var(--secondary)] w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-brand-primary hover:text-brand-primary transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-brand-primary scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </FadeInOutSection>
  );
};

export default BeforeAfterCarousel;
