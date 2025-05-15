"use client";

import React, { useState } from "react";
import FadeInOutSection from "./FadeInOutSection";

const cemeteries = [
  "Westpark Cemetery – Johannesburg",
  "Durbanville Memorial Park – Cape Town",
  "Avalon Cemetery – Soweto",
  "Stellawood Cemetery – Durban",
  "Maitland Cemetery – Cape Town",
  "Zandfontein Cemetery – Pretoria",
  "Braamfontein Cemetery – Johannesburg",
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
          We currently serve these cemeteries. Don’t see yours? You can request it below.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mb-12">
          {cemeteries.map((cemetery, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-sm p-4 border hover:shadow-md transition"
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
          <div className="flex gap-3">
            <input
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Enter cemetery name & location"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-brand-primary text-white rounded-md hover:bg-green-700 transition"
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
