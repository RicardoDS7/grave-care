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
      "We gently clean headstones, remove weeds, and maintain the surrounding area — ensuring your loved one’s resting place remains dignified and well-kept.",
    tag: "Included in All Plans",
  },
  {
    icon: <Flower2 className="w-8 h-8 text-brand-primary" />,
    title: "Fresh Flowers & Tribute Placement",
    description:
      "Seasonal or custom floral arrangements delivered and placed with care — a beautiful way to honour your loved one’s memory from afar.",
    tag: "Standard & Premium Plans",
  },
  {
    icon: <Brush className="w-8 h-8 text-brand-primary" />,
    title: "Headstone Restoration & Lettering",
    description:
      "We restore faded inscriptions and repaint lettering to preserve the legibility and dignity of the memorial.",
    tag: "Once-off",
  },
  {
    icon: <Camera className="w-8 h-8 text-brand-primary" />,
    title: "Photo Updates & Flexible Plans",
    description:
      "Get peace of mind with timestamped photo proof after every visit. Choose a once-off service or a recurring subscription to suit your needs.",
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
          Compassionate, consistent gravesite care—delivered with dignity and photo proof.
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
