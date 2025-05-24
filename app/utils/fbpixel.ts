declare global {
  interface Window {
    fbq: (
      command: 'track' | 'trackCustom' | 'init',
      eventNameOrPixelId: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

export const fbq = (
  command: 'track' | 'trackCustom' | 'init',
  eventNameOrPixelId: string,
  parameters?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq(command, eventNameOrPixelId, parameters);
  }
};

export const trackPageView = () => fbq('track', 'PageView');
export const trackLead = () => fbq('track', 'Lead');
export const trackCustom = (eventName: string, data?: Record<string, unknown>) =>
  fbq('trackCustom', eventName, data);
