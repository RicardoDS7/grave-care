declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const fbq = (...args: any[]) => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq(...args);
  }
};

// Examples
export const trackPageView = () => fbq('track', 'PageView');
export const trackLead = () => fbq('track', 'Lead');
export const trackCustom = (eventName: string, data?: object) =>
  fbq('trackCustom', eventName, data);
