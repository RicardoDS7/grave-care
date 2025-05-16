// components/HowItWorks.tsx

import React from "react";
import {
  ClipboardList,
  MapPin,
  HeartHandshake,
  Camera,
} from "lucide-react";
import { handleScrollToForm } from "../utils/handleScrollToForm";

type Step = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <ClipboardList className="w-8 h-8 text-brand-primary" />,
    title: "1. Choose a Care Plan",
    description:
      "Select a once-off or subscription package that suits your needs.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand-primary" />,
    title: "2. Tell Us the Location",
    description:
      "Share the cemetery and grave details of your loved one. We serve sites across South Africa.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-brand-primary" />,
    title: "3. We Handle Everything",
    description:
      "Our team schedules the visit, cleans and maintains the site, and treats it with care, dignity, and respect.",
  },
  {
    icon: <Camera className="w-8 h-8 text-brand-primary" />,
    title: "4. Get Visit Updates",
    description:
      "We send you notifications and timestamped photos after every visit, so you stay connected — no matter where you are.",
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
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition text-left"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-brand-primary/10">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleScrollToForm}
          className="mt-8 w-full cursor-pointer text-white py-2 px-4 rounded-full 
                      font-medium transition bg-[color:var(--primary)] hover:bg-[color:var(--secondary)] 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--primary)] sm:w-auto"
        >
          Sign-up
        </button>
      </div>

      
    </section>
  );
};

export default HowItWorks;
