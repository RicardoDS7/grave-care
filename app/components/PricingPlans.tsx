"use client";

import React, { useState } from "react";

type Plan = {
  name: string;
  priceMonthly: number;
  priceOnceOff: number;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Basic",
    priceMonthly: 199,
    priceOnceOff: 299,
    features: ["Monthly clean", "Photo proof with each visit"],
  },
  {
    name: "Standard",
    priceMonthly: 349,
    priceOnceOff: 499,
    features: ["Bi-weekly clean", "Fresh flower placement", "Photo proof"],
  },
  {
    name: "Premium",
    priceMonthly: 499,
    priceOnceOff: 699,
    features: ["Weekly clean", "Seasonal decorations", "Flowers", "Photo & report"],
  },
];

const PricingPlans: React.FC = () => {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <section id="pricing" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Choose Your Care Plan
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Transparent pricing with flexible once-off or recurring options.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsSubscription(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                isSubscription ? "bg-brand-primary text-white" : "text-gray-600"
              }`}
            >
              Subscription
            </button>
            <button
              onClick={() => setIsSubscription(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                !isSubscription ? "bg-brand-primary text-white" : "text-gray-600"
              }`}
            >
              Once-off
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-50 rounded-lg shadow-sm p-6 text-left border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name} Plan</h3>
              <p className="text-3xl font-bold text-brand-primary mb-4">
                R{isSubscription ? plan.priceMonthly : plan.priceOnceOff}
                <span className="text-sm font-medium text-gray-500">
                  {isSubscription ? "/mo" : " once-off"}
                </span>
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-brand-primary text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition">
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
