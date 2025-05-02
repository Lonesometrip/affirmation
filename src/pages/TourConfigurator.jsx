import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TourConfigurator = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for form data
  const [formData, setFormData] = useState({
    tourType: '',
    startLocation: '',
    destination: '',
    date: '',
    time: '',
    duration: '4',
    passengers: '1',
    vehicle: '',
    additionalServices: [],
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        additionalServices: [...formData.additionalServices, value]
      });
    } else {
      setFormData({
        ...formData,
        additionalServices: formData.additionalServices.filter(service => service !== value)
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
  };

  // Go to next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  // Go to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  // Check if current step is valid
  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.tourType && formData.startLocation && formData.destination && formData.date && formData.time;
    } else if (currentStep === 2) {
      return formData.vehicle;
    }
    return true;
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tour Konfigurator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stellen Sie Ihre individuelle Tour zusammen und erhalten Sie ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
              <div className="text-green-600 mb-4">
                <i className="fas fa-check-circle text-6xl"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Vielen Dank für Ihre Anfrage!</h2>
              <p className="text-gray-700 mb-6">
                Wir haben Ihre Tour-Konfiguration erhalten und werden uns in Kürze mit einem individuellen Angebot bei Ihnen melden.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">
                  Zurück zur Startseite
                </Link>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded transition duration-300"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'border-blue-600 bg-blue-100' : 'border-gray-400'}`}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span className="text-sm mt-1">Tour Details</span>
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-blue-600 bg-blue-100' : 'border-gray-400'}`}>
                      <i className="fas fa-car"></i>
                    </div>
                    <span className="text-sm mt-1">Fahrzeug & Extras</span>
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-blue-600 bg-blue-100' : 'border-gray-400'}`}>
                      <i className="fas fa-user"></i>
                    </div>
                    <span className="text-sm mt-1">Kontaktdaten</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Tour Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Tour Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Art der Tour *</label>
                        <select
                          name="tourType"
                          value={formData.tourType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Bitte wählen</option>
                          <option value="city">Stadtrundfahrt</option>
                          <option value="shopping">Shopping Tour</option>
                          <option value="sightseeing">Sightseeing Tour</option>
                          <option value="business">Business Tour</option>
                          <option value="custom">Individuelle Tour</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Anzahl der Personen *</label>
                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {[...Array(20)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'Person' : 'Personen'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Startort *</label>
                      <input
                        type="text"
                        name="startLocation"
                        value={formData.startLocation}
                        onChange={handleChange}
                        placeholder="z.B. Hotel, Flughafen, Adresse"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Zielort *</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="z.B. Sehenswürdigkeit, Shopping Center, Stadt"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Datum *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Uhrzeit *</label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Dauer der Tour</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="2">2 Stunden</option>
                        <option value="4">4 Stunden</option>
                        <option value="6">6 Stunden</option>
                        <option value="8">8 Stunden</option>
                        <option value="custom">Ganztägig</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`px-6 py-3 rounded-md font-bold ${isStepValid() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                      >
                        Weiter <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Vehicle & Extras */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Fahrzeug & Extras</h2>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Fahrzeugtyp *</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div 
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.vehicle === 'limousine' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                          onClick={() => setFormData({...formData, vehicle: 'limousine'})}
                        >
                          <div className="flex items-center mb-2">
                            <input 
                              type="radio" 
                              name="vehicle" 
                              value="limousine" 
                              checked={formData.vehicle === 'limousine'} 
                              onChange={handleChange} 
                              className="mr-2"
                            />
                            <span className="font-medium">Limousine</span>
                          </div>
                          <p className="text-sm text-gray-600">Luxuriöse Limousine für bis zu 3 Personen</p>
                        </div>
                        
                        <div 
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.vehicle === 'van' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                          onClick={() => setFormData({...formData, vehicle: 'van'})}
                        >
                          <div className="flex items-center mb-2">
                            <input 
                              type="radio" 
                              name="vehicle" 
                              value="van" 
                              checked={formData.vehicle === 'van'} 
                              onChange={handleChange} 
                              className="mr-2"
                            />
                            <span className="font-medium">Van</span>
                          </div>
                          <p className="text-sm text-gray-600">Geräumiger Van für bis zu 7 Personen</p>
                        </div>
                        
                        <div 
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.vehicle === 'luxury' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                          onClick={() => setFormData({...formData, vehicle: 'luxury'})}
                        >
                          <div className="flex items-center mb-2">
                            <input 
                              type="radio" 
                              name="vehicle" 
                              value="luxury" 
                              checked={formData.vehicle === 'luxury'} 
                              onChange={handleChange} 
                              className="mr-2"
                            />
                            <span className="font-medium">Luxury</span>
                          </div>
                          <p className="text-sm text-gray-600">Premium Fahrzeug für besondere Anlässe</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Zusätzliche Services</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <input 
                            type="checkbox" 
                            id="drinks" 
                            name="additionalServices" 
                            value="drinks" 
                            checked={formData.additionalServices.includes('drinks')} 
                            onChange={handleCheckboxChange} 
                            className="mt-1 mr-2"
                          />
                          <div>
                            <label htmlFor="drinks" className="font-medium cursor-pointer">Getränkeservice</label>
                            <p className="text-sm text-gray-600">Wasser, Softdrinks und auf Wunsch Champagner</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <input 
                            type="checkbox" 
                            id="wifi" 
                            name="additionalServices" 
                            value="wifi" 
                            checked={formData.additionalServices.includes('wifi')} 
                            onChange={handleCheckboxChange} 
                            className="mt-1 mr-2"
                          />
                          <div>
                            <label htmlFor="wifi" className="font-medium cursor-pointer">WLAN im Fahrzeug</label>
                            <p className="text-sm text-gray-600">Schnelles Internet während der Fahrt</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <input 
                            type="checkbox" 
                            id="guide" 
                            name="additionalServices" 
                            value="guide" 
                            checked={formData.additionalServices.includes('guide')} 
                            onChange={handleCheckboxChange} 
                            className="mt-1 mr-2"
                          />
                          <div>
                            <label htmlFor="guide" className="font-medium cursor-pointer">Reiseführer</label>
                            <p className="text-sm text-gray-600">Professioneller Guide für Ihre Tour</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <input 
                            type="checkbox" 
                            id="childSeat" 
                            name="additionalServices" 
                            value="childSeat" 
                            checked={formData.additionalServices.includes('childSeat')} 
                            onChange={handleCheckboxChange} 
                            className="mt-1 mr-2"
                          />
                          <div>
                            <label htmlFor="childSeat" className="font-medium cursor-pointer">Kindersitz</label>
                            <p className="text-sm text-gray-600">Kindersitz für sichere Reisen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-bold"
                      >
                        <i className="fas fa-arrow-left mr-2"></i> Zurück
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className={`px-6 py-3 rounded-md font-bold ${isStepValid() ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                      >
                        Weiter <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-Mail *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Zusätzliche Informationen</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Besondere Wünsche oder Anforderungen"
                      ></textarea>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                      <h3 className="font-bold mb-2">Ihre Tour-Konfiguration</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><span className="font-medium">Art der Tour:</span> {formData.tourType === 'city' ? 'Stadtrundfahrt' : 
                                                                                formData.tourType === 'shopping' ? 'Shopping Tour' : 
                                                                                formData.tourType === 'sightseeing' ? 'Sightseeing Tour' : 
                                                                                formData.tourType === 'business' ? 'Business Tour' : 
                                                                                formData.tourType === 'custom' ? 'Individuelle Tour' : ''}</p>
                          <p><span className="font-medium">Startort:</span> {formData.startLocation}</p>
                          <p><span className="font-medium">Zielort:</span> {formData.destination}</p>
                          <p><span className="font-medium">Datum:</span> {formData.date}</p>
                          <p><span className="font-medium">Uhrzeit:</span> {formData.time}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">Dauer:</span> {formData.duration === 'custom' ? 'Ganztägig' : `${formData.duration} Stunden`}</p>
                          <p><span className="font-medium">Personen:</span> {formData.passengers}</p>
                          <p><span className="font-medium">Fahrzeug:</span> {formData.vehicle === 'limousine' ? 'Limousine' : 
                                                                            formData.vehicle === 'van' ? 'Van' : 
                                                                            formData.vehicle === 'luxury' ? 'Luxury' : ''}</p>
                          <p><span className="font-medium">Zusätzliche Services:</span> {formData.additionalServices.length > 0 ? 
                            formData.additionalServices.map(service => 
                              service === 'drinks' ? 'Getränkeservice' : 
                              service === 'wifi' ? 'WLAN' : 
                              service === 'guide' ? 'Reiseführer' : 
                              service === 'childSeat' ? 'Kindersitz' : ''
                            ).join(', ') : 'Keine'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-bold"
                      >
                        <i className="fas fa-arrow-left mr-2"></i> Zurück
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold"
                      >
                        Anfrage absenden <i className="fas fa-paper-plane ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Haben Sie Fragen zu unseren Touren?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Unser Team steht Ihnen gerne zur Verfügung, um alle Ihre Fragen zu beantworten und Ihnen bei der Planung Ihrer perfekten Tour zu helfen.
          </p>
          <Link to="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 inline-block">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
};

export default TourConfigurator;
