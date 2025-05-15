import React from "react";
import { FaMapMarkerAlt, FaClipboardList, FaHandsHelping, FaCamera } from "react-icons/fa";
import type { ReactElement } from "react";

type Step = {
  icon: ReactElement;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FaMapMarkerAlt className="text-3xl text-brand-primary" />,
    title: "1. Choose the Cemetery",
    description: "Tell us where your loved one is buried. We support cemeteries across South Africa.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-brand-primary" />,
    title: "2. Select Your Package",
    description: "Pick a once-off or subscription plan that fits your needs and budget.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-brand-primary" />,
    title: "3. We Maintain the Grave",
    description: "Our team cleans, maintains, and decorates the site with care and dignity.",
  },
  {
    icon: <FaCamera className="text-3xl text-brand-primary" />,
    title: "4. Receive Photo Updates",
    description: "You’ll get timestamped photos after every visit so you can see the results.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Getting started is simple, and peace of mind is just a few steps away.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-left"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
