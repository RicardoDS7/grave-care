"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { handleScrollToSection } from "../utils/handleScrollToSection";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// ---- Replace these with your real images in /public ----
interface GraveImage {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

const GRAVE_IMAGES: GraveImage[] = [
  {
    src: "/before1.webp",
    alt: "Headstone with fresh floral arrangement",
    caption: "Before",
    location: "",
  },
  {
    src: "/after1.webp",
    alt: "Neatly edged grave with clean paving",
    caption: "After",
    location: "",
  },
  {
    src: "/before3.jpg",
    alt: "Granite headstone polished and restored",
    caption: "Before",
    location: "",
  },
  {
    src: "/after3.jpg",
    alt: "Granite headstone polished and restored",
    caption: "After",
    location: "",
  },
];

export default function TestimonialsSection({
  title,
  testimonials,
}: TestimonialsSectionProps) {
  // -------- Carousel (seamless infinite loop) --------
  const first = GRAVE_IMAGES[0];
  const last = GRAVE_IMAGES[GRAVE_IMAGES.length - 1];
  const SLIDES = useMemo(() => [last, ...GRAVE_IMAGES, first], []);
  const REAL_LEN = GRAVE_IMAGES.length;

  // Start at 1 (first real slide, since we prepended a clone)
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);

  // 0..REAL_LEN-1 for dots
  const realIndex = (index - 1 + REAL_LEN) % REAL_LEN;

  const goToReal = useCallback((i: number) => {
    // i in 0..REAL_LEN-1
    setAnimate(true);
    setIndex(i + 1);
  }, []);

  const next = useCallback(() => {
    // If at last real slide (index = SLIDES.length - 2), teleport to first real (index=1)
    if (index === SLIDES.length - 2) {
      setAnimate(false);
      setIndex(1);
      // Re-enable animation for subsequent slides
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(true);
      setIndex((i) => i + 1);
    }
  }, [index, SLIDES.length]);

  const prev = useCallback(() => {
    // If at first real slide (index = 1), teleport to last real (index=SLIDES.length - 2)
    if (index === 1) {
      setAnimate(false);
      setIndex(SLIDES.length - 2);
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
  }, [index, SLIDES.length]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [prev, next]
  );

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real families sharing their experiences with our care services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative group hover:transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-100 group-hover:text-purple-200 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonial Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Carousel of Graves */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Families We Care For</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                A glimpse at some of the graves we have transformed and care for.
              </p>

              {/* Carousel (infinite, no scroll) */}
              <div
                className="relative rounded-lg overflow-hidden"
                aria-roledescription="carousel"
                aria-label="Graves we care for"
                onKeyDown={onKeyDown}
                tabIndex={0}
              >
                {/* Viewport */}
                <div className="relative w-full overflow-hidden">
                  {/* Track */}
                  <div
                    className={`flex w-full ${animate ? "transition-transform duration-500 ease-out" : "transition-none"}`}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    role="group"
                  >
                    {SLIDES.map((img, i) => (
                      <div
                        key={`${img.src}-${i}`}
                        className="relative w-full shrink-0"
                        aria-roledescription="slide"
                        aria-label={`Slide ${((i - 1 + REAL_LEN) % REAL_LEN) + 1} of ${REAL_LEN}`}
                      >
                        <div className="relative w-full aspect-[4/5]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            quality={60}
                            fill
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            priority={i === 1}
                          />
                          {(img.caption || img.location) && (
                            <div className="absolute inset-x-0 bottom-0 bg-black/35 backdrop-blur-sm text-white px-4 py-3">
                              <div className="text-sm">
                                {img.caption}
                                {img.location && <span className="text-white/80"> • {img.location}</span>}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controls (infinite) */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/35 hover:bg-black/50 text-white w-10 h-10 rounded-full grid place-items-center"
                >
                  ❮
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/35 hover:bg-black/50 text-white w-10 h-10 rounded-full grid place-items-center"
                >
                  ❯
                </button>

                
                
              </div>
              {/* Dots */}
              <div className="absolute left-0 right-0 bottom-3 flex items-center justify-center gap-2">
                  {GRAVE_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToReal(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`cursor-pointer h-2.5 w-2.5 rounded-full border border-white/70 transition-all ${
                        i === realIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
            </div>
          </div>

          {/* Written Testimonials Summary */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Families Value Most</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Peace of Mind</h4>
                  <p className="text-gray-600 text-sm">
                    Whether you live far away or can&apos;t visit as often as you&apos;d like, you can rest knowing your loved one&apos;s grave is cared for with dignity and respect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Safety & Convenience</h4>
                  <p className="text-gray-600 text-sm">
                    Some families want to visit but don&apos;t feel safe going alone. We go on your behalf and handle everything — so you don&apos;t have to worry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Professional Restoration & Ongoing Care</h4>
                  <p className="text-gray-600 text-sm">
                    From gentle cleaning to full restoration, we help families who have struggled to find someone reliable to maintain or restore a grave.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dedicated Support</h4>
                  <p className="text-gray-600 text-sm">
                    We pride ourselves on quick responses, proactive communication, and a genuine commitment to making your experience seamless.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5/5</div>
                <div className="text-gray-600 mb-2">Average Rating</div>
                <div className="flex justify-center">
                  <StarRating rating={5} />
                </div>
                <div className="text-sm text-gray-500 mt-2">Based on Google reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Join Hundreds of Satisfied Families</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the same peace of mind and professional care that our families rave about.
              Get your personalised plan today.
            </p>
            <button
              onClick={(e)=>handleScrollToSection("contact-form")}
              className="cursor-pointer inline-flex items-center px-8 py-4 bg-white text-secondary hover:bg-gray-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
