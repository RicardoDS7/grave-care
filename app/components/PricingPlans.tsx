"use client";

import React, { useState } from "react";
import { handleScrollToSection } from "../utils/handleScrollToSection";

type MonthlyPlan = {
  name: string;
  price: string;
  features: string[];
};

type OnceOffPlan = {
  name: string;
  price: string;
  features: string[];
};

const monthlyPlans: MonthlyPlan[] = [
  {
    name: "Basic Care",
    price: "R179",
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
    price: "R299",
    features: [
      "Monthly cleaning",
      "Seasonal fresh flower replacement",
      "Deep tombstone cleaning",
      "Weed clearing and grass trimming",
      "Before & after photo updates",
    ],
  },
  {
    name: "Family Care",
    price: "R499",
    features: [
      "Monthly cleaning for two graves at the same cemetery",
      "+R99/month for each additional grave",
      "Seasonal fresh flower replacement for each grave",
      "Deep tombstone cleaning",
      "Weed clearing and grass trimming",
      "Before & after photo updates",
    ],
  },
];

const onceOffPlans: OnceOffPlan[] = [
  {
    name: "Basic Care",
    price: "R249",
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
    price: "R399",
    features: [
      "One-time professional cleaning",
      "Seasonal fresh flower placement",
      "Deep tombstone cleaning",
      "Weed clearing and grass trimming",
      "Before & after photo updates",
    ],
  },
  {
    name: "Full Restoration",
    price: "Request a Quote",
    features: [
      "Leveling and resetting of sunken graves",
      "Tombsrone and memorial repairs",
      "Headstone relettering",
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
      <section id="pricing" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Care Plan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 lg:mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
               Simple pricing with flexible once-off or recurring options.
            </p>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                type="button"
                onClick={() => setIsSubscription(true)}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
                  isSubscription ? "bg-gradient-to-r from-primary to-secondary text-white" : "text-gray-600"
                }`}
              >
                Subscription
              </button>
              <button
                type="button"
                onClick={() => setIsSubscription(false)}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
                  !isSubscription ? "bg-gradient-to-r from-primary to-secondary text-white" : "text-gray-600"
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
                  {plan.price}
                  <span className="text-sm font-medium text-gray-500">
                    {isSubscription ? "/mo" : ""}
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
                  onClick={(e)=>handleScrollToSection("contact-form")}
                  className="mt-auto w-full cursor-pointer text-white py-2 px-4 rounded-lg font-medium transition bg-gradient-to-r from-primary to-secondary hover:scale-105 transition"
                >
                  {isSubscription ? "Subscribe Now" : "Book Now"}
                </button>
    
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default PricingPlans;