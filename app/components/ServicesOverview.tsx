"use client"
import React from 'react'
import {GiGardeningShears, GiGraveFlowers, GiTombstone } from 'react-icons/gi'
import { PiFlowerTulip } from 'react-icons/pi'
import { handleScrollToSection } from '../utils/handleScrollToSection'


interface Service {
  title: string
  description: string
  icon: string
}

interface ServicesOverviewProps {
  title: string
  subtitle: string
  services: Service[]
}

const iconComponents = {
  headstone: (
    <GiTombstone className="w-12 h-12" />
  ),
  garden: (
    <GiGardeningShears className="w-12 h-12" />
  ),
  gravegarden: (
    <GiGraveFlowers className="w-12 h-12" />
  ),
  flowers: (
    <PiFlowerTulip className="w-12 h-12" />
  )
}

export default function ServicesOverview({
  title,
  subtitle,
  services
}: ServicesOverviewProps) {
  return (
    <section id="services-overview" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 text-primary rounded-full mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {iconComponents[service.icon as keyof typeof iconComponents]}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Simple 3-Step Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-2xl font-bold mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Free Consultation
              </h4>
              <p className="text-gray-600">
                We visit the grave, assess its condition, and listen to your wishes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-2xl font-bold mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Personalised care plan
              </h4>
              <p className="text-gray-600">
                We create a plan based on the number of graves, your preferred frequency, and the services you want.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-2xl font-bold mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Ongoing care & updates
              </h4>
              <p className="text-gray-600">
                Regular professional maintenance plus before-and-after photos after every visit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            onClick={()=>handleScrollToSection("contact-form")}
            className="cursor-pointer inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:bg-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Book a Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}