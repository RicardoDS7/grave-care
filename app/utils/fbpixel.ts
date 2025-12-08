// utils/fbpixel.ts - Enhanced utility functions for tracking events (2025 version) - TypeScript Compliant
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

// Enhanced event tracking with better error handling and logging
export const trackEvent = (eventName: string, parameters?: MetaPixelParameters): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, parameters);
      
      // Optional: Log for debugging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(`Meta Pixel: ${eventName}`, parameters);
      }
    } catch (error) {
      console.error('Meta Pixel tracking error:', error);
    }
  }
};

export const trackCustomEvent = (eventName: string, parameters?: MetaPixelParameters): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('trackCustom', eventName, parameters);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Meta Pixel Custom: ${eventName}`, parameters);
      }
    } catch (error) {
      console.error('Meta Pixel custom tracking error:', error);
    }
  }
};

// Enhanced predefined tracking functions with better parameters
export const trackLead = (parameters?: MetaPixelParameters): void => {
  const enhancedParams: MetaPixelParameters = {
    content_category: 'lead_generation',
    value: 0,
    currency: 'ZAR',
    ...parameters
  };
  trackEvent('Lead', enhancedParams);
};

export const trackContact = (parameters?: MetaPixelParameters): void => {
  const enhancedParams: MetaPixelParameters = {
    content_category: 'contact',
    content_name: 'Contact Form',
    ...parameters
  };
  trackEvent('Contact', enhancedParams);
};

export const trackCompleteRegistration = (parameters?: MetaPixelParameters): void => {
  const enhancedParams: MetaPixelParameters = {
    content_category: 'registration',
    value: 0,
    currency: 'ZAR',
    ...parameters
  };
  trackEvent('CompleteRegistration', enhancedParams);
};

export const trackViewContent = (parameters?: MetaPixelParameters): void => {
  const enhancedParams: MetaPixelParameters = {
    content_category: 'page_view',
    content_name: typeof document !== 'undefined' ? document.title : 'Unknown',
    ...parameters
  };
  trackEvent('ViewContent', enhancedParams);
};

export const trackInitiateCheckout = (parameters?: MetaPixelParameters): void => {
  const enhancedParams: MetaPixelParameters = {
    content_category: 'checkout',
    currency: 'ZAR',
    ...parameters
  };
  trackEvent('InitiateCheckout', enhancedParams);
};

export const trackPurchase = (
  value: number, 
  currency: string = 'ZAR', 
  parameters?: MetaPixelParameters
): void => {
  const enhancedParams: MetaPixelParameters = {
    content_category: 'purchase',
    value,
    currency,
    ...parameters
  };
  trackEvent('Purchase', enhancedParams);
};

export const trackSearch = (
  searchString: string, 
  parameters?: MetaPixelParameters
): void => {
  const enhancedParams: MetaPixelParameters = {
    search_string: searchString,
    content_category: 'search',
    ...parameters
  };
  trackEvent('Search', enhancedParams);
};

// NEW: GraveCare-specific enhanced tracking functions
export const trackGraveServiceInquiry = (
  serviceType: string,
  location?: string,
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    content_name: serviceType,
    content_category: 'grave_service',
    content_type: 'service_inquiry',
    value: 0,
    currency: 'ZAR',
    custom_location: location || 'Johannesburg',
    ...additionalParams
  };
  
  trackLead(params);
  
  // Also track as custom event for better segmentation
  trackCustomEvent('GraveServiceInquiry', {
    service_type: serviceType,
    custom_location: location || 'Johannesburg',
    source: 'website',
    timestamp: new Date().toISOString()
  });
};

export const trackGraveServiceBooking = (
  serviceType: string,
  value: number,
  location?: string,
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    content_name: serviceType,
    content_category: 'grave_service',
    content_type: 'service_booking',
    value,
    currency: 'ZAR',
    custom_location: location || 'Johannesburg',
    ...additionalParams
  };
  
  trackPurchase(value, 'ZAR', params);
  
  trackCustomEvent('GraveServiceBooking', {
    service_type: serviceType,
    booking_value: value,
    custom_location: location || 'Johannesburg',
    currency: 'ZAR'
  });
};

export const trackQuoteRequest = (
  serviceType: string,
  location?: string,
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    content_name: `${serviceType} Quote`,
    content_category: 'grave_service',
    content_type: 'quote_request',
    value: 0,
    currency: 'ZAR',
    custom_location: location || 'Johannesburg',
    ...additionalParams
  };
  
  trackInitiateCheckout(params);
  
  trackCustomEvent('QuoteRequest', {
    service_type: serviceType,
    custom_location: location || 'Johannesburg',
    quote_type: 'service_quote'
  });
};

export const trackPhoneCall = (
  phoneNumber: string,
  serviceInterest?: string,
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    content_name: 'Phone Call',
    content_category: 'contact',
    method: 'phone',
    phone_number: phoneNumber,
    service_interest: serviceInterest,
    ...additionalParams
  };
  
  trackContact(params);
  
  trackCustomEvent('PhoneCallInitiated', {
    phone_number: phoneNumber,
    service_interest: serviceInterest,
    call_source: 'website'
  });
};

export const trackEmailContact = (
  emailType: string = 'general',
  serviceInterest?: string,
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    content_name: 'Email Contact',
    content_category: 'contact',
    method: 'email',
    email_type: emailType,
    service_interest: serviceInterest,
    ...additionalParams
  };
  
  trackContact(params);
  
  trackCustomEvent('EmailContactInitiated', {
    email_type: emailType,
    service_interest: serviceInterest,
    contact_source: 'website'
  });
};

// NEW: Enhanced form tracking - TypeScript compliant
export const trackFormInteraction = (
  formType: string,
  step: 'start' | 'progress' | 'complete' | 'abandon',
  formData?: Record<string, string | number | boolean>
): void => {
  const baseParams: MetaPixelParameters = {
    content_name: formType,
    content_category: 'form_interaction',
    form_step: step,
    ...formData
  };

  switch (step) {
    case 'start':
      trackCustomEvent('FormStarted', baseParams);
      break;
    case 'progress':
      trackCustomEvent('FormProgress', baseParams);
      break;
    case 'complete':
      trackCompleteRegistration(baseParams);
      trackCustomEvent('FormCompleted', baseParams);
      break;
    case 'abandon':
      trackCustomEvent('FormAbandoned', baseParams);
      break;
  }
};

// NEW: Enhanced engagement tracking
export const trackEngagement = (
  engagementType: 'scroll' | 'time' | 'click' | 'download',
  value?: number,
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    engagement_type: engagementType,
    engagement_value: value,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    ...additionalParams
  };
  
  trackCustomEvent('UserEngagement', params);
};

// NEW: Utility function to track button clicks
export const trackButtonClick = (
  buttonName: string,
  buttonType: 'cta' | 'navigation' | 'contact' | 'service',
  additionalParams?: MetaPixelParameters
): void => {
  const params: MetaPixelParameters = {
    content_name: buttonName,
    button_type: buttonType,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    ...additionalParams
  };
  
  trackCustomEvent('ButtonClick', params);
};

// NEW: Enhanced error tracking for debugging
export const trackError = (
  errorType: string,
  errorMessage: string,
  additionalParams?: MetaPixelParameters
): void => {
  if (process.env.NODE_ENV === 'development') {
    const params: MetaPixelParameters = {
      error_type: errorType,
      error_message: errorMessage,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      ...additionalParams
    };
    
    trackCustomEvent('WebsiteError', params);
  }
};

// Utility function to check if tracking is available
export const isTrackingAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq !== 'undefined';
};

// Utility function to get tracking status
export const getTrackingStatus = (): {
  available: boolean;
  pixelLoaded: boolean;
  userAgent: string;
} => {
  return {
    available: isTrackingAvailable(),
    pixelLoaded: typeof window !== 'undefined' && !!window.fbq,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
  };
};