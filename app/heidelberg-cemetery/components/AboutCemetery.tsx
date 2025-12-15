'use client'

// import { Phone } from 'lucide-react'
import React from 'react'

interface AboutCemeteryProps {
  title: string
  content: string
  highlights: string[]
}

export default function AboutCemetery({ title, content, highlights }: AboutCemeteryProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">{content}</p>

            {/* Key Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Location Details */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cemetery Details
                </h3>
                <div className="space-y-3 text-gray-600">
                {/* <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <a href="tel:+27118396128" className="hover:underline">+27 11 712 6602</a>
                </div> */}
                <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Open daily 08:00 - 17:00</span>
                </div>
                </div>
            </div>
          </div>

          {/* Google Map Side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps?q=Heidelberg%20Cemetery%20Gauteng&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Heidelberg Cemetery Location Map"
                className="rounded-2xl"
              />

              {/* Map Overlay with Cemetery Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Heidelberg Cemetery</h4>
                </div>

                <p className="text-xs text-gray-600 mb-2">Heidelberg, Gauteng</p>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Heidelberg%20Cemetery%20Gauteng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:bg-secondary text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Notable Burials Section removed (no celebrities provided) */}
      </div>
    </section>
  )
}
