// utils/googleAdsConversion.ts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const gtag_report_conversion = (
  value: number = 179.0,
  currency: string = 'ZAR',
  callback?: () => void
) => {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  
  if (typeof window !== 'undefined' && window.gtag && conversionId && conversionLabel) {
    const send_to = `${conversionId}/${conversionLabel}`;
    
    console.log('Google Ads Conversion:', { send_to, value, currency });
    
    window.gtag('event', 'conversion', {
      send_to: send_to,
      value: value,
      currency: currency,
      event_callback: callback || (() => {
        console.log('Conversion tracked successfully');
      })
    });
    
    return true;
  } else {
    console.warn('Google Ads conversion tracking not available');
    if (callback) callback();
    return false;
  }
};

// Enhanced conversion tracking with user data
export const gtag_report_conversion_enhanced = (
  value: number = 179.0,
  currency: string = 'ZAR',
  userData?: {
    email?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  },
  callback?: () => void
) => {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  
  if (typeof window !== 'undefined' && window.gtag && conversionId && conversionLabel) {
    const send_to = `${conversionId}/${conversionLabel}`;
    
    const conversionData: Record<string, unknown> = {
      send_to: send_to,
      value: value,
      currency: currency,
      event_callback: callback || (() => {
        console.log('Enhanced conversion tracked successfully');
      })
    };
    
    // Add user data for enhanced conversions if provided
    if (userData) {
      conversionData.user_data = userData;
    }
    
    console.log('Google Ads Enhanced Conversion:', conversionData);
    
    window.gtag('event', 'conversion', conversionData);
    
    return true;
  } else {
    console.warn('Google Ads enhanced conversion tracking not available');
    if (callback) callback();
    return false;
  }
};