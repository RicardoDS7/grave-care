'use client';

import emailjs from 'emailjs-com';
// import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

// const recaptchaRef = useRef<ReCAPTCHA>(null);
// const [verified, setVerified] = useState(false);

// <ReCAPTCHA
//   sitekey="YOUR_SITE_KEY"
//   onChange={(token) => {
//     if (token) setVerified(true);
//   }}
//   ref={recaptchaRef}
// />


export default function GetStartedForm() {
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

  // const token = recaptchaRef.current?.getValue();

  // if (!token) {
  //   alert("Please complete the reCAPTCHA.");
  //   return;
  // }

  emailjs
    .sendForm('service_hng0fk9', 'template_wso4fvf', e.target as HTMLFormElement, 'RqlLJpvL8g5sgeNCO')
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
  {
    name: "Basic Care",
    priceMonthly: 199,
    priceOnceOff: 249,
    description: "",
  },
  {
    name: "Standard care",
    priceMonthly: 629,
    priceOnceOff: 699,
    description: "",
  },
  {
    name: "Premium Care",
    priceMonthly: 1319,
    priceOnceOff: 1399,
    description: "",
  },
];



  return (
    <section id="get-started-form" className="px-6 py-20 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="e.g. Thabo"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Surname</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="e.g. Mokoena"
                className="w-full px-4 py-2 border border-gray-300 rounded-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="e.g. 082 123 4567"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cemetery Name</label>
            <input
              type="text"
              name="cemetery"
              value={form.cemetery}
              onChange={handleChange}
              placeholder="e.g. Westpark Cemetery"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of the Deceased or Tombstone Number
            </label>
            <input
              type="text"
              name="reference"
              value={form.reference}
              onChange={handleChange}
              placeholder="e.g. Maria van der Merwe or Plot A32"
              className="w-full px-4 py-2 border border-gray-300 rounded-full"
              required
            />
          </div>

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
