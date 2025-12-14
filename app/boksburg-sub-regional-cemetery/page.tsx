import Footer from '../components/Footer'

import {
  HeroSection,
  ServicesOverview,
  FAQSection,
  BreadcrumbSchema,
  TestimonialsSection,
} from '../components'
import ContactForm from '../components/ContactForm'
import FloatingWhatsAppButton from '../components/WhatsAppFloatingButton'
import PricingPlans from '../components/PricingPlans'
import AboutCemetery from './components/AboutCemetery'

export default function BoksburgSubRegionalCemeteryPage() {
  return (
    <main className="min-h-screen">

      {/* Breadcrumb Navigation - Above the fold for better UX and SEO */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Boksburg Sub Regional Cemetery', url: '/boksburg-sub-regional-cemetery' },
        ]}
      />

      {/* Hero Section - Above the fold content */}
      <HeroSection
        title="Professional Grave Care Services at Boksburg Sub-Regional Cemetery"
        subtitle="Respectful grave upkeep and maintenance — so your loved one’s resting place stays dignified, clean, and cared for."
        primaryCTA="Request a Visit"
        secondaryCTA="View Services"
        backgroundImage="/hero-background-cover.avif"
        altText="Professional grave care services at Boksburg Sub Regional Cemetery, Boksburg"
      />

      {/* Services Overview - Core offering highlight */}
      <ServicesOverview
        title="Our Boksburg Sub-Regional Cemetery Services"
        subtitle="Reliable grave care that brings peace of mind — even when you can’t visit in person."
        services={[
          {
            title: "Headstone Cleaning & Restoration",
            description:
              "Gentle, cemetery-appropriate cleaning to restore headstones and memorial surfaces safely.",
            icon: "headstone",
          },
          {
            title: "Grave Garden Maintenance",
            description:
              "Weeding, tidying, light planting, and general upkeep to keep the site neat year-round.",
            icon: "garden",
          },
          {
            title: "Memorial Monitoring",
            description:
              "Scheduled visits with photo updates, so you always know the grave is being cared for.",
            icon: "gravegarden",
          },
          {
            title: "Fresh Flower Service",
            description:
              "Fresh flowers placed for birthdays, anniversaries, holidays, or whenever you request.",
            icon: "flowers",
          },
        ]}
      />

      {/* About Boksburg Sub Regional Cemetery Section - Local keyword targeting */}
      <AboutCemetery
        title="About Boksburg Sub-Regional Cemetery"
        content="Boksburg Sub-Regional Cemetery is a large municipal cemetery serving families across Boksburg and the greater Ekurhuleni region. Due to its size and exposure to the elements, grave sites can become overgrown or weathered over time — especially when families are unable to visit regularly. Our role is to provide respectful, consistent upkeep so graves remain clean, neat, and cared for."
        highlights={[
          "Major municipal cemetery serving the Boksburg area",
          "Support for once-off or recurring grave maintenance",
          "Photo updates for families who can’t visit in person",
          "Services delivered in line with cemetery rules",
        ]}
      />

      {/* Testimonials - Social proof */}
      <TestimonialsSection
        title="What Families Say About Our Cemetery Services"
        testimonials={[
          {
            name: "Martin W.",
            location: "Vanderbijlpark",
            text: "Thank you, Ricardo, for your exceptional work in cleaning the Grave site. Your dedication and attention to detail mean so much to us. With appreciation, Martin and Family.",
            rating: 5,
          },
          {
            name: "Sally v. K.",
            location: "Kempton Park",
            text: "Ricardo from GraveCare gave us excellent service. He sent before photos of the grave and also a video of the grave, once they deep cleaned the tombstone and removed the weeds around the grave. Very happy with his service.",
            rating: 5,
          },
        ]}
      />

      {/* Pricing Plans - Conversion focused */}
      <PricingPlans />

      {/* FAQ Section - Long-tail keyword targeting */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What grave care services do you offer at Boksburg Sub-Regional Cemetery?",
            answer:
              "We provide grave cleaning, headstone cleaning, grave garden tidying (weeding and general upkeep), fresh flower placement, and scheduled monitoring visits with photo updates — all tailored to Boksburg Sub-Regional Cemetery requirements.",
          },
          {
            question: "How often can you visit a grave at Boksburg Sub-Regional Cemetery?",
            answer:
              "You can book once-off visits or set up a recurring schedule (monthly, bi-monthly, or quarterly). Each visit includes clear before-and-after photos, so you can see exactly what was done.",
          },
          {
            question: "Do you service all areas within Boksburg Sub-Regional Cemetery?",
            answer:
              "Yes — we can assist across Boksburg Sub Regional Cemetery. If a specific section has special rules or access requirements, we’ll confirm what’s allowed before work begins to ensure full compliance.",
          },
          {
            question: "What are your rates for grave care at Boksburg Sub-Regional Cemetery?",
            answer:
              "Pricing depends on the condition of the grave, the services needed, and how often you’d like visits. Packages start from R179 per visit, and we can quote you quickly once we know what you need.",
          },
          {
            question: "Do you provide tombstone repairs or replacements?",
            answer:
              "We don’t manufacture tombstones directly, but we can refer you to trusted stonemasons for repairs, restorations, and new tombstones if needed.",
          },
        ]}
      />

      {/* Contact Form - Conversion focused */}
      <ContactForm />

      {/* Final Call to Action */}
      <Footer />

      <FloatingWhatsAppButton />

    </main>
  )
}
