import { useState } from 'react';

const TourConfigurator = () => {
  const [formData, setFormData] = useState({
    startLocation: '',
    destination: '',
    date: '',
    time: '',
    duration: '1',
    passengers: '1',
    vehicleType: 'limousine',
    extras: [],
    name: '',
    email: '',
    phone: '',
    notes: '',
    privacy: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'extras') {
      const updatedExtras = [...formData.extras];
      if (checked) {
        updatedExtras.push(value);
      } else {
        const index = updatedExtras.indexOf(value);
        if (index > -1) {
          updatedExtras.splice(index, 1);
        }
      }
      
      setFormData({
        ...formData,
        extras: updatedExtras
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.startLocation.trim()) {
        newErrors.startLocation = 'Bitte geben Sie einen Startort ein';
      }
      
      if (!formData.destination.trim()) {
        newErrors.destination = 'Bitte geben Sie ein Ziel ein';
      }
      
      if (!formData.date) {
        newErrors.date = 'Bitte wählen Sie ein Datum';
      }
      
      if (!formData.time) {
        newErrors.time = 'Bitte wählen Sie eine Uhrzeit';
      }
    } else if (step === 2) {
      // No validation needed for step 2
    } else if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name = 'Bitte geben Sie Ihren Namen ein';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein';
      }
      
      if (!formData.privacy) {
        newErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzbestimmungen';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setCurrentStep(4);
        
        // Reset success message after 10 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setCurrentStep(1);
          setFormData({
            startLocation: '',
            destination: '',
            date: '',
            time: '',
            duration: '1',
            passengers: '1',
            vehicleType: 'limousine',
            extras: [],
            name: '',
            email: '',
            phone: '',
            notes: '',
            privacy: false
          });
        }, 10000);
      }, 1500);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-6">Schritt 1: Reisedetails</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="startLocation" className="block text-gray-700 font-bold mb-2">Startort *</label>
                <input
                  type="text"
                  id="startLocation"
                  name="startLocation"
                  value={formData.startLocation}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.startLocation ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="z.B. Berlin Hauptbahnhof"
                />
                {errors.startLocation && <p className="text-red-500 text-sm mt-1">{errors.startLocation}</p>}
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-gray-700 font-bold mb-2">Ziel *</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.destination ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="z.B. München Flughafen"
                />
                {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
              </div>
              
              <div>
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Datum *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>
              
              <div>
                <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Uhrzeit *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
              </div>
              
              <div>
                <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">Dauer (Tage)</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {[...Array(14)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Tag' : 'Tage'}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="passengers" className="block text-gray-700 font-bold mb-2">Anzahl Personen</label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Person' : 'Personen'}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Weiter <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-6">Schritt 2: Fahrzeug & Extras</h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-4">Fahrzeugtyp</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition duration-300 ${formData.vehicleType === 'limousine' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="limousine"
                    checked={formData.vehicleType === 'limousine'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <i className="fas fa-car text-4xl mb-3 text-blue-800"></i>
                  <span className="font-bold">Limousine</span>
                  <span className="text-sm text-gray-600 mt-1">Bis zu 3 Personen</span>
                </label>
                
                <label className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition duration-300 ${formData.vehicleType === 'van' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="van"
                    checked={formData.vehicleType === 'van'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <i className="fas fa-shuttle-van text-4xl mb-3 text-blue-800"></i>
                  <span className="font-bold">Van</span>
                  <span className="text-sm text-gray-600 mt-1">Bis zu 8 Personen</span>
                </label>
                
                <label className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition duration-300 ${formData.vehicleType === 'luxury' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="luxury"
                    checked={formData.vehicleType === 'luxury'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <i className="fas fa-car-side text-4xl mb-3 text-blue-800"></i>
                  <span className="font-bold">Luxury</span>
                  <span className="text-sm text-gray-600 mt-1">Premium-Fahrzeug</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-4">Extras</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`border rounded-lg p-4 flex items-center cursor-pointer transition duration-300 ${formData.extras.includes('wifi') ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="checkbox"
                    name="extras"
                    value="wifi"
                    checked={formData.extras.includes('wifi')}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <div>
                    <span className="font-bold flex items-center">
                      <i className="fas fa-wifi mr-2 text-blue-800"></i>
                      WLAN im Fahrzeug
                    </span>
                    <span className="text-sm text-gray-600 block mt-1">Kostenloses WLAN während der Fahrt</span>
                  </div>
                </label>
                
                <label className={`border rounded-lg p-4 flex items-center cursor-pointer transition duration-300 ${formData.extras.includes('refreshments') ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="checkbox"
                    name="extras"
                    value="refreshments"
                    checked={formData.extras.includes('refreshments')}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <div>
                    <span className="font-bold flex items-center">
                      <i className="fas fa-glass-cheers mr-2 text-blue-800"></i>
                      Erfrischungen
                    </span>
                    <span className="text-sm text-gray-600 block mt-1">Getränke und kleine Snacks</span>
                  </div>
                </label>
                
                <label className={`border rounded-lg p-4 flex items-center cursor-pointer transition duration-300 ${formData.extras.includes('childSeat') ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="checkbox"
                    name="extras"
                    value="childSeat"
                    checked={formData.extras.includes('childSeat')}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <div>
                    <span className="font-bold flex items-center">
                      <i className="fas fa-baby-carriage mr-2 text-blue-800"></i>
                      Kindersitz
                    </span>
                    <span className="text-sm text-gray-600 block mt-1">Kindersitz für sichere Reisen</span>
                  </div>
                </label>
                
                <label className={`border rounded-lg p-4 flex items-center cursor-pointer transition duration-300 ${formData.extras.includes('guide') ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}>
                  <input
                    type="checkbox"
                    name="extras"
                    value="guide"
                    checked={formData.extras.includes('guide')}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <div>
                    <span className="font-bold flex items-center">
                      <i className="fas fa-map-marked-alt mr-2 text-blue-800"></i>
                      Reiseführer
                    </span>
                    <span className="text-sm text-gray-600 block mt-1">Lokaler Guide für Ihre Tour</span>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                <i className="fas fa-arrow-left mr-2"></i> Zurück
              </button>
              
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Weiter <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-6">Schritt 3: Persönliche Daten</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Ihr vollständiger Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Ihre E-Mail-Adresse"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Ihre Telefonnummer"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="notes" className="block text-gray-700 font-bold mb-2">Anmerkungen</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Weitere Informationen oder Wünsche zu Ihrer Tour"
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className={`mt-1 ${errors.privacy ? 'border-red-500' : ''}`}
                />
                <span className="ml-2 text-gray-700">
                  Ich habe die <a href="/datenschutz" className="text-blue-800 hover:underline">Datenschutzbestimmungen</a> gelesen und akzeptiere diese. *
                </span>
              </label>
              {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                <i className="fas fa-arrow-left mr-2"></i> Zurück
              </button>
              
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">
                      <i className="fas fa-circle-notch"></i>
                    </span>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Tour anfragen <i className="fas fa-paper-plane ml-2"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="text-center py-8 fade-in">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-lg mb-6">
              <i className="fas fa-check-circle text-5xl text-green-600 mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Vielen Dank für Ihre Anfrage!</h3>
              <p className="mb-4">
                Wir haben Ihre Tour-Anfrage erhalten und werden uns in Kürze bei Ihnen melden.
                Eine Bestätigung wurde an Ihre E-Mail-Adresse {formData.email} gesendet.
              </p>
              <p>
                Ihre Anfragenummer: <strong>TK-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</strong>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-bold mb-4 text-blue-800">Ihre Tour-Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="font-bold">Von:</p>
                  <p className="mb-2">{formData.startLocation}</p>
                  
                  <p className="font-bold">Nach:</p>
                  <p className="mb-2">{formData.destination}</p>
                  
                  <p className="font-bold">Datum & Zeit:</p>
                  <p className="mb-2">{new Date(formData.date).toLocaleDateString('de-DE')} um {formData.time} Uhr</p>
                  
                  <p className="font-bold">Dauer:</p>
                  <p className="mb-2">{formData.duration} {formData.duration === '1' ? 'Tag' : 'Tage'}</p>
                </div>
                
                <div>
                  <p className="font-bold">Personen:</p>
                  <p className="mb-2">{formData.passengers}</p>
                  
                  <p className="font-bold">Fahrzeug:</p>
                  <p className="mb-2">
                    {formData.vehicleType === 'limousine' && 'Limousine'}
                    {formData.vehicleType === 'van' && 'Van'}
                    {formData.vehicleType === 'luxury' && 'Luxury'}
                  </p>
                  
                  <p className="font-bold">Extras:</p>
                  {formData.extras.length > 0 ? (
                    <ul className="list-disc pl-5 mb-2">
                      {formData.extras.includes('wifi') && <li>WLAN im Fahrzeug</li>}
                      {formData.extras.includes('refreshments') && <li>Erfrischungen</li>}
                      {formData.extras.includes('childSeat') && <li>Kindersitz</li>}
                      {formData.extras.includes('guide') && <li>Reiseführer</li>}
                    </ul>
                  ) : (
                    <p className="mb-2">Keine Extras ausgewählt</p>
                  )}
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => {
                setCurrentStep(1);
                setFormData({
                  startLocation: '',
                  destination: '',
                  date: '',
                  time: '',
                  duration: '1',
                  passengers: '1',
                  vehicleType: 'limousine',
                  extras: [],
                  name: '',
                  email: '',
                  phone: '',
                  notes: '',
                  privacy: false
                });
              }}
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Neue Tour konfigurieren
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex-1 h-2 ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>1</div>
          <div className={`flex-1 h-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>2</div>
          <div className={`flex-1 h-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>3</div>
          <div className={`flex-1 h-2 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className={currentStep === 1 ? 'font-bold text-blue-800' : ''}>Reisedetails</span>
          <span className={currentStep === 2 ? 'font-bold text-blue-800' : ''}>Fahrzeug & Extras</span>
          <span className={currentStep === 3 ? 'font-bold text-blue-800' : ''}>Persönliche Daten</span>
          <span className={currentStep === 4 ? 'font-bold text-blue-800' : ''}>Bestätigung</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

export default TourConfigurator;
