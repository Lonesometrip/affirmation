import { useEffect } from 'react';

const Staedte = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Beliebte Städte Europa</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Entdecken Sie die aufregendsten Metropolen Europas mit unserem exklusiven Chauffeurservice. 
          Unsere erfahrenen Fahrer kennen die Städte wie ihre Westentasche und bringen Sie zu allen 
          Sehenswürdigkeiten und Geheimtipps.
        </p>
      </div>
      
      {/* Paris */}
      <div id="paris" className="city-section">
        <h2 className="city-title"><i className="fas fa-flag mr-2"></i> Paris</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Highlights</h3>
              <ul className="space-y-1">
                <li>Eiffelturm</li>
                <li>Louvre Museum</li>
                <li>Notre-Dame</li>
                <li>Champs-Élysées</li>
                <li>Montmartre</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="mb-4">
              Die Stadt der Liebe bietet unzählige kulturelle Highlights und kulinarische Genüsse. 
              Unser Chauffeurservice in Paris ermöglicht Ihnen, die Schönheit dieser ikonischen Stadt 
              ohne Stress zu genießen.
            </p>
            <p>
              Unser Paris-Service umfasst Transfers zwischen den Sehenswürdigkeiten, Abholung von 
              Flughäfen und Bahnhöfen sowie maßgeschneiderte Tagestouren.
            </p>
          </div>
        </div>
      </div>
      
      {/* London */}
      <div id="london" className="city-section">
        <h2 className="city-title"><i className="fas fa-flag mr-2"></i> London</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Highlights</h3>
              <ul className="space-y-1">
                <li>Big Ben & Houses of Parliament</li>
                <li>Tower of London</li>
                <li>Buckingham Palace</li>
                <li>British Museum</li>
                <li>Covent Garden</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p className="mb-4">
              Die britische Hauptstadt verbindet historische Pracht mit modernem Großstadtflair. 
              Unser Chauffeurservice in London navigiert souverän durch den Linksverkehr und den 
              Stadtverkehr, damit Sie entspannt die Sehenswürdigkeiten genießen können.
            </p>
            <p>
              Wir bieten spezielle Touren zu den königlichen Palästen, den besten Shopping-Vierteln 
              und historischen Stätten an.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staedte;
