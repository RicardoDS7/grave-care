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