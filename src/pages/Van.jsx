import { useEffect } from 'react';

const Van = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Van</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unsere geräumigen Vans bieten Platz für bis zu 8 Personen und sind ideal für Gruppenreisen,
          Familienausflüge oder wenn Sie einfach mehr Platz für Ihr Gepäck benötigen.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default Van;
