import type { Metadata } from 'next'

// SEO Metadata for Westpark Cemetery
export const metadata: Metadata = {
  title: 'Westpark Cemetery Grave Care | Professional Maintenance Services',
  description: 'Trusted Westpark Cemetery grave care specialists in Johannesburg. Expert maintenance, cleaning & restoration with before/after photos. Book free consultation today.',
  keywords: [
  'Westpark cemetery',
  'Westpark cemetery grave care', 
  'Westpark cemetery maintenance',
  'grave care Johannesburg',
  'headstone cleaning Westpark',
  'cemetery maintenance Montgomery Park',
  'Westpark cemetery services',
  'grave restoration Johannesburg',
  'memorial care Westpark',
  'cemetery cleaning services'
  ].join(', '),
  openGraph: {
    title: 'Westpark Cemetery Professional Grave Care Services',
    description: 'Trusted grave care specialists at Westpark Cemetery, Johannesburg. Professional maintenance, cleaning & restoration services with photo updates.',
    url: 'https://gravecare.co.za/westpark-cemetery',
    siteName: 'GraveCare.co.za',
    locale: 'en_ZA',
    type: 'website',
  },
  
  alternates: {
    canonical: 'https://gravecare.co.za/westpark-cemetery',
  },
  other: {
    'geo.region': 'ZA-GP',
    'geo.placename': 'Johannesburg',
    'geo.position': '-26.2041;28.0473', // Approximate Westpark Cemetery coordinates
    'ICBM': '-26.2041, 28.0473',
  }
}

// Enhanced Local Business Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Service'],
  name: 'Westpark Cemetery Professional Grave Care Services',
  alternateName: 'GraveCare.co.za Westpark Cemetery Services',
  description: 'Professional grave care and maintenance specialists serving Westpark Cemetery in Montgomery Park, Johannesburg. Expert headstone cleaning, garden maintenance, and memorial restoration across all denominational sections.',
  url: 'https://gravecare.co.za/westpark-cemetery',
  telephone: '+27-68-862-5442',
  email: 'info@gravecare.co.za',
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Montgomery Park',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    postalCode: '2091',
    addressCountry: 'ZA'
  },
  
  areaServed: {
    '@type': 'Place',
    name: 'Westpark Cemetery',
    description: 'Historic cemetery established in 1942 with multi-denominational sections',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Montgomery Park',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA'
    }
  },

  openingHours: [
    'Mo-Fr 08:00-17:00',
    'Sa 08:00-16:00',
    'Su 09:00-15:00'
  ],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Westpark Cemetery Professional Grave Care Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Westpark Cemetery Headstone Cleaning',
        description: 'Professional cleaning and restoration of headstones at Westpark Cemetery using cemetery-approved methods',
        category: 'Headstone Cleaning',
        priceRange: 'R179-R499'
      },
      {
        '@type': 'Offer',
        name: 'Westpark Cemetery Garden Maintenance',
        description: 'Specialized garden care for Westpark Cemetery graves including seasonal planting, weeding, and maintenance',
        category: 'Garden Maintenance',
        priceRange: 'R179-R499'
      },
      {
        '@type': 'Offer',
        name: 'Westpark Cemetery Memorial Monitoring',
        description: 'Regular monitoring visits to Westpark Cemetery with detailed photo updates',
        category: 'Memorial Monitoring',
        priceRange: 'R179-R499'
      },
      {
        '@type': 'Offer',
        name: 'Fresh Flower Service',
        description: 'Placement of fresh flowers for special occasions at Westpark Cemetery grave sites',
        category: 'Flower Service',
        priceRange: 'R179-R499'
      }
    ]
  },

  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '5'
  }
}

export default function WestparkCemeteryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  )
}