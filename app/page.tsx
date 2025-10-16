"use client";

import HeroSection from "./components/HeroSection";
import ServicesOverview from "./components/ServicesOverview";
import FinalCtaBanner from "./components/CTA";
import BeforeAfterGallery from "./components/BeforeVSAfter";
import TestimonialsCarousel from "./components/Testimonials";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { trackViewContent } from "./utils/fbpixel";
import Script from "next/script";
import FloatingWhatsAppButton from "./components/WhatsAppFloatingButton";

// const TestimonialsCarousel = dynamic(() => import("./components/Testimonials"), {ssr: false});

// const BeforeAfterGallery = dynamic(() => import("./components/BeforeVSAfter"), {ssr: false});

const FaqSection = dynamic(() => import("./components/FAQ"), {ssr: false});

const PricingPlans = dynamic(() => import("./components/PricingPlans"), { ssr: false });

const ServiceAreas = dynamic(() => import("./components/ServiceAreas"), { ssr: false });
const GetStartedForm = dynamic(() => import("./components/GetStartedForm"), { ssr: false });

export default function Home() {

  useEffect(() => {
    trackViewContent();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Grave Maintenance and Cleaning",
    "provider": {
      "@type": "Organization",
      "name": "GraveCare",
    },
    "areaServed": [
      { "@type": "Place", "name": "West Park Cemetery, Johannesburg, South Africa" },
      { "@type": "Place", "name": "Zuurfontein Cemetery, Kempton Park, South Africa" },
      { "@type": "Place", "name": "Heidelberg Cemetery, Heidelberg, South Africa" },
      { "@type": "Place", "name": "Boksburg Cemetery, Boksburg, South Africa" },
      { "@type": "Place", "name": "Edenvale Cemetery, Edenvale, South Africa" },
      { "@type": "Place", "name": "Germiston Cemetery, Germiston, South Africa" },
      { "@type": "Place", "name": "Benoni Cemetery, Benoni, South Africa" },
      { "@type": "Place", "name": "Alberton Cemetery, Alberton, South Africa" },
    ],
    "url": "https://gravecare.co.za/",
  };

  return (
    <main className="min-h-screen bg-brand-background text-brand-foreground font-sans">
      {/* Hero */}
      <HeroSection />

      <ServicesOverview />

      <PricingPlans />

      <BeforeAfterGallery />

      <TestimonialsCarousel />

      <ServiceAreas />

      <FaqSection />

      <FinalCtaBanner />
      
      <GetStartedForm />

      <FloatingWhatsAppButton />

      <Footer />

      <Script
        id="gravecare-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </main>
  );
}
