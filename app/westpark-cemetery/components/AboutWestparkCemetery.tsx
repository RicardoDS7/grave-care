'use client'
import { Phone } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'

interface AboutWesparkCemeteryProps {
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
      name: "Beyers Naudé",
      description: "Prominent anti-apartheid activist and cleric",
      category: "Freedom Fighter",
      years: "1915-2004",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Christiaan_Frederik_Beyers_Naud%C3%A9_%281972%29.jpg/800px-Christiaan_Frederik_Beyers_Naud%C3%A9_%281972%29.jpg"
    },
    {
      name: "Ahmed Kathrada",
      description: "Freedom fighter and adviser to Nelson Mandela",
      category: "Freedom Fighter", 
      years: "1929-2017",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kathrada_coons_crop.jpg"
    },
    {
      name: "Joe Mafela",
      description: "Beloved South African actor and comedian",
      category: "Cultural Icon",
      years: "1942-2017",
      imageUrl: "https://ifp.org.za/wp-content/uploads/2017/03/c21e8fa27d8946abb25748974c7ac19b.jpg"
    },
    {
      name: "Jacob 'Baby Jake' Matlala",
      description: "World champion boxer from Meadowlands",
      category: "Sports Icon",
      years: "1962-2013",
      imageUrl: "https://mg.co.za/wp-content/uploads/2013/12/03b27ad1-2013-12-12-baby-jake-matlala-the-giant-of-the-ring-image.jpg"
    },
    {
      name: "Johnny Clegg",
      description: "Singer and activist blending Zulu and Western music",
      category: "Music Icon",
      years: "1953-2019",
      imageUrl: "https://www.rollingstone.com/wp-content/uploads/2019/07/johnny-clegg-90-1.jpg"
    },
    {
      name: "AKA",
      description: "Award-winning South African rapper",
      category: "Music Icon",
      years: "1988-2023",
      imageUrl: "https://unorthodoxreviews.com/wp-content/uploads/2020/08/South-African-Rapper-Aka.jpg"
    },
    {
      name: "Jessie Duarte",
      description: "ANC leader and lifelong anti-apartheid activist",
      category: "Freedom Fighter",
      years: "1953-2022",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn6-_RA6uMw30q7FMiQnv7nzlQ-vIMHhC5URpKHkHCg5YrI6mdKI7kEe-l0hASUgawZHEOv1IrN__Bk5LXhKq1446Aqx5RngRY-dwgrw"
    },
    {
      name: "Mandoza",
      description: "Kwaito singer famed for his hit song Nkalakatha",
      category: "Music Icon",
      years: "1978-2016",
      imageUrl: "https://musicafricawakemedia.wordpress.com/wp-content/uploads/2016/09/5946951791280128-png-1031c397842-clipular.jpg?w=640"
    },
    {
      name: "Vuyo Mbuli",
      description: "Celebrated television presenter and news anchor",
      category: "Cultural Icon",
      years: "1967-2013",
      imageUrl: "https://www.sabcnews.com/sabcnews/wp-content/uploads/2017/12/2012-02-13_dacd56004a268e33b4abbdcba7090d3d_Vuyo-Mbuli.jpg"
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

interface AboutWesparkCemeteryProps {
  title: string
  content: string
  highlights: string[]
}

export default function AboutWesparkCemetery({
  title,
  content,
  highlights
}: AboutWesparkCemeteryProps) {
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
                  <a href="tel:+27118396128" className="hover:underline">+27 11 839 6128</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Open daily 07:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.1736842647746!2d27.98762797549516!3d-26.163744977063495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a0f0f0f0f0f0%3A0x0!2sWestpark%20Cemetery!5e0!3m2!1sen!2sza!4v1635000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Westpark Cemetery Location Map"
                className="rounded-2xl"
              />
              
              {/* Map Overlay with Cemetery Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-gray-900 text-sm">Westpark Cemetery</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  Johannesburg, Gauteng
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <a
                    href="https://www.google.com/maps/dir//Westpark+Cemetery,+Montgomery+Park,+Johannesburg"
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
            Notable Celebrities of Westpark Cemetery
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Westpark Cemetery serves as the final resting place for many significant figures in South African history, 
            including struggle veterans, cultural icons, and community leaders who helped shape our nation.
          </p>
          
          <NotableResidentsCarousel />
        </div>
      </div>
    </section>
  )
}