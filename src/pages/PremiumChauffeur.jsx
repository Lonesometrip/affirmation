import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PremiumChauffeur = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Premium Chauffeur Service</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Unser Premium Chauffeur Service bietet Ihnen ein exklusives Fahrerlebnis auf höchstem Niveau.
          Mit erstklassigen Fahrern, luxuriösen Fahrzeugen und einem maßgeschneiderten Service erfüllen wir
          die Ansprüche unserer anspruchsvollsten Kunden.
        </p>
        <p>
          Wählen Sie aus unseren verschiedenen Premium Chauffeur Angeboten das passende für Ihre individuellen Anforderungen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <i className="fas fa-briefcase text-blue-800 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold">Business Chauffeur</h2>
          </div>
          <p className="mb-4">
            Unser Business Chauffeur Service ist speziell auf die Bedürfnisse von Geschäftsreisenden zugeschnitten.
            Pünktlichkeit, Diskretion und Professionalität stehen an erster Stelle.
          </p>
          <Link to="/business-chauffeur" className="text-blue-800 hover:underline flex items-center">
            Mehr erfahren <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <i className="fas fa-star text-blue-800 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold">VIP Chauffeur</h2>
          </div>
          <p className="mb-4">
            Unser VIP Chauffeur Service bietet höchste Exklusivität und Diskretion für besondere Anlässe
            und anspruchsvolle Kunden. Maßgeschneiderte Lösungen nach Ihren Wünschen.
          </p>
          <Link to="/vip-chauffeur" className="text-blue-800 hover:underline flex items-center">
            Mehr erfahren <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <i className="fas fa-glass-cheers text-blue-800 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold">Event Chauffeur</h2>
          </div>
          <p className="mb-4">
            Unser Event Chauffeur Service sorgt für einen reibungslosen Transport bei Veranstaltungen,
            Konzerten, Galas oder Firmenevents. Perfekte Organisation und höchster Komfort.
          </p>
          <Link to="/event-chauffeur" className="text-blue-800 hover:underline flex items-center">
            Mehr erfahren <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <i className="fas fa-heart text-blue-800 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold">Wedding Chauffeur</h2>
          </div>
          <p className="mb-4">
            Unser Wedding Chauffeur Service macht Ihren besonderen Tag unvergesslich.
            Luxuriöse Fahrzeuge, perfekter Service und stilvolle Dekoration für Ihre Hochzeit.
          </p>
          <Link to="/wedding-chauffeur" className="text-blue-800 hover:underline flex items-center">
            Mehr erfahren <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
      
      <div className="mt-12 bg-blue-800 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Die Vorteile unseres Premium Chauffeur Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user-tie text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Erstklassige Chauffeure</h3>
            <p>Unsere Chauffeure sind sorgfältig ausgewählt, erfahren und diskret. Sie sprechen mehrere Sprachen und kennen die besten Routen.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-car-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Luxuriöse Fahrzeuge</h3>
            <p>Unsere Premium-Fahrzeugflotte umfasst nur die exklusivsten Modelle führender Hersteller in makellosem Zustand.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-concierge-bell text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Maßgeschneiderter Service</h3>
            <p>Wir passen unseren Service individuell an Ihre Bedürfnisse an. Von speziellen Getränken bis hin zu besonderen Routen - wir erfüllen Ihre Wünsche.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Bereit für Ihren Premium Chauffeur Service?</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Kontaktieren Sie uns jetzt für ein individuelles Angebot oder buchen Sie direkt online.
          Wir freuen uns darauf, Sie kennenzulernen und Ihnen einen erstklassigen Service zu bieten.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/kontakt" className="btn-primary">
            Kontakt aufnehmen
          </Link>
          <Link to="/tour-konfigurator" className="btn-secondary">
            Tour konfigurieren
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumChauffeur;
