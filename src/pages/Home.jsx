import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import InfoBar from '../components/InfoBar';

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    customerType: 'private', // Default to private customer
    dataProtection: false // Data protection agreement checkbox
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      customerType: 'private',
      dataProtection: false
    });
  };

  return (
    <>
      {/* Hero Slideshow */}
      <Slideshow />

      {/* Info Bar */}
      <InfoBar />

      {/* Contact Section */}
      <section className="relative bg-white text-gray-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Hero Text */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Exklusiver und zuverlässiger Chauffeurservice</h1>
              <p className="text-lg mb-6 text-gray-600">
                Professioneller Chauffeurservice für Geschäftsreisende und Privatkunden. Diskret, pünktlich und komfortabel.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link to="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 transition duration-300 text-center">
                  Jetzt anfragen
                </Link>
                <Link to="/fahrservice" className="bg-transparent hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 border border-blue-600 transition duration-300 text-center">
                  Unsere Services
                </Link>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:w-1/2 bg-gray-50 text-gray-800 p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Premium Chauffeur</h3>
              <p className="text-sm text-gray-600 mb-1">Exklusiv. Zuverlässig. Komfortabel.</p>
              <p className="text-sm text-gray-600 mb-4">Fragen Sie jetzt unverbindlich Ihren persönlichen Limousinenservice an. Gerne erstellen wir Ihnen ein individuelles Angebot.</p>
              <p className="text-sm text-gray-600 mb-4">Die mit einem * versehenen Felder sind Pflichtfelder.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail-Adresse *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                    placeholder="E-Mail-Adresse"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                    placeholder="Telefonnummer"
                  />
                </div>

                <div className="mb-4 flex space-x-8">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="private"
                      name="customerType"
                      value="private"
                      checked={formData.customerType === 'private'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="private" className="text-sm text-gray-700">Privatkunde</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="business"
                      name="customerType"
                      value="business"
                      checked={formData.customerType === 'business'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="business" className="text-sm text-gray-700">Geschäftskunde</label>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Ihre Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                    placeholder="Ihre Anfrage"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="dataProtection"
                      name="dataProtection"
                      checked={formData.dataProtection}
                      onChange={(e) => setFormData({...formData, dataProtection: e.target.checked})}
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="dataProtection" className="text-xs text-gray-700">
                      Ich stimme der Datenschutzerklärung zu. *
                    </label>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-6 transition duration-300"
                  >
                    Absenden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section - Alternating Layout */}
      <section className="bg-gray-50">
        {/* Unsere Chauffeure */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[400px] border-t border-b border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
              alt="Chauffeur öffnet Autotür"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white border-t border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Unsere Chauffeure</h2>
            <div className="w-16 h-0.5 bg-gray-300 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Alle unsere Chauffeure sind ausgebildete und durch den deutschen Verfassungsschutz sicherheitsüberprüfte Fahrer, die selbstverständlich über den gesetzlich vorgeschriebenen Personenbeförderungsschein verfügen.
            </p>
            <p className="text-gray-700 mb-6">
              Unsere Chauffeure sind ausschließlich mehrsprachig und in höchstem Maß serviceorientiert.
            </p>
            <Link to="/chauffeure" className="border border-gray-400 text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 inline-block w-max">
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Unser Fuhrpark */}
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 h-[400px] border-t border-b border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1605515298946-d664fc1a8d7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Luxus Fahrzeuge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white border-t border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Unser Fuhrpark</h2>
            <div className="w-16 h-0.5 bg-gray-300 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Mit über 20 Fahrzeugen im Fuhrpark, von Mercedes-Benz Maybach Limousine bis hin zum Mercedes VIP Sprinter, sind wir in der Lage, Ihnen jeden Wunsch zu erfüllen.
            </p>
            <p className="text-gray-700 mb-6">
              Jedes unserer Fahrzeug verfügt über eine gesonderte Genehmigung zur Personenbeförderung, nur dann ist die korrekte Absicherung der Fahrgäste gewährleistet.
            </p>
            <Link to="/fuhrpark" className="border border-gray-400 text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 inline-block w-max">
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Elektromobilität */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[400px] border-t border-b border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1593941707882-a5bba53b0998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
              alt="Elektrofahrzeug"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white border-t border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Elektromobilität</h2>
            <div className="w-16 h-0.5 bg-gray-300 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Der Weg zu emissionsfreien und effizienten Mobilität fängt heute schon an. Für die Unternehmensstrategie der Premium Chauffeur GmbH ist Nachhaltigkeit ein essentielles Element und zugleich Maßstab für den unternehmerischen Erfolg.
            </p>
            <p className="text-gray-700 mb-6">
              Mit dem Mercedes Benz EQS, sowie der vollelektrischen Großraumlimousine Mercedes EQV, leiten wir die Elektromobilität in unserem Fuhrpark ein. Erleben Sie die emissionsfreie Mobilität mit unserem Limousinen- und Chauffeur Service.
            </p>
            <Link to="/elektromobilitaet" className="border border-gray-400 text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 inline-block w-max">
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Unsere Fahrzeugflotte</h2>
            <p className="text-gray-400">Entdecken Sie unsere exklusiven Fahrzeuge für jeden Anlass</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Vehicle 1 */}
            <div className="bg-gray-800 rounded overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Mercedes S-Klasse"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Mercedes S-Klasse</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Limousine</span>
                  <span className="text-sm bg-blue-600 px-2 py-1 rounded">bis zu 3 Personen</span>
                </div>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Klimaanlage</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> WLAN</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Getränke</li>
                </ul>
                <Link to="/fuhrpark" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center">
                  Details ansehen
                  <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="bg-gray-800 rounded overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="BMW 7er"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">BMW 7er</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Limousine</span>
                  <span className="text-sm bg-blue-600 px-2 py-1 rounded">bis zu 3 Personen</span>
                </div>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Klimaanlage</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> WLAN</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Getränke</li>
                </ul>
                <Link to="/fuhrpark" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center">
                  Details ansehen
                  <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

            {/* Vehicle 3 */}
            <div className="bg-gray-800 rounded overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Mercedes V-Klasse"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Mercedes V-Klasse</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Van</span>
                  <span className="text-sm bg-blue-600 px-2 py-1 rounded">bis zu 7 Personen</span>
                </div>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Klimaanlage</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> WLAN</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Getränke</li>
                </ul>
                <Link to="/fuhrpark" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center">
                  Details ansehen
                  <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>

            {/* Vehicle 4 */}
            <div className="bg-gray-800 rounded overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Tesla Model S"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Tesla Model S</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Elektro</span>
                  <span className="text-sm bg-blue-600 px-2 py-1 rounded">bis zu 3 Personen</span>
                </div>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Klimaanlage</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> WLAN</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i> Getränke</li>
                </ul>
                <Link to="/fuhrpark" className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center">
                  Details ansehen
                  <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/fuhrpark" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 inline-block">
              Komplette Flotte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Warum Premium Chauffeur?</h2>
            <p className="text-gray-600">Wir bieten Ihnen erstklassigen Service auf höchstem Niveau</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-user-tie text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Professionelle Chauffeure</h3>
              <p className="text-gray-600">
                Unsere Fahrer sind erfahren, diskret und mehrsprachig. Sie kennen die besten Routen und sorgen für Ihre Sicherheit.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-car-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Fahrzeuge</h3>
              <p className="text-gray-600">
                Unsere Fahrzeugflotte besteht ausschließlich aus Fahrzeugen der Oberklasse in makellosem Zustand.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition duration-300">
              <div className="bg-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-headset text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Kundenservice</h3>
              <p className="text-gray-600">
                Unser Kundenservice steht Ihnen rund um die Uhr zur Verfügung. Wir sind immer für Sie da.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bereit für Ihren Premium Chauffeur Service?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns jetzt für ein individuelles Angebot oder buchen Sie direkt online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/kontakt" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded transition duration-300 text-center">
              Kontakt aufnehmen
            </Link>
            <Link to="/fahrservice" className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 border-2 border-white rounded transition duration-300 text-center">
              Services entdecken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
