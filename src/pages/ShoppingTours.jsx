import { useEffect } from 'react';

const ShoppingTours = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Shopping Tours</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Entdecken Sie die exklusivsten Shopping-Destinationen Europas mit unserem maßgeschneiderten Chauffeurservice. 
          Unsere Shopping Tours bieten Ihnen ein komfortables und stressfreies Einkaufserlebnis in den bekanntesten Einkaufsmeilen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Mit unserem erfahrenen Chauffeur genießen Sie:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Komfortable Tür-zu-Tür Service</li>
            <li>Flexible Abholzeiten nach Ihren Wünschen</li>
            <li>Ausreichend Stauraum für Ihre Einkäufe</li>
            <li>Lokale Expertise zu den besten Einkaufsmöglichkeiten</li>
            <li>VIP-Zugang zu ausgewählten Boutiquen (auf Anfrage)</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Beliebte Shopping-Destinationen</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-shopping-bag mr-2 text-blue-600"></i>
              <span>Kurfürstendamm in Berlin</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-shopping-bag mr-2 text-blue-600"></i>
              <span>Königsallee in Düsseldorf</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-shopping-bag mr-2 text-blue-600"></i>
              <span>Maximilianstraße in München</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-shopping-bag mr-2 text-blue-600"></i>
              <span>Goethestraße in Frankfurt</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-shopping-bag mr-2 text-blue-600"></i>
              <span>Jungfernstieg in Hamburg</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Shopping Tour anfragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTours;
