import type { Metadata } from 'next'

// SEO Metadata for Boksburg Sub Regional Cemetery
export const metadata: Metadata = {
  title: 'Professional Grave Care & Maintenance Services at Boksburg Sub Regional Cemetery',
  description:
    'Professional grave care and maintenance services at Boksburg Sub Regional Cemetery in Boksburg. Expert headstone cleaning, grave garden maintenance, and memorial care.',
  keywords:
    'Boksburg Sub Regional Cemetery, Boksburg cemetery, grave care Boksburg, grave care Ekurhuleni, headstone cleaning, cemetery maintenance, grave restoration, memorial care, Boksburg cemetery services',
  openGraph: {
    title: 'Professional Grave Care Services at Boksburg Sub Regional Cemetery',
    description:
      'Professional grave care and maintenance services at Boksburg Sub Regional Cemetery in Boksburg. Headstone cleaning, grave garden maintenance, and memorial care.',
    url: 'https://gravecare.co.za/boksburg-sub-regional-cemetery',
    siteName: 'gravecare.co.za',
    images: [
      {
        url: 'https://gravecare.co.za/images/boksburg-sub-regional-cemetery-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional grave care services at Boksburg Sub Regional Cemetery Boksburg',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gravecare.co.za/boksburg-sub-regional-cemetery',
  },
}

// Local Business Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'gravecare.co.za - Boksburg Sub Regional Cemetery Services',
  description:
    'Professional grave care and maintenance services at Boksburg Sub Regional Cemetery in Boksburg and surrounding Ekurhuleni areas.',
  url: 'https://gravecare.co.za/boksburg-sub-regional-cemetery',
  telephone: '+27-68-862-5442',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boksburg',
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
