'use client';

import { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { trackLead } from '../utils/fbpixel';
import { trackLeadFormSubmit, trackFormStart, trackPlanSelection, trackFrequencySelection } from '../utils/gtm';
import { gtag_report_conversion_enhanced } from '../utils/googleAdsConversions';

export default function GetStartedForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [hasTrackedFormStart, setHasTrackedFormStart] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    cemetery: '',
    reference: '',
    plan: '',
    frequency: '',
  });

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
      plan: '',
      frequency: '',
    });
    recaptchaRef.current?.reset();
    setHasTrackedFormStart(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFrequencyChange = (frequency: string) => {
    setForm({ ...form, frequency, plan: '' });
    trackFrequencySelection(frequency);
  };

  const handlePlanSelection = (planName: string) => {
    setForm({ ...form, plan: planName });
    
    // Get plan details for tracking
    const selectedPlan = getCurrentPlans().find(p => p.name === planName);
    if (selectedPlan) {
      trackPlanSelection(planName, form.frequency, selectedPlan.price);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    if (!form.plan) {
      alert("Please select a Care Plan.");
      return;
    }

    if (!form.frequency) {
      alert("Please select a Service Frequency.");
      return;
    }

    // Get plan details for conversion tracking
    const selectedPlan = getCurrentPlans().find(p => p.name === form.plan);
    const planValue = selectedPlan ? selectedPlan.price : 0;

    emailjs
      .sendForm(
        'service_hng0fk9',
        'template_wso4fvf',
        e.target as HTMLFormElement,
        'RqlLJpvL8g5sgeNCO'
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Form submitted successfully!');
          
          // Track conversions
          trackLead(); // Meta Pixel
          
          // GTM conversion tracking
          trackLeadFormSubmit({
            plan: form.plan,
            frequency: form.frequency,
            value: planValue,
            currency: 'ZAR',
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
          });

          // Google Ads conversion tracking
          gtag_report_conversion_enhanced(
            planValue,
            'ZAR',
            {
              email: form.email,
              first_name: form.firstName,
              last_name: form.lastName,
              phone_number: form.mobile,
            }
          );
          
          resetForm();
        },
        (error) => {
          console.log('Error:', error.text);
          alert('There was an error sending your message.');
        }
      );
  };

  type Plan = {
    name: string;
    price: number;
    features: string[];
  };

  // Monthly plans data
  const monthlyPlans: Plan[] = [
    {
      name: "Basic Care",
      price: 179,
      features: [
        "Monthly cleaning",
        "Lawn edging and light trimming",
        "Weed removal",
        "Deep tombstone cleaning",
        "Before & after photo updates",
      ],
    },
    {
      name: "Premium Care",
      price: 299,
      features: [
        "Monthly cleaning",
        "Seasonal fresh flower replacement valued at R150",
        "Deep tombstone cleaning",
        "Weed clearing and grass trimming",
        "Before & after photo updates",
        "Free anniversary tribute",
      ],
    },
    {
      name: "Family Care",
      price: 499,
      features: [
        "Monthly cleaning for two graves at the same cemetery",
        "+R149/month for each additional grave",
        "Seasonal fresh flower replacement for each grave",
        "Deep tombstone cleaning",
        "Weed clearing and grass trimming",
        "Before & after photo updates",
        "Free anniversary tribute",
      ],
    },
  ];

  const onceOffPlans: Plan[] = [
    {
      name: "Basic Care",
      price: 249,
      features: [
        "One-time professional cleaning",
        "Lawn edging and light trimming",
        "Weed removal",
        "Deep tombstone cleaning",
        "Before & after photo set",
      ],
    },
    {
      name: "Premium Care",
      price: 399,
      features: [
        "One-time professional cleaning",
        "Seasonal fresh flower placement valued at R150",
        "Deep tombstone cleaning",
        "Weed clearing and grass trimming",
        "Before & after photo set",
      ],
    },
    {
      name: "Full Restoration",
      price: 899,
      features: [
        "One-time professional cleaning",
        "Seasonal fresh flower placement with vases replaced if damaged",
        "Tombstone and headstone expertly restored",
        "Lettering re-engraved or touched up for clarity",
        "Gravel top-up and ground leveling",
        "Before & after photo set",
      ],
    },
  ];

  // Get current plans based on frequency selection
  const getCurrentPlans = () => {
    if (form.frequency === 'monthly') return monthlyPlans;
    if (form.frequency === 'once-off') return onceOffPlans;
    return []; // Show no plans if no frequency selected
  };

  const getDisplayPrice = (plan: Plan) => {
    if (form.frequency === 'monthly') {
      return `R${plan.price}/mo`;
    } else if (form.frequency === 'once-off') {
      return `R${plan.price}`;
    }
    return `R${plan.price}`;
  };

  return (
    <section id="get-started-form" className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Start Your Request</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Name Fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
            <InputField label="Surname" name="lastName" value={form.lastName} onChange={handleChange} />
          </div>

          <InputField label="Mobile Number" name="mobile" type="tel" value={form.mobile} onChange={handleChange} />
          <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
          <InputField label="Cemetery Name" name="cemetery" value={form.cemetery} onChange={handleChange} />
          <InputField
            label="Name of the Deceased or Tombstone Number"
            name="reference"
            value={form.reference}
            onChange={handleChange}
          />

          {/* Frequency Selection - Moved Up */}
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-3">Service Frequency</label>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "monthly", label: "Monthly Subscription", desc: "Ongoing care" },
                { value: "once-off", label: "One-Time Service", desc: "Single visit" }
              ].map((freq) => (
                <button
                  key={freq.value}
                  type="button"
                  onClick={() => handleFrequencyChange(freq.value)}
                  className={`flex-1 min-w-[200px] p-4 rounded-xl border-2 transition-all duration-200 text-left cursor-pointer ${
                    form.frequency === freq.value
                      ? "border-[color:var(--primary)] bg-[color:var(--primary)]/10 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">{freq.label}</p>
                      <p className="text-sm text-gray-600">{freq.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      form.frequency === freq.value 
                        ? "border-[color:var(--primary)] bg-[color:var(--primary)]" 
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
          </div>

          {/* Plan Selection - Conditional Based on Frequency */}
          {form.frequency && (
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Choose Your {form.frequency === 'monthly' ? 'Monthly Subscription' : 'One-Time Service'} Plan
              </label>
              <div className="grid gap-4 md:grid-cols-3">
                {getCurrentPlans().map((plan) => (
                  <div
                    key={plan.name}
                    onClick={() => handlePlanSelection(plan.name)}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer group ${
                      form.plan === plan.name
                        ? "border-[color:var(--primary)] bg-[color:var(--primary)]/5 shadow-lg transform scale-105"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    {/* Selection indicator */}
                    <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      form.plan === plan.name 
                        ? "border-[color:var(--primary)] bg-[color:var(--primary)]" 
                        : "border-gray-300 group-hover:border-gray-400"
                    }`}>
                      {form.plan === plan.name && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>

                    <div className="pr-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                      
                      {/* Price display */}
                      <div className="mb-4">
                        <p className={`text-2xl font-bold ${
                          form.plan === plan.name ? "text-[color:var(--primary)]" : "text-gray-800"
                        }`}>
                          {getDisplayPrice(plan)}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder when no frequency is selected */}
          {!form.frequency && (
            <div className="text-center py-8 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
              <div className="text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-lg font-medium text-gray-600">Choose a service frequency above</p>
                <p className="text-sm text-gray-500">Select monthly or once-off to see available care plans</p>
              </div>
            </div>
          )}

          <input type="hidden" name="plan" value={form.plan} />
          <input type="hidden" name="frequency" value={form.frequency} />

          {/* reCAPTCHA */}
          <div className="pt-4 flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={(token: string | null) => {
                console.log("reCAPTCHA token:", token);
              }}
              ref={recaptchaRef}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-[color:var(--primary)] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[color:var(--secondary)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ label, name, type = "text", value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent transition-all duration-200"
        required
      />
    </div>
  );
}