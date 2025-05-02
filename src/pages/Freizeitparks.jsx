import { useEffect } from 'react';

const Freizeitparks = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Freizeitparks</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Erleben Sie einen unvergesslichen Tag mit Familie oder Freunden in den aufregendsten Freizeitparks Europas. 
          Unser Chauffeurservice bringt Sie bequem und sicher zu Ihrem Wunschziel und wieder zurück.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Unsere Freizeitpark-Services umfassen:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Abholung direkt vor Ihrer Haustür</li>
            <li>Bequeme An- und Abreise ohne Parkplatzsuche</li>
            <li>Flexible Abholzeiten nach Ihrem Parkbesuch</li>
            <li>Familien-freundliche Fahrzeuge mit ausreichend Platz</li>
            <li>Auf Wunsch: Snacks und Getränke für die Fahrt</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Beliebte Freizeitparks</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-ticket-alt mr-2 text-green-600"></i>
              <span>Europa-Park (Rust)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-ticket-alt mr-2 text-green-600"></i>
              <span>Phantasialand (Brühl)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-ticket-alt mr-2 text-green-600"></i>
              <span>Heide Park Resort (Soltau)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-ticket-alt mr-2 text-green-600"></i>
              <span>Movie Park Germany (Bottrop)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-ticket-alt mr-2 text-green-600"></i>
              <span>Legoland Deutschland (Günzburg)</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
              Freizeitpark-Transfer buchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freizeitparks;
