"use client";

import Image from "next/image";
import { basePath } from "./utils/basePath";
import GetStartedForm from "./components/GetStartedForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-background text-brand-foreground font-sans">
      {/* Hero */}
      <section className="bg-white text-center px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 shadow-sm">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Care for Your Loved One's Grave, from Anywhere
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            We clean, maintain, and beautify gravesites — and send you photo proof with every visit.
          </p>

          <button
            className="mt-8 bg-brand-primary text-white px-8 py-3 text-lg font-semibold rounded-md hover:bg-green-700 transition"
            onClick={() => {
              const formSection = document.getElementById("get-started-form");
              if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </button>

          <p className="mt-3 text-sm text-gray-400">Start with a location or service type.</p>
        </div>
      </section>



      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              emoji: "🪦",
              title: "Select a Cemetery",
              desc: "Tell us where your loved one rests.",
            },
            {
              emoji: "📅",
              title: "Choose a Plan",
              desc: "One-time or monthly care to suit your needs.",
            },
            {
              emoji: "📸",
              title: "Receive Photo Updates",
              desc: "We clean, place flowers & send proof of care.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-5xl mb-3">{item.emoji}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6 text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-10">Why Choose GraveCare</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm text-gray-700">
          {[
            "Trusted by families across South Africa",
            "Professional caretakers & florists",
            "Photo proof of every visit",
            "Flexible plans & transparent pricing",
          ].map((reason, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              ✅ {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started-form" className="px-6 py-20 bg-gray-50">
        <GetStartedForm />
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm text-center py-8">
        <p>&copy; {new Date().getFullYear()} GraveCare SA. All rights reserved.</p>
        <div className="mt-3 flex justify-center gap-5 text-gray-400">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </main>
  );
}
