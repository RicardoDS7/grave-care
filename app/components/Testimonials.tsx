"use client";

import React, { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Ricardo from GraveCare gave us excellent service. He sent before photos of the grave and also a video of the grave, once they deep cleaned the tombstone and removed the weeds around the grave. Very happy with his service.",
    name: "Sarah V.N",
    location: "Kempton Park",
    rating: 5,
  },
];

// Custom star icon component
const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    className={`w-6 h-6 ${filled ? 'text-amber-400' : 'text-slate-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeTestimonial = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % testimonials.length;
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
        return nextIndex;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  const handleScrollToForm = () => {
    const formSection = document.getElementById("get-started-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="bg-stone-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight">
            What Our Families Say
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Heartfelt testimonials from families who have trusted us with their loved ones&apos; care.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 lg:p-12 relative min-h-[300px] flex flex-col justify-center">
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Quote */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-md lg:text-lg text-slate-700 leading-relaxed italic">
                  &lsquo;{current.quote}&rsquo;
                </blockquote>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < current.rating} />
                ))}
              </div>

              {/* Author Info */}
              <div className="space-y-1">
                <p className="font-medium text-slate-800 text-lg">{current.name}</p>
                <p className="text-slate-600 text-sm">{current.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-slate-700 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={handleScrollToForm}
            className="mt-6 bg-[color:var(--primary)] text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-[color:var(--secondary)] transition cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;