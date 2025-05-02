import { useEffect } from 'react';

const ChauffeurService = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Chauffeur Service</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unser professioneller Chauffeurservice steht Ihnen rund um die Uhr zur Verfügung. 
          Erfahrene Fahrer bringen Sie sicher und komfortabel an Ihr Ziel.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default ChauffeurService;
