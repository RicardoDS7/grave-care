import type { Metadata } from 'next'

// SEO Metadata for Kromvlei Cemetery
export const metadata: Metadata = {
  title: 'Professional Grave Care & Maintenance Services at Kromvlei Cemetery',
  description:
    'Professional grave care and maintenance services at Kromvlei Cemetery in Alberton. Expert headstone cleaning, grave garden maintenance, and memorial care.',
  keywords:
    'Kromvlei cemetery, grave care Alberton, grave care Ekurhuleni, headstone cleaning, cemetery maintenance, grave restoration, memorial care, Kromvlei cemetery services',
  openGraph: {
    title: 'Professional Grave Care Services at Kromvlei Cemetery',
    description:
      'Professional grave care and maintenance services at Kromvlei Cemetery in Alberton. Headstone cleaning, grave garden maintenance, and memorial care.',
    url: 'https://gravecare.co.za/kromvlei-cemetery',
    siteName: 'gravecare.co.za',
    images: [
      {
        url: 'https://gravecare.co.za/images/kromvlei-cemetery-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional grave care services at Kromvlei Cemetery Alberton',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gravecare.co.za/kromvlei-cemetery',
  },
}

// Local Business Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'gravecare.co.za - Kromvlei Cemetery Services',
  description:
    'Professional grave care and maintenance services at Kromvlei Cemetery in Alberton and surrounding Ekurhuleni areas.',
  url: 'https://gravecare.co.za/kromvlei-cemetery',
  telephone: '+27-68-862-5442',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alberton',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'Ekurhuleni',
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
          description:
            'Gentle, cemetery-approved cleaning of headstones and memorial surfaces.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grave Garden Maintenance',
          description:
            'Weeding, tidying, and general upkeep to keep grave sites neat and respectful.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Memorial Monitoring',
          description:
            'Scheduled grave visits with photographic updates for peace of mind.',
        },
      },
    ],
  },
}

export default function CemeteryLayout({
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
