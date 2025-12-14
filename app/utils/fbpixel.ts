import type { MetaPixelParameters } from "../types/fbpixel";

// Enhanced event tracking with safe guards
export const trackEvent = (eventName: string, parameters?: MetaPixelParameters): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, parameters);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`✅ Pixel Track: ${eventName}`, parameters);
      }
    } catch (error) {
      console.warn('⚠️ Pixel Track Error:', error);
    }
  }
};

export const trackCustomEvent = (eventName: string, parameters?: MetaPixelParameters): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('trackCustom', eventName, parameters);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`✅ Pixel Custom: ${eventName}`, parameters);
      }
    } catch (error) {
      console.warn('⚠️ Pixel Custom Error:', error);
    }
  }
};

// --- Standard Events (Strict Schema) ---

// ADDED: Missing ViewContent function
export const trackViewContent = (parameters?: MetaPixelParameters): void => {
  trackEvent('ViewContent', {
    content_name: typeof document !== 'undefined' ? document.title : 'Unknown Page',
    content_category: 'page_view',
    ...parameters
  });
};

export const trackLead = (parameters?: MetaPixelParameters): void => {
  trackEvent('Lead', {
    content_category: 'lead_generation',
    currency: 'ZAR',
    value: 0,
    ...parameters
  });
};

export const trackContact = (parameters?: MetaPixelParameters): void => {
  trackEvent('Contact', {
    content_name: 'Contact Form',
    ...parameters
  });
};

export const trackPurchase = (value: number, currency: string = 'ZAR', parameters?: MetaPixelParameters): void => {
  trackEvent('Purchase', {
    content_type: 'product',
    value: value,
    currency: currency,
    ...parameters
  });
};

export const trackInitiateCheckout = (parameters?: MetaPixelParameters): void => {
  trackEvent('InitiateCheckout', {
    currency: 'ZAR',
    ...parameters
  });
};

// --- Service Specific Functions (Sanitized) ---

export const trackGraveServiceInquiry = (serviceType: string, location: string = 'Johannesburg'): void => {
  // Standard Event: Keep it clean
  trackLead({
    content_name: serviceType,
    content_category: 'grave_service',
  });

  // Custom Event: Add rich details here
  trackCustomEvent('GraveServiceInquiry', {
    service_type: serviceType,
    location_interest: location,
    timestamp: new Date().toISOString()
  });
};

export const trackGraveServiceBooking = (serviceType: string, value: number, location: string = 'Johannesburg'): void => {
  // Standard Event
  trackPurchase(value, 'ZAR', {
    content_name: serviceType, // e.g. "Cleaning Service"
    content_category: 'grave_service',
  });

  // Custom Event
  trackCustomEvent('GraveServiceBooking', {
    service_type: serviceType,
    booking_value: value,
    location_interest: location
  });
};

export const trackQuoteRequest = (serviceType: string, location: string = 'Johannesburg'): void => {
  trackInitiateCheckout({
    content_name: `${serviceType} Quote`,
    content_category: 'grave_service',
  });

  trackCustomEvent('QuoteRequest', {
    service_type: serviceType,
    location_interest: location
  });
};

// --- Contact Functions (PII Removed) ---

export const trackEmailContact = (emailType: string): void => {
  trackContact({
    content_name: 'Email Contact',
    method: 'email',
    content_category: emailType
  });

  trackCustomEvent('EmailContactInitiated', {
    email_type: emailType
  });
};

export const trackFormInteraction = (
  formType: string, 
  step: 'start' | 'progress' | 'complete', 
  details?: Record<string, string>
): void => {
  // Clean details to remove potential PII before sending
  const safeDetails = { ...details };
  delete safeDetails['email']; // Safety check
  delete safeDetails['phone']; // Safety check
  delete safeDetails['name'];  // Safety check

  if (step === 'start') {
    trackCustomEvent('FormStarted', { form_name: formType, ...safeDetails });
  } else if (step === 'complete') {
    trackEvent('CompleteRegistration', {
      content_name: formType,
      status: 'completed'
    });
  }
};