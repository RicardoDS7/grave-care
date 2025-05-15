"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "GraveCare helped us honour my mom’s memory beautifully. The photos meant the world to us since we live overseas.",
    name: "Lebo M.",
    location: "Johannesburg, SA",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but they exceeded my expectations. The grave looked cleaner than I’ve seen it in years.",
    name: "David K.",
    location: "Cape Town, SA",
    rating: 4,
  },
  {
    quote:
      "Thank you for helping us stay connected to our loved ones. The seasonal flowers are such a thoughtful touch.",
    name: "Nomsa P.",
    location: "Durban, SA",
    rating: 5,
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrentIndex(index);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-10">
          Heartfelt feedback from families we’ve served.
        </p>

        <div className="bg-gray-50 rounded-lg shadow-sm p-8 relative">
          <p className="text-xl italic text-gray-700 mb-6">“{current.quote}”</p>

          <div className="flex justify-center mb-2">
            {Array.from({ length: current.rating }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>

          <p className="font-semibold text-gray-800">{current.name}</p>
          <p className="text-sm text-gray-500">{current.location}</p>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-brand-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
