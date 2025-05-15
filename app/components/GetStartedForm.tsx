'use client';

import { useState } from 'react';

export default function GetStartedForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    cemetery: '',
    reference: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // TODO: connect to Supabase, Firebase or an email service
  };

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
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Choose a service...</option>
              <option value="cleaning">Grave Cleaning</option>
              <option value="flowers">Fresh Flower Placement</option>
              <option value="full">Full Monthly Care Plan</option>
              <option value="custom">Custom Request</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
