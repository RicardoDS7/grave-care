'use client'
import { Phone } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'

interface AboutCemeteryProps {
  title: string
  content: string
  highlights: string[]
}

interface NotableResident {
  name: string
  description: string
  category: string
  years: string
  imageUrl: string
}

const NotableResidentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const notableResidents: NotableResident[] = [
    {
      "name": "Walter Sisulu",
      "description": "Prominent anti-apartheid activist and leader of the ANC; served 26 years on Robben Island",
      "category": "Freedom Fighter",
      "years": "1912-2003",
      "imageUrl": "https://pbs.twimg.com/media/ChrVBzOVEAAfpE1.jpg"
    },
    {
      "name": "Albertina Sisulu",
      "description": "Veteran anti-apartheid activist, nurse, and founder co-president of the United Democratic Front, known as ‘Ma Sisulu’",
      "category": "Freedom Fighter",
      "years": "1918-2011",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt237HTGpoANiR4BY-svgMaGXfGsdzPPGbBV3UVaMl2Vyay2bbInCzOCwszEdIR2UQOOSCyFRqN8hpRqWemZgzd1ae0puufRLoGTpq5zw&s=10"
    },
    {
      "name": "Rahima Moosa",
      "description": "Leader in the women’s anti-pass-laws movement and prominent in the 1956 Women’s March",
      "category": "Freedom Fighter",
      "years": "1922-1993",
      "imageUrl": "data:image/jpeg;base64,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"
    }

  ]

  // Get items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 3 : 1 // 3 items on md+ screens, 1 on mobile
    }
    return 3 // fallback for SSR
  }

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide)

  // Update items per slide on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide())
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial value

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(notableResidents.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide
    return notableResidents.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 px-6">
          {getCurrentSlideItems().map((resident, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:scale-105"
            >
              {/* Photo */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={resident.imageUrl}
                  alt={resident.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                          ${resident.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      `
                    }
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-1 text-lg">
                  {resident.name}
                </h4>
                <p className="text-sm text-secondary font-medium mb-2">
                  {resident.category} • {resident.years}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {resident.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-0 top-1/2 -translate-y-12 -translate-x-6 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-secondary transition-all duration-300 hover:scale-110"
        aria-label="Previous residents"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-0 top-1/2 -translate-y-12 translate-x-6 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-secondary transition-all duration-300 hover:scale-110"
        aria-label="Next residents"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-secondary scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

interface AboutCemeteryProps {
  title: string
  content: string
  highlights: string[]
}

export default function AboutWesparkCemetery({
  title,
  content,
  highlights
}: AboutCemeteryProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {content}
            </p>

            {/* Key Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <a href="tel:+27118396128" className="hover:underline">+27 11 712 6602</a>
                </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.1234567890123!2d27.95899!3d-26.19571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95000000000001%3A0x0!2sNewclare%20Cemetery!5e0!3m2!1sen!2sza!4v0000000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Newclare Cemetery Location Map"
                className="rounded-2xl"
              />

              
              {/* Map Overlay with Cemetery Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Newclare Cemetery</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  Johannesburg, Gauteng
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <a
                    href="https://www.google.com/maps/dir//Newclare+Cemetery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:bg-secondary text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Notable Burials Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notable Celebrities of Newclare Cemetery
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Newclare Cemetery serves as the final resting place for many significant figures in South African history, 
            including struggle veterans, cultural icons, and community leaders who helped shape our nation.
          </p>
          
          <NotableResidentsCarousel />
        </div>
      </div>
    </section>
  )
}