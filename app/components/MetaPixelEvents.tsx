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

  // Expose functions to window for global access
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      // Initialize page load time if not already set
      if (!window.pageLoadTime) {
        window.pageLoadTime = Date.now();
      }

      window.trackGraveCareEmail = (emailType: string) => {
        pixel.trackEmailContact(emailType);
      };

      window.trackGraveCareService = (service, action, value) => {
        if (action === 'inquiry') pixel.trackGraveServiceInquiry(service);
        if (action === 'booking') pixel.trackGraveServiceBooking(service, value || 0);
        if (action === 'quote') pixel.trackQuoteRequest(service);
      };

      // --- SCROLL TRACKING ---
      let scrolled = false;
      const onScroll = () => {
        if (!scrolled && window.scrollY > 500) {
          scrolled = true;
          pixel.trackCustomEvent("UserEngagement", { type: "scroll_depth" });
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      
      // --- MODERN 'TIME ON PAGE' TRACKING (Fixes Deprecation Warning) ---
      // We use 'visibilitychange' instead of 'beforeunload'/'unload'
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          // The user is leaving the page or switching tabs
          const timeOnPage = Date.now() - (window.pageLoadTime || Date.now());
          
          if (timeOnPage > 10000) { // Only track if they stayed > 10 seconds
             // Use navigator.sendBeacon if possible as it's more reliable during page unload
             // But for pixel simplicity, we call our safe wrapper
             pixel.trackCustomEvent('EngagedUser', {
                engagement_type: 'time_on_page',
                time_spent: timeOnPage,
                page: pathname
             });
          }
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [pathname]);

  return null;
}