import { BrushIcon, CameraIcon, FlowerIcon, LeafIcon } from "lucide-react";
import React from "react";
import type { ReactElement } from "react";

type Service = {
  icon: ReactElement;
  title: string;
  description: string;
  tag?: string;
  tagColor?: "primary" | "secondary" | "tertiary";
};

const services: Service[] = [
  {
    icon: <LeafIcon color="#815AF7"/>,
    title: "Grave Cleaning & Site Maintenance",
    description:
      "We gently clean headstones, remove weeds, and tidy the surrounding area — keeping your loved one's resting place beautiful, dignified, and well cared for.",
    tag: "Included in All Plans",
    tagColor: "primary",
  },
  {
    icon: <FlowerIcon color="#815AF7"/>,
    title: "Fresh Flowers & Tribute Placement",
    description:
      "Seasonal or custom flower arrangements are thoughtfully placed at the grave — a meaningful way to honour your loved one's memory, no matter where you are.",
    tag: "Standard & Premium Plans",
    tagColor: "primary",
  },
  {
    icon: <BrushIcon color="#815AF7"/>,
    title: "Headstone Restoration & Lettering",
    description:
      "We restore weathered headstones by repainting faded lettering and renewing inscriptions — preserving the name and legacy engraved in stone.",
    tag: "Premium & Once-off Plans",
    tagColor: "primary",
  },
  {
    icon: <CameraIcon color="#815AF7"/>,
    title: "Photo Updates & Flexible Plans",
    description:
      "We'll keep you connected with clear, timestamped photos after every visit — choose a once-off service or a flexible subscription that fits your needs.",
    tag: "Included in All Plans",
    tagColor: "primary",
  },
];

const getTagStyles = (tagColor?: "primary" | "secondary" | "tertiary") => {
  switch (tagColor) {
    case "primary":
      return "bg-primary/20 text-[var(--secondary)] border border-[var(--secondary)]";
    case "secondary":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "tertiary":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-50 text-slate-700 border border-slate-200";
  }
};

const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight">
            What We Do
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide meticulous cleaning, maintenance, and beautification of gravesites — and we&apos;ll keep you updated with photos from each visit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-stone-50 border border-stone-200 rounded-xl p-8 text-center hover:bg-white hover:shadow-lg hover:border-stone-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-800 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tag */}
                {service.tag && (
                  <div className="pt-2">
                    <span className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full ${getTagStyles(service.tagColor)}`}>
                      {service.tag}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;