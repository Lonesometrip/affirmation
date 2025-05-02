import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Exklusiver Fahrservice',
      description: 'Professioneller Chauffeurservice für alle Ihre Bedürfnisse',
      link: '/fahrservice',
      linkText: 'Mehr erfahren'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Premium Fuhrpark',
      description: 'Luxuriöse Fahrzeuge für jeden Anlass',
      link: '/fuhrpark',
      linkText: 'Unsere Fahrzeuge'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      title: 'Tourismus Ziele',
      description: 'Entdecken Sie die schönsten Orte mit unserem Chauffeurservice',
      link: '/tourismus-ziel',
      linkText: 'Ziele entdecken'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[70vh]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <Link
                  to={slide.link}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block"
                >
                  {slide.linkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-30 hover:bg-opacity-75 transition"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-30 hover:bg-opacity-75 transition"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
