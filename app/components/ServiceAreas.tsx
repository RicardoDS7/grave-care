"use client";

import React from "react";
import FadeInOutSection from "./FadeInOutSection";

const cemeteries = [
  "Alberton",
  "Benoni",
  "Brakpan", 
  "Boksburg",
  "Centurion",
  "Edenvale",
  "Germiston",
  "Heidelberg",
  "Johannesburg",
  "Kempton Park",
  "Pretoria",
  "Springs",
];

const ServiceAreas: React.FC = () => {

  return (
    <FadeInOutSection>
      <section id="service-areas" className="bg-stone-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight">
              Our Service Areas
            </h2>
            <div className="w-16 h-px bg-slate-300 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We proudly serve families throughout Gauteng with compassionate gravesite care, ensuring your loved one&apos;s resting place is always maintained with dignity and respect.
            </p>
          </div>

          {/* Cemetery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {cemeteries.map((cemetery, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center hover:shadow-md hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <p className="text-slate-700 font-medium text-sm sm:text-base group-hover:text-slate-800 transition-colors">
                  {cemetery}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeInOutSection>
  );
};

export default ServiceAreas;