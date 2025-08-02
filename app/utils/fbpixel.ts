// utils/fbpixel.ts - Utility functions for tracking events
import type { MetaPixelParameters } from '../types/fbpixel';

// Use the same fbq declaration as MetaPixel.tsx
declare global {
  interface Window {
    fbq: {
      (...args: any[]): void;
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      push?: any;
      loaded?: boolean;
      version?: string;
    };
  }
}

export const trackEvent = (eventName: string, parameters?: MetaPixelParameters) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackCustomEvent = (eventName: string, parameters?: MetaPixelParameters) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Predefined tracking functions
export const trackLead = (parameters?: MetaPixelParameters) => {
  trackEvent('Lead', parameters);
};

export const trackContact = (parameters?: MetaPixelParameters) => {
  trackEvent('Contact', parameters);
};

export const trackCompleteRegistration = (parameters?: MetaPixelParameters) => {
  trackEvent('CompleteRegistration', parameters);
};

export const trackViewContent = (parameters?: MetaPixelParameters) => {
  trackEvent('ViewContent', parameters);
};

export const trackInitiateCheckout = (parameters?: MetaPixelParameters) => {
  trackEvent('InitiateCheckout', parameters);
};

export const trackPurchase = (
  value: number, 
  currency: string = 'ZAR', 
  parameters?: MetaPixelParameters
) => {
  trackEvent('Purchase', {
    value,
    currency,
    ...parameters
  });
};

export const trackSearch = (
  searchString: string, 
  parameters?: MetaPixelParameters
) => {
  trackEvent('Search', {
    search_string: searchString,
    ...parameters
  });
};