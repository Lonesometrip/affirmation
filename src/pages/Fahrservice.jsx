import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const Fahrservice = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle 
        title="Fahrservice" 
        subtitle="Unser Fahrservice bietet Ihnen zuverlässige und komfortable Transportlösungen für alle Ihre Bedürfnisse. Wählen Sie aus verschiedenen Services und genießen Sie erstklassigen Service."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard 
          icon="fas fa-car"
          title="Chauffeur-Service"
          description="Professioneller Chauffeurservice mit erstklassigen Fahrern. Unser Service ist rund um die Uhr verfügbar und garantiert höchsten Komfort."
          link="/chauffeur-service"
          linkText="Details ansehen"
        />
        
        <ServiceCard 
          icon="fas fa-plane"
          title="Flughafen-Transfer"
          description="Stressfreie Transfers zu und von allen Flughäfen. Wir überwachen Ihren Flug und sorgen für einen pünktlichen Service."
          link="/flughafen-transfer"
          linkText="Details ansehen"
        />
        
        <ServiceCard 
          icon="fas fa-star"
          title="VIP-Service"
          description="Exklusiver Service für besondere Anlässe und anspruchsvolle Kunden. Maßgeschneiderte Lösungen nach Ihren Wünschen."
          link="/vip-service"
          linkText="Details ansehen"
        />
        
        <ServiceCard 
          icon="fas fa-crown"
          title="Premium-Chauffeur"
          description="Unser Premium-Chauffeurservice bietet höchste Qualität und Aufmerksamkeit für Details. Für Kunden, die nur das Beste akzeptieren."
          link="/fahrservice-premium-chauffeur"
          linkText="Details ansehen"
        />
      </div>
      
      <div className="mt-16 bg-blue-50 p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Warum unseren Fahrservice wählen?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Professionelle, erfahrene Chauffeure mit Personenbeförderungsschein</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Moderne, gepflegte Fahrzeugflotte für jeden Anlass</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Pünktlichkeitsgarantie und Flugüberwachung</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>24/7 Verfügbarkeit und flexible Buchungsmöglichkeiten</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Transparente Preisgestaltung ohne versteckte Kosten</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Individuelle Anpassung an Ihre Bedürfnisse</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Sofort-Buchung</h3>
            <p className="mb-4">Benötigen Sie kurzfristig einen Fahrservice? Kontaktieren Sie uns direkt:</p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <i className="fas fa-phone text-blue-800"></i>
                </div>
                <div>
                  <p className="font-bold">Telefonische Buchung</p>
                  <p className="text-lg">+49 (0) 30 123456789</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <i className="fas fa-envelope text-blue-800"></i>
                </div>
                <div>
                  <p className="font-bold">E-Mail Buchung</p>
                  <p className="text-lg">buchung@driversline.de</p>
                </div>
              </div>
            </div>
            
            <Link to="/kontakt" className="btn-primary w-full text-center">
              Anfrage senden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fahrservice;
