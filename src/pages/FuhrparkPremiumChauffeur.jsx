import { useEffect } from 'react';

const FuhrparkPremiumChauffeur = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Fuhrpark Premium Chauffeur</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unser Premium Chauffeur Service kombiniert unsere exklusiven Fahrzeuge mit erstklassigen Fahrern,
          die über jahrelange Erfahrung und höchste Professionalität verfügen.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default FuhrparkPremiumChauffeur;
