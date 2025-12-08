// types/fbpixel.ts - Enhanced type definitions for Meta Pixel (2025 version) - TypeScript Compliant

declare global {
  interface Window {
    fbq: (action: string, event: string, parameters?: MetaPixelParameters) => void;
    _fbq: unknown;
    trackGraveCareService: (serviceType: string, action: string, value?: number) => void;
    trackGraveCareContact: (method: string, service?: string) => void;
    trackGraveCareForm: (formType: string, step: string) => void;
    trackGraveCareCall: (phoneNumber: string) => void;
    trackGraveCareEmail: (emailType: string) => void;
    pageLoadTime: number;
  }
}

// Enhanced Meta Pixel parameters interface
export interface MetaPixelParameters {
  // Standard e-commerce parameters
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  
  // Search parameters
  search_string?: string;
  
  // Contact parameters
  method?: string;
  
  // Enhanced parameters for better tracking
  custom_location?: string;
  service_type?: string;
  form_step?: string;
  engagement_type?: string;
  engagement_value?: number;
  button_type?: string;
  email_type?: string;
  phone_number?: string;
  service_interest?: string;
  booking_value?: number;
  quote_type?: string;
  call_source?: string;
  contact_source?: string;
  page_url?: string;
  timestamp?: string;
  source?: string;
  error_type?: string;
  error_message?: string;
  time_spent?: number;
  
  // User data for advanced matching (hashed)
  em?: string;    // hashed email
  ph?: string;    // hashed phone
  fn?: string;    // hashed first name
  ln?: string;    // hashed last name
  ct?: string;    // hashed city
  st?: string;    // hashed state
  zp?: string;    // hashed zip/postal code
  country?: string; // country code
  
  // Additional custom parameters - TypeScript compliant
  [key: string]: string | number | boolean | string[] | undefined;
}

// GraveCare specific service types
export type GraveCareServiceType = 
  | 'grave_cleaning'
  | 'grave_maintenance' 
  | 'flower_placement'
  | 'headstone_cleaning'
  | 'full_service_package'
  | 'memorial_restoration'
  | 'seasonal_maintenance';

// Tracking action types
export type TrackingActionType = 
  | 'inquiry'
  | 'booking' 
  | 'quote'
  | 'contact'
  | 'view'
  | 'engagement';

// Form interaction types
export type FormStepType = 
  | 'start'
  | 'progress' 
  | 'complete'
  | 'abandon';

// Engagement types
export type EngagementType = 
  | 'scroll'
  | 'time'
  | 'click'
  | 'download'
  | 'video_play'
  | 'video_complete';

// Button types
export type ButtonType = 
  | 'cta'
  | 'navigation'
  | 'contact'
  | 'service'
  | 'social'
  | 'download';

// Contact methods
export type ContactMethod = 
  | 'phone'
  | 'email'
  | 'whatsapp'
  | 'form'
  | 'chat';

// Enhanced tracking event interface
export interface TrackingEvent {
  eventName: string;
  parameters?: MetaPixelParameters;
  timestamp?: Date;
  userId?: string;
  sessionId?: string;
}

// User data interface for advanced matching
export interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

// Conversion event interface for Conversions API
export interface ConversionEvent {
  event_name: string;
  event_time: number;
  user_data: {
    em?: string[];
    ph?: string[];
    fn?: string[];
    ln?: string[];
    ct?: string[];
    st?: string[];
    zp?: string[];
    country?: string[];
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string;
    fbp?: string;
  };
  custom_data?: MetaPixelParameters;
  action_source: 'website' | 'phone_call' | 'email' | 'other';
}

// Tracking configuration interface
export interface TrackingConfig {
  pixelId: string;
  enableAdvancedMatching?: boolean;
  enableAutomaticEvents?: boolean;
  enableConversionsAPI?: boolean;
  apiEndpoint?: string;
  debug?: boolean;
}

// Event quality interface for monitoring
export interface EventQuality {
  eventName: string;
  matchQuality: 'poor' | 'fair' | 'good' | 'great';
  score: number;
  issues?: string[];
  recommendations?: string[];
}

// Form data interface for type safety
export interface FormData {
  [key: string]: string | number | boolean;
}

// TypeScript-compliant default export
const fbPixelTypes = {
  // Re-export types for convenience
};

export default fbPixelTypes;