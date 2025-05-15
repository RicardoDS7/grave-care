// components/ServicesOverview.tsx
import React from "react";
import { FaBroom, FaSnowflake, FaCameraRetro } from "react-icons/fa";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import type { ReactElement } from "react";

type Service = {
  icon: ReactElement;
  title: string;
  description: string;
  tag?: string;
};

const services: Service[] = [
  {
    icon: <FaBroom className="text-3xl text-brand-primary" />,
    title: "Regular Cleaning & Maintenance",
    description: "Gravesite cleaning, weeding, and general upkeep to keep the area respectful and neat.",
    tag: "Recurring",
  },
  {
    icon: <PiFlowerLotusDuotone className="text-3xl text-brand-primary" />,
    title: "Flower & Wreath Placement",
    description: "Fresh or artificial flower and wreath arrangements placed with care.",
    tag: "One-time",
  },
  {
    icon: <FaSnowflake className="text-3xl text-brand-primary" />,
    title: "Seasonal Care & Decoration",
    description: "Special touches for holidays and seasonal changes—candles, ribbons, ornaments, etc.",
    tag: "Custom",
  },
  {
    icon: <FaCameraRetro className="text-3xl text-brand-primary" />,
    title: "Grave Condition Reports",
    description: "Receive dated photo documentation and notes with every visit.",
    tag: "Optional",
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
              className="bg-white shadow-sm rounded-lg p-6 text-center hover:shadow-md transition"
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
