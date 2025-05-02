import { useEffect } from 'react';

const VipService = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">VIP Service</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Für besondere Anlässe und höchste Ansprüche. Diskrete Fahrer, 
          Luxusfahrzeuge und ein maßgeschneiderter Service nach Ihren Wünschen.
        </p>
        <p>
          Diese Seite befindet sich im Aufbau. Bitte besuchen Sie uns später wieder.
        </p>
      </div>
    </div>
  );
};

export default VipService;
