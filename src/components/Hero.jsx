import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay for the animation to be noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero relative">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="text-center relative z-10 px-4">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {title || "Exklusiver Chauffeur- und Limousinenservice"}
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {subtitle || "Erstklassiger Service für anspruchsvolle Kunden"}
        </p>
        
        <Link 
          to={buttonLink || "/kontakt"} 
          className={`btn-primary inline-flex items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {buttonText || "Jetzt anfragen"}
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
