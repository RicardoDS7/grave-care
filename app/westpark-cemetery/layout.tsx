import type { Metadata } from 'next'

// SEO Metadata for Westpark Cemetery
export const metadata: Metadata = {
  title: 'Professional Grave Care & Maintenance Services at Westpark Cemetery',
  description: 'Expert grave maintenance and care services at Westpark Cemetery in Johannesburg. Professional headstone cleaning, garden maintenance, and grave restoration.',
  keywords: 'Westpark cemetery, grave care Johannesburg, headstone cleaning, cemetery maintenance, grave restoration, memorial care, Westpark cemetery services',
  openGraph: {
    title: 'Professional Grave Care Services at Westpark Cemetery',
    description: 'Expert grave maintenance and care services at Westpark Cemetery in Johannesburg. Professional headstone cleaning, garden maintenance, and grave restoration.',
    url: 'https://gravecare.co.za/westpark-cemetery',
    siteName: 'GraveCare.co.za',
    images: [{
      url: 'https://gravecare.co.za/images/westpark-cemetery-services-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional grave care services at Westpark Cemetery Johannesburg'
    }],
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gravecare.co.za/westpark-cemetery',
  },
}

// Local Business Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'GraveCare.co.za - Westpark Cemetery Services',
  description: 'Professional grave care and maintenance services at Westpark Cemetery in Johannesburg.',
  url: 'https://gravecare.co.za/westpark-cemetery',
  telephone: '+27-68-862-5442',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA'
  },
  serviceArea: {
    '@type': 'City',
    name: 'Johannesburg'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Grave Care Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Headstone Cleaning',
          description: 'Professional cleaning and restoration of headstones and memorial stones'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grave Garden Maintenance',
          description: 'Regular maintenance of grave gardens including weeding, planting, and care'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Memorial Restoration',
          description: 'Restoration and repair of damaged memorials and monuments'
        }
      }
    ]
  }
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What grave care services do you offer at Westpark Cemetery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide comprehensive grave care services at Westpark Cemetery including headstone cleaning, grave garden maintenance, grave restoration, fresh flower placement, and regular monitoring visits. All services are performed with respect for the cemetery\'s diverse denominational areas.'
      }
    },
    {
      '@type': 'Question',
      name: 'How often do you visit graves at Westpark Cemetery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer flexible visit schedules ranging from weekly to quarterly visits, depending on your preferences and needs. All visits include photographic updates sent to you so you can see the care provided.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you work in all sections of Westpark Cemetery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide services across all sections of Westpark Cemetery including the Christian, Jewish, Muslim, Chinese and Greek Orthodox sections, and the military Commonwealth War Graves areas. We\'re familiar with the specific requirements and traditions of each section.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are your rates for grave care at Westpark Cemetery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our rates vary depending on the services required and visit frequency. We offer competitive pricing with packages starting from R179 per visit. Contact us for a personalised quote based on your specific needs at Westpark Cemetery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide tombstone services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes we do, but not directly. We work with trusted local stonemasons who can assist with new tombstones, repairs, and restorations.'
      }
    }
  ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}