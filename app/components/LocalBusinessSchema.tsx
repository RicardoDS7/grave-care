import React from 'react'

interface LocalBusinessSchemaProps {
  businessName: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  email: string
  url: string
  geo: {
    latitude: number
    longitude: number
  }
  openingHours: Array<{
    dayOfWeek: string[]
    opens: string
    closes: string
  }>
  aggregateRating?: {
    ratingValue: string
    reviewCount: string
  }
  priceRange?: string
}

export default function LocalBusinessSchema({
  businessName,
  description,
  address,
  telephone,
  email,
  url,
  geo,
  openingHours,
  aggregateRating,
  priceRange = "$$"
}: LocalBusinessSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name: businessName,
    image: `${url}/images/gravecare-logo.jpg`,
    description: description,
    url: url,
    telephone: telephone,
    email: email,
    priceRange: priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      },
      geoRadius: '50000' // 50km radius
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
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Memorial Monitoring',
            description: 'Regular visits with photographic updates to ensure graves are well-maintained'
          }
        }
      ]
    },
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount
      }
    }),
    sameAs: [
      'https://www.facebook.com/gravecare.co.za', // Replace with actual social media URLs
      'https://www.google.com/maps/place/gravecare', // Replace with actual Google My Business URL
      'https://www.linkedin.com/company/gravecare'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}