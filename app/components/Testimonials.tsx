"use client";

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
    location: "Benoni, SA",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but they exceeded my expectations. The grave looked cleaner than I’ve seen it in years.",
    name: "David K.",
    location: "Boksburg, SA",
    rating: 4,
  },
  {
    quote:
      "Thank you for helping us stay connected to our loved ones. The seasonal flowers are such a thoughtful touch.",
    name: "Nomsa P.",
    location: "Germiston, SA",
    rating: 5,
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

        <div className="bg-gray-50 rounded-3xl shadow-sm p-8 relative h-[260px] sm:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 mt-6 px-4 sm:px-6"
            >
              <p className="text-xl italic text-gray-700 mb-6">“{current.quote}”</p>

              <div className="flex justify-center mb-2">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="font-semibold text-gray-800">{current.name}</p>
              <p className="text-sm text-gray-500">{current.location}</p>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[color:var(--primary)]" : "bg-gray-300"
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
