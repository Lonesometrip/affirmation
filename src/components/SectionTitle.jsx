import { useInView } from 'react-intersection-observer';

const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`mb-12 ${centered ? 'text-center' : ''} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className={`text-3xl font-bold mb-4 ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`${centered ? 'max-w-3xl mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-700'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
