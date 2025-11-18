'use client';

import { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { trackLead } from '../utils/fbpixel';
import { trackLeadFormSubmit, trackFormStart, trackFrequencySelection } from '../utils/gtm';
import { gtag_report_conversion_enhanced } from '../utils/googleAdsConversions';

type FormState = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  cemetery: string;
  reference: string;
  frequency: string;
  message?: string;
};

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
};

function InputField({ label, name, type = 'text', value, onChange, error, placeholder }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
        required
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export default function GetStartedForm() {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [hasTrackedFormStart, setHasTrackedFormStart] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    cemetery: '',
    reference: '',
    frequency: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Track form start when user begins interacting
  useEffect(() => {
    if (!hasTrackedFormStart && (form.firstName || form.lastName || form.email)) {
      trackFormStart();
      setHasTrackedFormStart(true);
    }
  }, [form.firstName, form.lastName, form.email, hasTrackedFormStart]);

  const resetForm = () => {
    setForm({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      cemetery: '',
      reference: '',
      frequency: '',
      message: '',
    });
    recaptchaRef.current?.reset();
    setHasTrackedFormStart(false);
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFrequencyChange = (frequency: string) => {
    setForm(prev => ({ ...prev, frequency }));
    trackFrequencySelection(frequency);
  };

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Surname is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) newErrors.email = 'Please enter a valid email';
    }
    if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!form.cemetery.trim()) newErrors.cemetery = 'Cemetery is required';
    if (!form.reference.trim()) newErrors.reference = 'Deceased name or tombstone number required';
    if (!form.frequency) newErrors.frequency = 'Please select a service frequency';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone_number: form.mobile,
      cemetery: form.cemetery,
      reference: form.reference,
      frequency: form.frequency,
      message: form.message || '',
      recaptcha_token: token,
      to_email: 'ricardo.desousa96@gmail.com',
    };

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

      if (!serviceID || !templateID || !userID) {
        console.error('EmailJS env vars not configured.');
        alert('Email service not configured. Please contact the administrator.');
        return;
      }

      await emailjs.send(serviceID, templateID, templateParams, userID);

      // Track conversions
      trackLead();
      trackLeadFormSubmit({
        frequency: form.frequency,
        currency: 'ZAR',
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
      });
      gtag_report_conversion_enhanced(0, 'ZAR', {
        email: form.email,
        first_name: form.firstName,
        last_name: form.lastName,
        phone_number: form.mobile,
      });

      alert('Form submitted successfully!');
      resetForm();
    } catch (err) {
      console.error('EmailJS error', err);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="px-4 py-12 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Get Started with GraveCare
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get in touch with a personalised care plan for your loved one&apos;s resting place.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InputField 
              label="First Name" 
              name="firstName" 
              value={form.firstName} 
              onChange={handleChange} 
              error={errors.firstName} 
            />
            <InputField 
              label="Surname" 
              name="lastName" 
              value={form.lastName} 
              onChange={handleChange} 
              error={errors.lastName} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InputField 
              label="Mobile Number" 
              name="mobile" 
              type="tel" 
              value={form.mobile} 
              onChange={handleChange} 
              error={errors.mobile}
              placeholder="e.g. 082 123 4567"
            />
            <InputField 
              label="Email Address" 
              name="email" 
              type="email" 
              value={form.email} 
              onChange={handleChange} 
              error={errors.email}
              placeholder="your.email@example.com"
            />
          </div>

          {/* Cemetery Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <InputField 
              label="Cemetery Name" 
              name="cemetery" 
              value={form.cemetery} 
              onChange={handleChange} 
              error={errors.cemetery}
              placeholder="e.g. Westpark Cemetery"
            />
            <InputField 
              label="Name of the Deceased or Tombstone Number" 
              name="reference" 
              value={form.reference} 
              onChange={handleChange} 
              error={errors.reference}
              placeholder="Full name or reference number"
            />
          </div>

          {/* Service Frequency Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Service Frequency *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "monthly", label: "Monthly Service", desc: "Ongoing monthly care" },
                { value: "once-off", label: "One-Time Service", desc: "Single comprehensive visit" }
              ].map((freq) => (
                <button
                  key={freq.value}
                  type="button"
                  onClick={() => handleFrequencyChange(freq.value)}
                  className={`p-4 lg:p-6 rounded-lg border-2 transition-all duration-200 text-left cursor-pointer ${
                    form.frequency === freq.value
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">{freq.label}</p>
                      <p className="text-xs lg:text-sm text-gray-600 mt-1">{freq.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 ${
                      form.frequency === freq.value 
                        ? "border-primary bg-primary" 
                        : "border-gray-300"
                    }`}>
                      {form.frequency === freq.value && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {errors.frequency && (
              <p className="text-sm text-red-600">{errors.frequency}</p>
            )}
          </div>

          {/* Additional Message */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Anything else we should know about the grave site or your specific requirements?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none resize-none"
            />
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center pt-4">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={(token: string | null) => {
                console.log('reCAPTCHA token:', token);
              }}
              ref={recaptchaRef}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 lg:py-5 rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 shadow-lg transform ${
                isSubmitting 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}