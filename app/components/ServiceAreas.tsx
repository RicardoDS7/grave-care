"use client";

import React, { useState } from "react";
import FadeInOutSection from "./FadeInOutSection";

const cemeteries = [
  "Alberton, Gauteng",
  "Benoni, Gauteng",
  "Brakpan, Gauteng",
  "Boksburg, Gauteng",
  "Edenvale, Gauteng",
  "Germiston, Gauteng",
  "Kempton Park, Gauteng",
  "Springs, Gauteng",
];

const ServiceAreas: React.FC = () => {
  const [request, setRequest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request) return;
    alert(`Request submitted for: ${request}`);
    setRequest("");
    // Optional: Hook up to backend or email form service
  };

  return (
    <FadeInOutSection>
    <section id="service-areas" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Our Service Areas
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          We proudly serve families in towns and cities across South Africa.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-left mb-12">
          {cemeteries.map((cemetery, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-4 border hover:shadow-md transition"
            >
              <p className="text-gray-800 font-medium">{cemetery}</p>
            </div>
          ))}
        </div>

        {/* Request Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Can’t find your cemetery? Request it here:
          </label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Enter cemetery name & location"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full"
              required
            />
            <button
              type="submit"
              className="mx-auto px-6 py-2 cursor-pointer bg-[color:var(--primary)] text-white rounded-full hover:bg-[color:var(--secondary)] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  </FadeInOutSection>
  );
};

export default ServiceAreas;
