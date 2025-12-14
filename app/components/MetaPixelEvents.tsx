"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
// Import your safe utility functions
import * as pixel from "../utils/fbpixel";

export default function MetaPixelEvents() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Track PageView on route change
    pixel.trackEvent("PageView");

    // 2. Track Custom View for detailed analytics
    pixel.trackCustomEvent("EnhancedPageView", {
      path: pathname,
      title: document.title,
    });

  }, [pathname]);

  // Expose functions to window for global access (e.g., from inline onclicks)
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      window.trackGraveCareCall = (phoneNumber: string) => {
        pixel.trackPhoneCall(phoneNumber);
      };

      window.trackGraveCareEmail = (emailType: string) => {
        pixel.trackEmailContact(emailType);
      };

      window.trackGraveCareService = (service, action, value) => {
        if (action === 'inquiry') pixel.trackGraveServiceInquiry(service);
        if (action === 'booking') pixel.trackGraveServiceBooking(service, value || 0);
        if (action === 'quote') pixel.trackQuoteRequest(service);
      };

      // Scroll Tracking (Optimized)
      let scrolled = false;
      const onScroll = () => {
        if (!scrolled && window.scrollY > 500) {
          scrolled = true;
          pixel.trackCustomEvent("UserEngagement", { type: "scroll_depth" });
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [pathname]);

  return null;
}