import Footer from '../components/Footer'

import { 
  HeroSection,
  ServicesOverview,
  AboutCemetery,
  FAQSection,
  BreadcrumbSchema,
  TestimonialsSection,
} from './components'
import ContactForm from '../components/ContactForm'
import FloatingWhatsAppButton from '../components/WhatsAppFloatingButton'
import PricingPlans from '../components/PricingPlans'

export default function WesparkCemeteryPage() {
  return (
    <main className="min-h-screen">
      
      {/* Breadcrumb Navigation - Above the fold for better UX and SEO */}
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Newclare Cemetery', url: '/newclare-cemetery' }
        ]}
      />

        {/* Hero Section - Above the fold content */}
        <HeroSection 
          title="Professional Grave Care Services at Newclare Cemetery"
          subtitle="Compassionate upkeep and maintenance — so your loved one’s resting place is always treated with dignity and care."
          primaryCTA="Request a Visit"
          secondaryCTA="View Services"
          backgroundImage="/hero-background-cover.webp"
          altText="Professional grave care services at Wespark Cemetery Johannesburg"
        />

        {/* Services Overview - Core offering highlight */}
        <ServicesOverview 
          title="Our Newclare Cemetery Services"
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

        {/* About Wespark Cemetery Section - Local keyword targeting */}
        <AboutCemetery 
          title="About Newclare Cemetery"
          content="Established as a municipal burial ground in 1932 and originally designated for non-white communities under Johannesburg’s segregation policies, Newclare Cemetery has since become an important site of national heritage. It is the resting place of several iconic figures in South Africa’s freedom struggle — including Walter and Albertina Sisulu — and features a dedicated military plot honouring Commonwealth service members who served during the Second World War."
          highlights={[
            "Historic cemetery established in 1932",
            "Multi-denominational burial ground",
            "Home to 110 Commonwealth War Graves",
            "Final resting place of Walter & Albertina Sisulu"
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

        {/* Pricing Plans - Conversion focused */}
        <PricingPlans />

        {/* FAQ Section - Long-tail keyword targeting */}
        <FAQSection 
          title="Frequently Asked Questions"
          faqs={[
            {
              question: "What grave care services do you offer at Newclare Cemetery?",
              answer: "We provide comprehensive grave care services at Newclare Cemetery including headstone cleaning, grave garden maintenance, grave restoration, fresh flower placement, and regular monitoring visits. All services are performed with respect for the cemetery's diverse denominational areas."
            },
            {
              question: "How often do you visit graves at Newclare Cemetery?",
              answer: "We offer flexible visit schedules ranging from monthly to quarterly visits, depending on your preferences and needs. All visits include photographic updates sent to you so you can see the care provided."
            },
            {
              question: "Do you work in all sections of Newclare Cemetery?",
              answer: "Yes, we provide services across all sections of Newclare Cemetery including the Christian, Jewish, Muslim, Chinese and Greek Orthodox sections, and the military Commonwealth War Graves areas. We're familiar with the specific requirements and traditions of each section."
            },
            {
              question: "What are your rates for grave care at Newclare Cemetery?",
              answer: "Our rates vary depending on the services required and visit frequency. We offer competitive pricing with packages starting from R179 per visit. Contact us for a personalised quote based on your specific needs at Newclare Cemetery."
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
        <Footer 
        />

        <FloatingWhatsAppButton />

      </main>
  )
}