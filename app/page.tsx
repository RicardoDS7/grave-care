"use client";

import Image from "next/image";
import { basePath } from "./utils/basePath";
import GetStartedForm from "./components/GetStartedForm";
import HeroSection from "./components/HeroSection";
import ServicesOverview from "./components/ServicesOverview";
import HowItWorks from "./components/HowItWorks";
import FinalCtaBanner from "./components/CTA";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

const TestimonialsCarousel = dynamic(() => import("./components/Testimonials"), {
  ssr: false,
});

const BeforeAfterGallery = dynamic(() => import("./components/BeforeVSAfter"), {
  ssr: false,
});

const FaqSection = dynamic(() => import("./components/FAQ"), {
  ssr: false,
});

const PricingPlans = dynamic(() => import("./components/PricingPlans"), { ssr: false });

const ServiceAreas = dynamic(() => import("./components/ServiceAreas"), { ssr: false });


export default function Home() {
  return (
    <main className="min-h-screen bg-brand-background text-brand-foreground font-sans">
      {/* Hero */}
      <HeroSection />

      <ServicesOverview />

      <PricingPlans />
      <HowItWorks />

      <TestimonialsCarousel />

      <ServiceAreas />

      <BeforeAfterGallery />

      <FaqSection />

      <FinalCtaBanner />
      
      <GetStartedForm />

      <Footer />


    </main>
  );
}
