import { useEffect } from 'react';

const Limousine = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Limousine</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unsere luxuriösen Limousinen bieten Ihnen höchsten Komfort und Eleganz für Ihre Reise.
          Ideal für Geschäftsreisen, besondere Anlässe oder wenn Sie einfach nur stilvoll reisen möchten.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default Limousine;
