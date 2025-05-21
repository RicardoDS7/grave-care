"use client";

import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How often do you clean the graves?",
    answer:
      "We offer once-off, monthly, bi-weekly, or weekly cleaning plans — you choose what works best for you.",
  },
  {
    question: "Do you send photos after cleaning?",
    answer:
      "Yes, we send timestamped before-and-after photos after every visit, so you always know the grave has been cared for.",
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer:
      "Absolutely. You can pause, change, or cancel your plan anytime by contacting us directly.",
  },
  {
  question: "Do you restore or fix old or damaged headstones?",
  answer:
    "We offer light restoration services such as deep cleaning, stain removal, and moss or lichen treatment for weathered headstones. For more advanced repairs — like fixing cracks, re-levelling, or resetting — we can source trusted specialists for you and assist in getting quotes as part of your service request.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We currently operate in the East Rand area. If you're outside this area, please contact us to see if we can accommodate you.",
  },
  {
    question: "Can I add flowers or something special?",
    answer:
      "Yes, we offer optional flower placements and seasonal tributes. You can include these when booking or make a special request.",
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between cursor-pointer items-center text-left font-medium text-gray-800 text-lg"
              >
                {faq.question}
                <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
