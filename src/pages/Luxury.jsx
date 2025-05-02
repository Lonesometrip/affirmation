import { useEffect } from 'react';

const Luxury = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Luxury</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unsere Luxury-Fahrzeuge bieten Ihnen ein exklusives Fahrerlebnis der Extraklasse.
          Erleben Sie höchsten Komfort, modernste Technologie und erstklassigen Service.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default Luxury;
