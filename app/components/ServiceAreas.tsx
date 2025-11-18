"use client";

import React from "react";
import Link from "next/link";

const cemeteries = [
  {
    name: "Alberton Cemetery",
    slug: "alberton-cemetery",
    description: "Professional grave care services in Alberton"
  },
  {
    name: "Benoni Cemetery", 
    slug: "benoni-cemetery",
    description: "Compassionate gravesite maintenance in Benoni"
  },
  {
    name: "Boksburg Sub-Regional Cemetery",
    slug: "boksburg-sub-regional-cemetery", 
    description: "Dedicated cemetery care services in Boksburg"
  },
  {
    name: "Edenvale Cemetery",
    slug: "edenvale-cemetery",
    description: "Expert grave maintenance in Edenvale"
  },
  {
    name: "Elspark Cemetery",
    slug: "elspark-cemetery",
    description: "Expert grave maintenance in Edenvale"
  },
  {
    name: "Germiston Cemetery",
    slug: "germiston-cemetery",
    description: "Professional memorial care in Germiston"
  },
  {
    name: "Heidelberg Cemetery",
    slug: "heidelberg-cemetery",
    description: "Respectful grave care in Heidelberg"
  },
  {
    name: "Kromvlei Cemetery",
    slug: "kromvlei-cemetery",
    description: "Respectful grave care in Heidelberg"
  },
  {
    name: "Newclare Cemetery",
    slug: "newclare-cemetery",
    description: "Respectful grave care in Heidelberg"
  },
  {
    name: "Waterfall Cemetery",
    slug: "waterfall-cemetery",
    description: "Respectful grave care in Heidelberg"
  },
  {
    name: "Westpark Cemetery",
    slug: "westpark-cemetery",
    description: "Comprehensive gravesite services in Westpark"
  },
  {
    name: "Zuurfontein Cemetery",
    slug: "zuurfontein-cemetery",
    description: ""
  },
];

const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="bg-gradient-to-br from-stone-50 to-slate-50 py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
            Cemeteries We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We proudly serve families across most major cemeteries across Gauteng. 
          </p>
        </div>

        {/* Cemetery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {cemeteries.map((cemetery, index) => (
            <Link
              key={index}
              href={`/${cemetery.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 lg:p-8 text-center hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col justify-center min-h-[100px] lg:min-h-[100px]">
                <div className="space-y-3 lg:space-y-4">
                  <h3 className="font-semibold text-sm lg:text-base text-slate-800 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {cemetery.name}
                  </h3>
                </div>
                
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceAreas;