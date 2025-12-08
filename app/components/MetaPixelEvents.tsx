"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { MetaPixelParameters } from "../types/fbpixel";

declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: MetaPixelParameters) => void;
    trackGraveCareService: (serviceType: string, action: string, value?: number) => void;
    trackGraveCareContact: (method: string, service?: string) => void;
    trackGraveCareForm: (formType: string, step: string) => void;
    trackGraveCareCall: (phoneNumber: string) => void;
    trackGraveCareEmail: (emailType: string) => void;
    pageLoadTime: number;
  }
}

export default function MetaPixelEvents() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      // Enhanced PageView tracking with better parameters
      window.fbq("track", "PageView", {
        content_name: document.title,
        content_category: pathname,
        referrer: document.referrer
      });
      
      // Also track custom page view for better segmentation
      window.fbq("trackCustom", "EnhancedPageView", {
        page_path: pathname,
        timestamp: new Date().toISOString(),
        // Get search params from URL without useSearchParams hook
        search_params: window.location.search
      });
    }
  }, [pathname]);

  // Enhanced tracking functions - making them globally available
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Enhanced service-specific tracking for GraveCare
      window.trackGraveCareService = (serviceType: string, action: string, value?: number) => {
        if (window.fbq) {
          // Standard Meta event
          if (action === 'inquiry') {
            window.fbq('track', 'Lead', {
              content_name: serviceType,
              content_category: 'grave_care',
              value: value || 0,
              currency: 'ZAR'
            });
          } else if (action === 'booking') {
            window.fbq('track', 'Purchase', {
              content_name: serviceType,
              content_category: 'grave_care',
              value: value || 0,
              currency: 'ZAR'
            });
          } else if (action === 'quote') {
            window.fbq('track', 'InitiateCheckout', {
              content_name: `${serviceType} Quote`,
              content_category: 'grave_care',
              value: value || 0,
              currency: 'ZAR'
            });
          }

          // Custom event for better tracking
          window.fbq('trackCustom', 'GraveCareAction', {
            service_type: serviceType,
            action_type: action,
            value: value,
            location: 'Johannesburg',
            page: pathname
          });
        }
      };

      // Enhanced contact tracking
      window.trackGraveCareContact = (method: string, service?: string) => {
        if (window.fbq) {
          window.fbq('track', 'Contact', {
            content_name: 'GraveCare Contact',
            method: method,
            service_interest: service
          });

          window.fbq('trackCustom', 'ContactMethod', {
            contact_method: method,
            service_interest: service,
            page: pathname,
            location: 'Johannesburg'
          });
        }
      };

      // Enhanced form tracking
      window.trackGraveCareForm = (formType: string, step: string) => {
        if (window.fbq) {
          if (step === 'start') {
            window.fbq('track', 'InitiateCheckout', {
              content_name: formType,
              content_category: 'form_start'
            });
          } else if (step === 'complete') {
            window.fbq('track', 'CompleteRegistration', {
              content_name: formType,
              content_category: 'form_complete'
            });
          }

          window.fbq('trackCustom', 'FormInteraction', {
            form_type: formType,
            form_step: step,
            page: pathname
          });
        }
      };

      // Phone call tracking (for click-to-call)
      window.trackGraveCareCall = (phoneNumber: string) => {
        if (window.fbq) {
          window.fbq('track', 'Contact', {
            content_name: 'Phone Call',
            method: 'phone',
            phone_number: phoneNumber
          });

          window.fbq('trackCustom', 'PhoneCall', {
            phone_number: phoneNumber,
            page: pathname,
            timestamp: new Date().toISOString()
          });
        }
      };

      // Email tracking
      window.trackGraveCareEmail = (emailType: string) => {
        if (window.fbq) {
          window.fbq('track', 'Contact', {
            content_name: 'Email Contact',
            method: 'email',
            email_type: emailType
          });

          window.fbq('trackCustom', 'EmailContact', {
            email_type: emailType,
            page: pathname
          });
        }
      };

      // Enhanced scroll tracking for engagement
      let scrollTracked = false;
      const handleScroll = () => {
        if (!scrollTracked && window.scrollY > window.innerHeight * 0.75) {
          scrollTracked = true;
          if (window.fbq) {
            window.fbq('trackCustom', 'EngagedUser', {
              engagement_type: 'scroll_75_percent',
              page: pathname,
              time_on_page: Date.now() - window.pageLoadTime
            });
          }
        }
      };

      // Time on page tracking
      window.pageLoadTime = Date.now();
      window.addEventListener('scroll', handleScroll);
      
      // Track when user is about to leave
      const handleBeforeUnload = () => {
        if (window.fbq) {
          const timeOnPage = Date.now() - window.pageLoadTime;
          if (timeOnPage > 30000) { // More than 30 seconds
            window.fbq('trackCustom', 'EngagedUser', {
              engagement_type: 'time_on_page',
              time_spent: timeOnPage,
              page: pathname
            });
          }
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [pathname]);

  return null;
}