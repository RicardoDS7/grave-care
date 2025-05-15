"use client";

import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How often is the service done?",
    answer: "We offer once-off, monthly, bi-weekly, or weekly plans. You choose what suits your needs.",
  },
  {
    question: "Do I get proof that the grave was cleaned?",
    answer: "Yes, we send timestamped before-and-after photos after every visit.",
  },
  {
    question: "Can I cancel or change my plan?",
    answer: "Absolutely. You can manage your plan or cancel anytime from your dashboard or by contacting us.",
  },
  {
    question: "Do you clean headstones and remove weeds?",
    answer: "Yes, our team gently cleans headstones, trims surrounding grass, and removes any debris or weeds.",
  },
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
                className="w-full flex justify-between items-center text-left font-medium text-gray-800 text-lg"
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
