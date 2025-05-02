import { useEffect } from 'react';

const TourismusPremiumChauffeur = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Tourismus Premium Chauffeur</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unser Premium Chauffeur Service für touristische Ziele bietet Ihnen ein exklusives Reiseerlebnis.
          Entdecken Sie die schönsten Orte Europas mit einem erfahrenen Chauffeur, der nicht nur fährt,
          sondern auch als lokaler Guide fungiert.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default TourismusPremiumChauffeur;
