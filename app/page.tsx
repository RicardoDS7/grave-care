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


    </main>
  );
}
