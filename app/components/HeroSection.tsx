"use client"
import React from 'react'
import Image from 'next/image'
import { handleScrollToSection } from '../utils/handleScrollToSection'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryCTA: string
  secondaryCTA: string
  backgroundImage: string
  altText: string
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  altText
}: HeroSectionProps) {
  return (
    <section className="relative flex flex-col h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={altText}
          quality={60}
          fill
          className="object-cover object-center w-full"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline - H1 with primary keyword */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle with supporting keywords */}
          <p className="hidden md:block text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Professional & Respectful Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Before & After Photo Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">5-Star Google Reviews</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <button
              onClick={(e)=>handleScrollToSection("contact-form")}
              className="cursor-pointer inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-secondary transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {primaryCTA}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={(e)=>handleScrollToSection("services-overview")}
              className="cursor-pointer inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
            >
              {secondaryCTA}
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}