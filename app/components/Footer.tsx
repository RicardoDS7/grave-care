import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">GraveCare</h3>
          <p>Professional gravesite care across South Africa. Trusted by families everywhere.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Links</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
            <li><a href="#get-started-form" className="hover:text-white">Get Started</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <div className="flex flex-col items-start gap-4 mb-4">
          <a
            href="https://wa.me/27688625442?text=Hi%20,%20I'm%20interested%20in%20your%20grave%20care%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:underline text-white rounded-full transition"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>

          <a href="mailto:support@gravecare.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white rounded-full hover:underline transition">
              <Mail className="text-lg"/>support@gravecare.co.za</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GraveCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
