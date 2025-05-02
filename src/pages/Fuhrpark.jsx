import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Fuhrpark = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Unser Fuhrpark</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Entdecken Sie unsere exklusive Fahrzeugflotte, die höchsten Ansprüchen an Komfort, 
          Stil und Sicherheit gerecht wird.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Limousine</h2>
          <p className="mb-4">
            Luxuriöse Limousinen für anspruchsvolle Transfers. Eleganz und Komfort für bis zu 3 Personen.
          </p>
          <Link to="/limousine" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Van</h2>
          <p className="mb-4">
            Geräumige Vans für Gruppen bis zu 8 Personen. Bequeme Reisen mit ausreichend Platz für Gepäck.
          </p>
          <Link to="/van" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Luxury</h2>
          <p className="mb-4">
            Premium-Fahrzeuge der Oberklasse für höchste Ansprüche. Exklusives Fahrerlebnis mit außergewöhnlichem Komfort.
          </p>
          <Link to="/luxury" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
      </div>
    </div>
  );
};

export default Fuhrpark;
