"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { trackViewContent } from "./utils/fbpixel";

import { 
  HeroSection,
  ServicesOverview,
  Footer
} from "./components";

// Dynamically import components that have interactive elements
const TestimonialsSection = dynamic(() => import("./components/TestimonialsSection"), {
  ssr: false,
  loading: () => (
    <div className="py-16 bg-gray-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
});

const FAQSection = dynamic(() => import("./components/FAQSection"), {
  ssr: false,
  loading: () => (
    <div className="py-16 animate-pulse">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
});

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="py-16 bg-gray-50 animate-pulse">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
});

const FloatingWhatsAppButton = dynamic(() => import("./components/WhatsAppFloatingButton"), {
  ssr: false
});

// Static import for ServiceAreas since it doesn't have form elements
import ServiceAreas from "./components/ServiceAreas";
import PricingPlans from "./components/PricingPlans";

export default function Home() {
  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Above the fold content */}
      <HeroSection 
        title="Professional Grave Maintenance Services in Gauteng"
        subtitle="Compassionate upkeep and maintenance — so your loved one's resting place is always treated with dignity and care."
        primaryCTA="Request a Visit"
        secondaryCTA="View Services"
        backgroundImage="/hero-background-cover.avif"
        altText="Professional grave care services in Gauteng"
      />

      {/* Services Overview - Core offering highlight */}
      <ServicesOverview 
        title="Our Services"
        subtitle="Comprehensive grave care offering peace of mind, and lasting dignity."
        services={[
          {
            title: "Headstone Cleaning & Restoration",
            description: "Professional cleaning and restoration of memorials using safe, cemetery-approved methods",
            icon: "headstone"
          },
          {
            title: "Grave Garden Maintenance", 
            description: "Regular weeding, planting, and garden care to keep grave sites beautiful year-round",
            icon: "garden"
          },
          {
            title: "Memorial Monitoring",
            description: "Regular visits with photographic updates to ensure your loved one's grave is well-maintained",
            icon: "gravegarden"
          },
          {
            title: "Fresh Flower Service",
            description: "Placement of fresh flowers for special occasions and regular beautification",
            icon: "flowers"
          }
        ]}
      />

      {/* Testimonials - Social proof */}
      <TestimonialsSection 
        title="What Families Say About Our Services"
        testimonials={[
          {
            name: "Martin W.",
            location: "Vanderbijlpark",
            text: "Thank you, Ricardo, for your exceptional work in cleaning the Grave site. Your dedication and attention to detail mean so much to us. With appreciation, Martin and Family.",
            rating: 5
          },
          {
            name: "Sally v. K.", 
            location: "Kempton Park",
            text: "Ricardo from GraveCare gave us excellent service. He sent before photos of the grave and also a video of the grave, once they deep cleaned the tombstone and removed the weeds around the grave. Very happy with his service.",
            rating: 5
          },
        ]}
      />

      {/* Service Areas */}
      <ServiceAreas />

      <PricingPlans />
      
      {/* FAQ Section - Long-tail keyword targeting */}
      <FAQSection 
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "What grave care services do you offer?",
            answer: "We provide comprehensive grave care services including headstone cleaning, grave garden maintenance, grave restoration, fresh flower placement, and regular monitoring visits."
          },
          {
            question: "How often do you visit the graves?",
            answer: "We offer flexible visit schedules ranging from weekly to quarterly visits, depending on your preferences and needs. All visits include photographic updates sent to you so you can see the care provided."
          },
          {
            question: "What are your rates for grave maintenance?",
            answer: "Our rates vary depending on the services required and visit frequency. We offer competitive pricing with packages starting from R179 per visit. Contact us for a personalised quote based on your specific needs."
          },
          {
            question: "Do you provide tombstone services?",
            answer: "Yes we do, but not directly. We work with trusted local stonemasons who can assist with new tombstones, repairs, and restorations."
          }
        ]}
      />

      {/* Contact Form - Conversion focused */}
      <ContactForm />

      {/* Final Call to Action */}
      <Footer />

      <FloatingWhatsAppButton />
    </main>
  );
}