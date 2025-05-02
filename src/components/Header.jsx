import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [mobileSubmenu, setMobileSubmenu] = useState({});
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  }, [location.pathname]);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [key]: !mobileDropdowns[key]
    });
  };

  const toggleMobileSubmenu = (key) => {
    setMobileSubmenu({
      ...mobileSubmenu,
      [key]: !mobileSubmenu[key]
    });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white text-gray-700 py-1.5 px-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 flex items-center">
              <i className="fab fa-facebook-f mr-1"></i>
              <span className="text-xs">Facebook</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition duration-300 flex items-center">
              <i className="fab fa-instagram mr-1"></i>
              <span className="text-xs">Instagram</span>
            </a>
            <a href="mailto:info@premium-chauffeur.de" className="text-gray-500 hover:text-gray-800 transition duration-300 flex items-center">
              <i className="fas fa-envelope mr-1"></i>
              <span className="text-xs">Email</span>
            </a>
            <a href="https://wa.me/4917631454340" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition duration-300 flex items-center">
              <i className="fab fa-whatsapp mr-1"></i>
              <span className="text-xs">WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-xs text-gray-700"><i className="fas fa-phone-alt mr-1"></i>+49 (0)176 31454340</span>
            <span className="hidden md:flex items-center text-xs"><i className="fas fa-envelope mr-1"></i><a href="mailto:info@premium-chauffeur.de" className="text-gray-700 hover:text-gray-900 transition duration-300">info@premium-chauffeur.de</a></span>
            <Link to="/simple-contact" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 text-xs transition duration-300">Book Now</Link>
          </div>
        </div>
      </div>

      {/* Header & Navigation */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <i className="fas fa-car-side text-blue-500 text-3xl mr-3"></i>
            <span className="tracking-wider">PREMIUM CHAUFFEUR</span>
          </Link>

          <nav className="hidden md:flex">
            <div className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </div>

            <div className="nav-item">
              <Link to="/fahrservice" className="nav-link">Fahrservice <i className="fas fa-chevron-down ml-1 text-xs"></i></Link>
              <div className="dropdown-menu">
                <Link to="/chauffeur-service" className="dropdown-link">Chauffeurservice</Link>
                <Link to="/flughafen-transfer" className="dropdown-link">Flughafentransfer</Link>
                <Link to="/vip-service" className="dropdown-link">VIP-Service</Link>
              </div>
            </div>



            <div className="nav-item">
              <Link to="/fuhrpark" className="nav-link">Fuhrpark <i className="fas fa-chevron-down ml-1 text-xs"></i></Link>
              <div className="dropdown-menu">
                <Link to="/limousine" className="dropdown-link">Limousine</Link>
                <Link to="/van" className="dropdown-link">Van</Link>
                <Link to="/luxury" className="dropdown-link">Luxury</Link>
              </div>
            </div>

            {/* Tourismus Ziel Dropdown */}
            <div className="nav-item">
              <Link to="/tourismus-ziel" className="nav-link">Tourismus Ziel <i className="fas fa-chevron-down ml-1 text-xs"></i></Link>
              <div className="dropdown-menu">
                <Link to="/shopping-tours" className="dropdown-link">Shopping Tours</Link>
                <Link to="/freizeitparks" className="dropdown-link">Freizeitparks</Link>
                <Link to="/bauernhoefe" className="dropdown-link">Bauernhöfe</Link>

                {/* Dropdown-Submenü: Beliebte Städte Europa */}
                <div className="dropdown-item">
                  <Link to="/beliebte-staedte" className="dropdown-link">Beliebte Städte Europa <i className="fas fa-chevron-right ml-1 text-xs"></i></Link>
                  <div className="submenu">
                    <Link to="/paris" className="dropdown-link">Paris</Link>
                    <Link to="/muenchen" className="dropdown-link">München</Link>
                    <Link to="/berlin" className="dropdown-link">Berlin</Link>
                    <Link to="/frankfurt" className="dropdown-link">Frankfurt</Link>
                    <Link to="/prag" className="dropdown-link">Prag</Link>
                    <Link to="/barcelona" className="dropdown-link">Barcelona</Link>
                    <Link to="/wien" className="dropdown-link">Wien</Link>
                    <Link to="/amsterdam" className="dropdown-link">Amsterdam</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-item">
              <Link to="/tour-konfigurator" className="nav-link">Tour Konfigurator</Link>
            </div>

            <div className="nav-item">
              <Link to="/kontakt" className="nav-link">Kontakt</Link>
            </div>

            <div className="nav-item ml-4">
              <Link to="/search" className="nav-link"><i className="fas fa-search"></i></Link>
            </div>
          </nav>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-white text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <div className="container mx-auto px-4">
              <ul className="space-y-4">
                <li><Link to="/" className="block text-white py-2">Home</Link></li>
                <li>
                  <div className="flex justify-between items-center">
                    <Link to="/fahrservice" className="block text-white py-2">Fahrservice</Link>
                    <button
                      className="text-white p-2 focus:outline-none"
                      onClick={() => toggleMobileDropdown('fahrservice')}
                    >
                      <i className={`fas fa-chevron-down ${mobileDropdowns.fahrservice ? 'transform rotate-180' : ''}`}></i>
                    </button>
                  </div>
                  {mobileDropdowns.fahrservice && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li><Link to="/chauffeur-service" className="block text-gray-300 py-1">Chauffeurservice</Link></li>
                      <li><Link to="/flughafen-transfer" className="block text-gray-300 py-1">Flughafentransfer</Link></li>
                      <li><Link to="/vip-service" className="block text-gray-300 py-1">VIP-Service</Link></li>
                    </ul>
                  )}
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <Link to="/fuhrpark" className="block text-white py-2">Fuhrpark</Link>
                    <button
                      className="text-white p-2 focus:outline-none"
                      onClick={() => toggleMobileDropdown('fuhrpark')}
                    >
                      <i className={`fas fa-chevron-down ${mobileDropdowns.fuhrpark ? 'transform rotate-180' : ''}`}></i>
                    </button>
                  </div>
                  {mobileDropdowns.fuhrpark && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li><Link to="/limousine" className="block text-gray-300 py-1">Limousine</Link></li>
                      <li><Link to="/van" className="block text-gray-300 py-1">Van</Link></li>
                      <li><Link to="/luxury" className="block text-gray-300 py-1">Luxury</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <Link to="/tourismus-ziel" className="block text-white py-2">Tourismus Ziel</Link>
                    <button
                      className="text-white p-2 focus:outline-none"
                      onClick={() => toggleMobileDropdown('tourismus')}
                    >
                      <i className={`fas fa-chevron-down ${mobileDropdowns.tourismus ? 'transform rotate-180' : ''}`}></i>
                    </button>
                  </div>
                  {mobileDropdowns.tourismus && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li><Link to="/shopping-tours" className="block text-gray-300 py-1">Shopping Tours</Link></li>
                      <li><Link to="/freizeitparks" className="block text-gray-300 py-1">Freizeitparks</Link></li>
                      <li><Link to="/bauernhoefe" className="block text-gray-300 py-1">Bauernhöfe</Link></li>
                      <li>
                        <div className="flex justify-between items-center">
                          <Link to="/beliebte-staedte" className="block text-gray-300 py-1">Beliebte Städte Europa</Link>
                          <button
                            onClick={() => toggleMobileSubmenu('staedte')}
                            className="text-gray-300 focus:outline-none"
                          >
                            <i className={`fas fa-chevron-down ${mobileSubmenu.staedte ? 'transform rotate-180' : ''}`}></i>
                          </button>
                        </div>
                        {mobileSubmenu.staedte && (
                          <ul className="pl-4 mt-2 space-y-2">
                            <li><Link to="/paris" className="block text-gray-300 py-1">Paris</Link></li>
                            <li><Link to="/muenchen" className="block text-gray-300 py-1">München</Link></li>
                            <li><Link to="/berlin" className="block text-gray-300 py-1">Berlin</Link></li>
                            <li><Link to="/frankfurt" className="block text-gray-300 py-1">Frankfurt</Link></li>
                            <li><Link to="/prag" className="block text-gray-300 py-1">Prag</Link></li>
                            <li><Link to="/barcelona" className="block text-gray-300 py-1">Barcelona</Link></li>
                            <li><Link to="/wien" className="block text-gray-300 py-1">Wien</Link></li>
                            <li><Link to="/amsterdam" className="block text-gray-300 py-1">Amsterdam</Link></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li><Link to="/tour-konfigurator" className="block text-white py-2">Tour Konfigurator</Link></li>
                <li><Link to="/kontakt" className="block text-white py-2">Kontakt</Link></li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
