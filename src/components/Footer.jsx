import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <i className="fas fa-car-side text-blue-500 text-3xl mr-3"></i>
              <span className="text-2xl font-bold tracking-wider">PREMIUM CHAUFFEUR</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing luxury transportation services with the highest standards of professionalism, discretion, and comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 flex items-center justify-center transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 flex items-center justify-center transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:info@premium-chauffeur.de" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 flex items-center justify-center transition duration-300">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/4917631454340" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 w-10 h-10 flex items-center justify-center transition duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 flex items-center justify-center transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/fahrservice" className="text-gray-400 hover:text-white transition duration-300">Our Services</Link></li>
              <li><Link to="/fuhrpark" className="text-gray-400 hover:text-white transition duration-300">Our Fleet</Link></li>
              <li><Link to="/tourismus-ziel" className="text-gray-400 hover:text-white transition duration-300">Destinations</Link></li>
              <li><Link to="/kontakt" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                <span>Premium Chauffeur GmbH<br />Musterstraße 123<br />10115 Berlin, Germany</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-500"></i>
                <span>+49 (0)176 31454340</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-500"></i>
                <a href="mailto:info@premium-chauffeur.de" className="hover:text-white transition duration-300">info@premium-chauffeur.de</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <h4 className="text-xl font-semibold mb-4">Payment Methods</h4>
            <div className="flex space-x-4">
              <i className="fab fa-cc-visa text-gray-400 text-2xl hover:text-white transition duration-300"></i>
              <i className="fab fa-cc-mastercard text-gray-400 text-2xl hover:text-white transition duration-300"></i>
              <i className="fab fa-cc-amex text-gray-400 text-2xl hover:text-white transition duration-300"></i>
              <i className="fab fa-bitcoin text-gray-400 text-2xl hover:text-white transition duration-300"></i>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Premium Chauffeur GmbH. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/impressum" className="text-gray-500 hover:text-white transition duration-300">Impressum</Link>
              <Link to="/datenschutz" className="text-gray-500 hover:text-white transition duration-300">Datenschutz</Link>
              <Link to="/agb" className="text-gray-500 hover:text-white transition duration-300">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
