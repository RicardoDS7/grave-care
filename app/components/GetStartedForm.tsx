'use client';

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

export default function GetStartedForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

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
        },
        (error) => {
          console.log('Error:', error.text);
          alert('There was an error sending your message.');
        }
      );
  };

  const plans = [
    { name: 'Basic Care', priceMonthly: 199, priceOnceOff: 249, description: '' },
    { name: 'Standard Care', priceMonthly: 629, priceOnceOff: 699, description: '' },
    { name: 'Premium Care', priceMonthly: 1319, priceOnceOff: 1399, description: '' },
  ];

  return (
    <section id="get-started-form" className="px-6 py-20 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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

          {/* Plan Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Care Plan</label>
            <div className="grid sm:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setForm({ ...form, plan: plan.name })}
                  className={`p-4 rounded-2xl border transition text-left cursor-pointer ${
                    form.plan === plan.name
                      ? "border-[color:var(--primary)] bg-[color:var(--primary)]/10"
                      : "border-gray-300 bg-white hover:bg-gray-50"
                  }`}
                >
                  <p className="font-semibold text-gray-800">{plan.name}</p>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    Monthly: R{plan.priceMonthly} / Once-off: R{plan.priceOnceOff}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Frequency Selection */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Service Frequency</label>
            <div className="flex gap-4">
              {["monthly", "once-off"].map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => setForm({ ...form, frequency: freq })}
                  className={`px-4 py-2 rounded-full border transition text-sm font-medium cursor-pointer ${
                    form.frequency === freq
                      ? "border-[color:var(--primary)] bg-[color:var(--primary)]/10"
                      : "border-gray-300 bg-white hover:bg-gray-50"
                  }`}
                >
                  {freq === "monthly" ? "Monthly Subscription" : "Once-Off Service"}
                </button>
              ))}
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="pt-4">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={(token: string | null) => {
                // No need to set state — token is checked directly in handleSubmit
                console.log("reCAPTCHA token:", token);
              }}
              ref={recaptchaRef}
            />


          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-[color:var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[color:var(--secondary)] transition"
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
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`e.g. ${label}`}
        className="w-full px-4 py-2 border border-gray-300 rounded-full"
        required
      />
    </div>
  );
}
