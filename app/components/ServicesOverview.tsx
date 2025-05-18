// components/ServicesOverview.tsx
import React from "react";
import type { ReactElement } from "react";
import {
  Leaf,
  Flower2,
  Brush,
  Camera,
} from "lucide-react";

type Service = {
  icon: ReactElement;
  title: string;
  description: string;
  tag?: string;
};

const services: Service[] = [
  {
    icon: <Leaf className="w-8 h-8 text-brand-primary" />,
    title: "Grave Cleaning & Site Maintenance",
    description:
      "We gently clean headstones, remove weeds, and tidy the surrounding area — keeping your loved one’s resting place beautiful, dignified, and well cared for.",
    tag: "Included in All Plans",
  },
  {
    icon: <Flower2 className="w-8 h-8 text-brand-primary" />,
    title: "Fresh Flowers & Tribute Placement",
    description:
      "Seasonal or custom flower arrangements are thoughtfully placed at the grave — a meaningful way to honour your loved one’s memory, no matter where you are.",
    tag: "Standard & Premium Plans",
  },
  {
    icon: <Brush className="w-8 h-8 text-brand-primary" />,
    title: "Headstone Restoration & Lettering",
    description:
      "We restore weathered headstones by repainting faded lettering and renewing inscriptions — preserving the name and legacy engraved in stone.",
    tag: "Premium & Once-off Plans",
  },
  {
    icon: <Camera className="w-8 h-8 text-brand-primary" />,
    title: "Photo Updates & Flexible Plans",
    description:
      "We’ll keep you connected with clear, timestamped photos after every visit — choose a once-off service or a flexible subscription that fits your needs.",
    tag: "Included in All Plans",
  },
];



const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          What We Do
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide meticulous cleaning, maintenance, and beautification of gravesites — and we&apos;ll keep you updated with photos from each visit.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-3xl p-6 text-center hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              {service.tag && (
                <span className="inline-block mt-4 px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
                  {service.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
