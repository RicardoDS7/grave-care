"use client";

import React, { useState } from "react";
import { handleScrollToForm } from "../utils/handleScrollToForm";
import FadeInOutSection from "./FadeInOutSection";

type MonthlyPlan = {
  name: string;
  price: number;
  features: string[];
};

type OnceOffPlan = {
  name: string;
  price: number;
  features: string[];
};

const monthlyPlans: MonthlyPlan[] = [
  {
    name: "Basic Care",
    price: 179,
    features: [
      "Monthly cleaning",
      "Lawn edging and light trimming",
      "Weed removal",
      "Deep tombstone cleaning",
      "Before & after photo updates",
    ],
  },
  {
    name: "Premium Care",
    price: 299,
    features: [
      "Monthly cleaning",
      "Seasonal fresh flower replacement valued at R150",
      "Deep tombstone cleaning",
      "Weed clearing and grass trimming",
      "Before & after photo updates",
      "Free anniversary tribute",
    ],
  },
  {
    name: "Family Care",
    price: 499,
    features: [
      "Monthly cleaning for two graves at the same cemetery",
      "+R149/month for each additional grave",
      "Seasonal fresh flower replacement for each grave",
      "Deep tombstone cleaning",
      "Weed clearing and grass trimming",
      "Before & after photo updates",
      "Free anniversary tribute",
    ],
  },
];

const onceOffPlans: OnceOffPlan[] = [
  {
    name: "Basic Care",
    price: 249,
    features: [
      "One-time professional cleaning",
      "Lawn edging and light trimming",
      "Weed removal",
      "Deep tombstone cleaning",
      "Before & after photo updates",
    ],
  },
  {
    name: "Premium Care",
    price: 399,
    features: [
      "One-time professional cleaning",
      "Seasonal fresh flower placement valued at R150",
      "Deep tombstone cleaning",
      "Weed clearing and grass trimming",
      "Before & after photo updates",
    ],
  },
  {
    name: "Full Restoration",
    price: 1249,
    features: [
      "One-time professional cleaning",
      "Premium flower arrangements with vases replaced if damaged valued at R500",
      "Expert tombstone restoration",
      "Headstone lettering touch-up as needed",
      "Gravel top-up or reset",
      "Before & after photo set",
    ],
  },
];

// Helper function to get the current plans based on subscription type
const getCurrentPlans = (isSubscription: boolean) => {
  return isSubscription ? monthlyPlans : onceOffPlans;
};

const PricingPlans: React.FC = () => {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <FadeInOutSection>
      <section id="pricing" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight">
            Choose Your Care Plan
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            Simple pricing with flexible once-off or recurring options.
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                type="button"
                onClick={() => setIsSubscription(true)}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
                  isSubscription ? "bg-brand-primary text-white" : "text-gray-600"
                }`}
              >
                Subscription
              </button>
              <button
                type="button"
                onClick={() => setIsSubscription(false)}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
                  !isSubscription ? "bg-[color:var(--primary)] text-white" : "text-gray-600"
                }`}
              >
                Once-off
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {getCurrentPlans(isSubscription).map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col bg-gray-50 rounded-3xl shadow-sm p-6 text-left border hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p
                  className={`text-3xl font-bold mb-4 ${
                    isSubscription ? "text-[color:var(--primary)]" : "text-[color:var(--primary)]"
                  }`}
                >
                  R{plan.price}
                  <span className="text-sm font-medium text-gray-500">
                    {isSubscription ? "/mo" : " once-off"}
                  </span>
                </p>

                <ul className="text-sm text-gray-700 space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="mt-auto w-full cursor-pointer text-white py-2 px-4 rounded-full font-medium transition bg-[color:var(--primary)] hover:bg-[color:var(--secondary)]"
                >
                  {isSubscription ? "Subscribe Now" : "Book Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInOutSection>
  );
};

export default PricingPlans;