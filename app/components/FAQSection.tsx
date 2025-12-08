'use client'

import React, { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  faqs: FAQ[]
}

// 1. Utility function to generate the JSON-LD schema object
const generateFaqSchema = (faqs: FAQ[]) => {
  const mainEntity = faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity,
  }
}

const FAQItem = ({ faq, isOpen, onToggle }: {
  faq: FAQ
  index: number
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    // We can also add microdata attributes here for belt-and-suspenders SEO,
    // but JSON-LD is the modern standard. 
    // Example: <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">...</div>
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="cursor-pointer w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-secondary transition-colors duration-200">
          {faq.question}
        </h3>
        <div className={`cursor-pointer transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gray-500 group-hover:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection({
  title,
  faqs
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First FAQ open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // 2. Generate the schema data
  const faqSchemaData = generateFaqSchema(faqs)

  return (
    <section id="faq" className="pt-16 lg:pt-24 bg-gray-50">
      
      {/* 3. INJECT THE JSON-LD SCHEMA */}
      {/* This renders the FAQPage schema ONLY when the component is rendered on the page. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to the most common questions about our services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}