"use client";

import React, { useState, useEffect } from "react";

type GalleryItem = {
  beforeImg: string;
  afterImg: string;
  caption?: string;
};

const galleryItems: GalleryItem[] = [
  {
    beforeImg: "/before1.jpg",
    afterImg: "/after1.jpg",
    caption: "Westpark Cemetery – Jan 2024",
  },
  {
    beforeImg: "/before2.jpg",
    afterImg: "/after2.jpg",
    caption: "Stellawood – Feb 2024",
  },
  {
    beforeImg: "/before3.jpg",
    afterImg: "/after3.jpg",
    caption: "Maitland – Mar 2024",
  },
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
    <section id="gallery" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Before & After Care
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          See how we restore and maintain the dignity of your loved ones’ resting places.
        </p>

        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <img
                src={current.beforeImg}
                alt="Before care"
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="text-xs text-gray-500 text-center mt-1">Before</p>
            </div>
            <div>
              <img
                src={current.afterImg}
                alt="After care"
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="text-xs text-gray-500 text-center mt-1">After</p>
            </div>
          </div>
          {current.caption && (
            <p className="text-sm text-gray-600 mb-4">{current.caption}</p>
          )}

          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="text-sm font-medium text-gray-700 hover:text-brand-primary"
            >
              ⬅ Previous
            </button>
            <button
              onClick={next}
              className="text-sm font-medium text-gray-700 hover:text-brand-primary"
            >
              Next ➡
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-brand-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;
