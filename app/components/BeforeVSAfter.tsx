"use client";
import React, { useState, useEffect, useCallback } from "react";

type GalleryItem = {
  beforeImg: string;
  afterImg: string;
  caption?: string;
  location?: string;
  date?: string;
};

const galleryItems: GalleryItem[] = [
  {
    beforeImg: `/before3.jpg`,
    afterImg: `/after3.jpg`,
    location: "Kromvlei Cemetery",
    date: "August, 2025",
  },
  {
    beforeImg: `/before1.webp`,
    afterImg: `/after1.webp`,
    location: "Heidelberg Cemetery",
    date: "August, 2025",
  },
  {
    beforeImg: `/before2.webp`,
    afterImg: `/after2.webp`,
    location: "Zuurfontein Cemetery", 
    date: "July, 2025",
  }
];

// Custom chevron icons since we can't import lucide-react
const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BeforeAfterCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = galleryItems.length;

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const next = useCallback(() => {
    const newIndex = (currentIndex + 1) % total;
    changeSlide(newIndex);
  }, [currentIndex, total, changeSlide]);

  const prev = useCallback(() => {
    const newIndex = (currentIndex - 1 + total) % total;
    changeSlide(newIndex);
  }, [currentIndex, total, changeSlide]);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const current = galleryItems[currentIndex];

  return (
    <section id="gallery" className="bg-stone-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Before & After Care
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how we restore and maintain the dignity of your loved ones&apos; resting places with compassionate, professional care.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Image Comparison */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Before Image */}
              <div className="relative group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={current.beforeImg}
                    alt="Before restoration and care"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isTransitioning ? 'opacity-75 scale-105' : 'opacity-100 scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-white text-[var(--secondary)] border border-[var(--secondary)] text-sm font-medium rounded-full">
                    Before
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={current.afterImg}
                    alt="After restoration and care"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isTransitioning ? 'opacity-75 scale-105' : 'opacity-100 scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                <div className="absolute bottom-4 md:top-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-white text-[var(--secondary)] border border-[var(--secondary)] text-sm font-medium rounded-full">
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Only show if more than 1 item */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="View previous transformation"
                  className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={next}
                  aria-label="View next transformation"
                  className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center"
                >
                  <ChevronRightIcon />
                </button>
              </>
            )}
          </div>

          {/* Caption and Controls */}
          <div className="p-6 lg:p-8">
            {/* Location and Date */}
            <div className="text-center mb-6">
              {current.location && (
                <h3 className="text-xl font-medium text-slate-800 mb-1">
                  {current.location}
                </h3>
              )}
              {current.date && (
                <p className="text-slate-600 text-sm">
                  {current.date}
                </p>
              )}
            </div>

            {/* Dot Navigation - Only show if more than 1 item */}
            {total > 1 && (
              <div className="flex justify-center gap-3">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => changeSlide(idx)}
                    aria-label={`View transformation ${idx + 1}`}
                    className={`cursor-pointer w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-slate-700 scale-125"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterCarousel;