import { useEffect } from 'react';
import TourConfigurator from '../components/TourConfigurator';

const TourKonfigurator = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Tour Konfigurator</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Mit unserem Tour-Konfigurator können Sie Ihre individuelle Reise planen.
          Wählen Sie Ihre Ziele, Fahrzeugtyp und gewünschte Extras für ein maßgeschneidertes Erlebnis.
        </p>
        <p>
          Folgen Sie den einfachen Schritten unten, um Ihre perfekte Tour zusammenzustellen. Unser Team wird sich anschließend mit Ihnen in Verbindung setzen, um die Details zu besprechen und Ihnen ein individuelles Angebot zu unterbreiten.
        </p>
      </div>

      <TourConfigurator />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-map-marked-alt text-blue-800 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Flexible Routenplanung</h3>
          <p className="text-gray-700">
            Wählen Sie beliebige Start- und Zielpunkte für Ihre Tour. Wir planen die optimale Route für Sie.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-car text-blue-800 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Fahrzeugauswahl</h3>
          <p className="text-gray-700">
            Wählen Sie aus verschiedenen Fahrzeugklassen das passende Modell für Ihre Bedürfnisse.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-concierge-bell text-blue-800 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Individuelle Extras</h3>
          <p className="text-gray-700">
            Personalisieren Sie Ihre Tour mit zusätzlichen Services wie WLAN, Erfrischungen oder einem lokalen Guide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourKonfigurator;
