"use client";

import React, { useState } from "react";
import { handleScrollToForm } from "../utils/handleScrollToForm";
import FadeInOutSection from "./FadeInOutSection";

type Plan = {
  name: string;
  priceMonthly?: number;
  priceOnceOff: number;
  featuresMonthly: string[];
  featuresOnceOff: string[];
};

const plans: Plan[] = [
  {
    name: "Basic",
    priceMonthly: 189,
    priceOnceOff: 249,
    featuresMonthly: [
      "Monthly cleaning",
      "Weed removal",
      "Photo proof after visit",
    ],
    featuresOnceOff: [
      "One-time cleaning",
      "Weed removal",
      "Photo proof after service",
    ],
  },
  {
    name: "Standard",
    priceMonthly: 629,
    priceOnceOff: 699,
    featuresMonthly: [
      "Bi-weekly cleaning",
      "Fresh flower placement",
      "Photo proof",
    ],
    featuresOnceOff: [
      "Full cleaning",
      "Seasonal flower placement",
      "Before & after photo proof",
    ],
  },
  {
    name: "Premium",
    priceMonthly: 1319,
    priceOnceOff: 1499,
    featuresMonthly: [
      "Weekly cleaning",
      "Premium flowers",
      "Headstone lettering touch-up",
      "Before & after photo set",
    ],
    featuresOnceOff: [
      "Deep cleaning",
      "Lettering restoration",
      "Premium flower tribute",
      "Full before & after documentation",
    ],
  },
];

const PricingPlans: React.FC = () => {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <FadeInOutSection>
      <section id="pricing" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Care Plan
          </h2>
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
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col bg-gray-50 rounded-3xl shadow-sm p-6 text-left border hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {plan.name} Care
                </h3>
                <p
                  className={`text-3xl font-bold mb-4 ${
                    isSubscription ? "text-[color:var(--primary)]" : "text-[color:var(--primary)]"
                  }`}
                >
                  R{isSubscription ? plan.priceMonthly : plan.priceOnceOff}
                  <span className="text-sm font-medium text-gray-500">
                    {isSubscription ? "/mo" : " once-off"}
                  </span>
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {(isSubscription ? plan.featuresMonthly : plan.featuresOnceOff).map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className={`mt-auto w-full cursor-pointer text-white py-2 px-4 rounded-full font-medium transition bg-[color:var(--primary)] hover:bg-[color:var(--secondary)]`
                  }
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
