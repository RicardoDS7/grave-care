// fbpixel.ts

// Safe wrapper to call fbq
export const fbq = (
  command: 'track' | 'trackCustom' | 'init',
  eventNameOrPixelId: string,
  parameters?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(command, eventNameOrPixelId, parameters);
  }
};

// Common shortcuts
export const trackPageView = (): void => fbq('track', 'PageView');
export const trackLead = (): void => fbq('track', 'Lead');
export const trackCustom = (
  eventName: string,
  data?: Record<string, unknown>
): void => fbq('trackCustom', eventName, data);
