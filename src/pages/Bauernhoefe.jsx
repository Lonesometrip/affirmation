import { useEffect } from 'react';

const Bauernhoefe = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Bauernhöfe</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Entdecken Sie das ländliche Leben und die regionalen Traditionen mit unseren exklusiven Touren zu ausgewählten Bauernhöfen. 
          Ideal für Familien, Schulklassen oder alle, die authentische Landwirtschaft erleben möchten.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Vorteile unserer Bauernhof-Touren:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Bequeme Anreise zu abgelegenen Höfen</li>
            <li>Maßgeschneiderte Touren zu Bio-Bauernhöfen</li>
            <li>Kombinationsangebote mit Hofführungen</li>
            <li>Flexible Gruppentransfers für Schulklassen</li>
            <li>Saisonale Angebote wie Erdbeerfelder oder Kürbisernten</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Beliebte Bauernhof-Erlebnisse</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-tractor mr-2 text-yellow-600"></i>
              <span>Traditionelle Milchviehbetriebe</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-tractor mr-2 text-yellow-600"></i>
              <span>Bio-Höfe mit eigener Verarbeitung</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-tractor mr-2 text-yellow-600"></i>
              <span>Obstplantagen mit Selbstpflücke</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-tractor mr-2 text-yellow-600"></i>
              <span>Käsereien mit Verkostungen</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-tractor mr-2 text-yellow-600"></i>
              <span>Streichelzoos und Erlebnisbauernhöfe</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
              Bauernhof-Tour anfragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bauernhoefe;
