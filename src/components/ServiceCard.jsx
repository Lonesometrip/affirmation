import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, description, link, linkText, image, imageAlt }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`service-card bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {image && (
        <img 
          src={image} 
          alt={imageAlt || title} 
          className="w-full h-48 object-cover rounded-md mb-4"
          loading="lazy"
        />
      )}
      
      {icon && (
        <div className="text-center mb-4">
          <i className={`${icon} text-4xl text-blue-800`}></i>
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="text-center">
        <Link 
          to={link} 
          className="text-blue-800 hover:underline inline-flex items-center transition duration-300 hover:text-blue-600"
        >
          {linkText || "Mehr erfahren"}
          <i className="fas fa-chevron-right ml-2 text-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
