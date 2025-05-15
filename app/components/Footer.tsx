const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">GraveCare</h4>
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
          <p>Email: support@gravecare.co.za</p>
          <p className="mt-1">Phone: +27 71 234 5678</p>
          <p className="mt-1">Based in South Africa</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GraveCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
