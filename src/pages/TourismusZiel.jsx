import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TourismusZiel = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Tourismus Ziel</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="mb-4">
          Entdecken Sie mit unserem Chauffeurservice die schönsten Orte Deutschlands und Europas.
          Wir bringen Sie zu faszinierenden Städten, exklusiven Shopping-Touren, aufregenden Freizeitparks und idyllischen Bauernhöfen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shopping Tours</h2>
          <p className="mb-4">
            Entdecken Sie die exklusivsten Shopping-Destinationen Europas mit unserem maßgeschneiderten Chauffeurservice.
          </p>
          <Link to="/shopping-tours" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Freizeitparks</h2>
          <p className="mb-4">
            Erleben Sie einen unvergesslichen Tag mit Familie oder Freunden in den aufregendsten Freizeitparks Europas.
          </p>
          <Link to="/freizeitparks" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Bauernhöfe</h2>
          <p className="mb-4">
            Entdecken Sie das ländliche Leben und die regionalen Traditionen mit unseren exklusiven Touren zu ausgewählten Bauernhöfen.
          </p>
          <Link to="/bauernhoefe" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Beliebte Städte Europa</h2>
          <p className="mb-4">
            Entdecken Sie die aufregendsten Metropolen Europas mit unserem exklusiven Chauffeurservice.
          </p>
          <Link to="/staedte" className="text-blue-600 hover:underline">Mehr erfahren</Link>
        </div>
      </div>
    </div>
  );
};

export default TourismusZiel;
