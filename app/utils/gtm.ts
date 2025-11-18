// utils/gtm.ts
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const pushToDataLayer = (eventData: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
    console.log('GTM Event pushed:', eventData);
  } else {
    console.warn('GTM dataLayer not available');
  }
};

// Lead form submission event
export const trackLeadFormSubmit = (formData: {
  frequency: string;
  value?: number;
  currency?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}) => {
  pushToDataLayer({
    event: 'lead_form_submit',
    form_type: 'contact_form',
    service_frequency: formData.frequency,
    value: formData.value || 0,
    currency: formData.currency || 'ZAR',
    user_data: {
      email: formData.email,
      first_name: formData.firstName,
      last_name: formData.lastName,
    },
    // Additional conversion tracking parameters
    conversion_id: 'lead_generation',
    timestamp: new Date().toISOString(),
  });
};

// Other useful GTM events
export const trackFormStart = () => {
  pushToDataLayer({
    event: 'form_start',
    form_type: 'contact_form',
  });
};

export const trackPlanSelection = (plan: string, frequency: string, value: number) => {
  pushToDataLayer({
    event: 'plan_selected',
    plan_name: plan,
    service_frequency: frequency,
    value: value,
    currency: 'ZAR',
  });
};

export const trackFrequencySelection = (frequency: string) => {
  pushToDataLayer({
    event: 'frequency_selected',
    service_frequency: frequency,
  });
};