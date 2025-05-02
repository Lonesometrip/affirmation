import { useEffect } from 'react';

const FahrservicePremiumChauffeur = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Fahrservice Premium Chauffeur</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Unser Premium Chauffeur Service bietet Ihnen ein exklusives Fahrerlebnis 
          mit erstklassigem Service und höchstem Komfort.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default FahrservicePremiumChauffeur;
